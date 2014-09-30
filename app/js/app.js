/**
 * Botinder
 */

// Init app
var Botinder = Ember.Application.create({
  rootElement: '#app'
});

// Router
Botinder.Router.map(function() {
  this.route('like', {path: '/'});
  this.route('profile', {path: '/profile/:user'});
  
  this.resource('matches', function() {
    this.route('match', {path: '/:match_id'});
  });
});

// SessionApplicationRouteMixin
Botinder.SessionApplicationRouteMixin = Ember.Mixin.create({
  beforeModel: function(transition) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      chrome.runtime.sendMessage({type: 'user'}, function(user) {
        if (user) {
          Botinder.user = user;
          Botinder.user.photo = user.photos[0].processedFiles[3].url;
          resolve();
        }
      });
    });
  }
});

// Analytics
Botinder.calculateAge = function(date) {
  var ageDifMs = Date.now() - date.getTime();
  return Math.abs(new Date(ageDifMs).getUTCFullYear() - 1970);
};

function getMonthName(month) {
    var ar = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    return ar[month];
}

Botinder.formatDate = function(date, time) {
    var currDate = date.getDate();
    var monthName = getMonthName(date.getMonth());
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return currDate + ' ' + monthName + ' ' + year + (time ? (', ' + hours + ':' + minutes) : '');
};

Botinder.formatText = function(text) {
    return text.replace(/<.+?>/g, '').replace(/\n/g, '<br>');
}

Botinder.ApplicationController = Ember.Controller.extend({
  user: null,

  init: function() {
    this.set('user', Botinder.User);

    setInterval(function() {
      chrome.runtime.sendMessage({type: 'update'});
    }, 4000);
  },

  actions: {
    reset: function() {
      chrome.runtime.sendMessage({type: 'reset'});
    }
  }
});
Botinder.ApplicationRoute = Ember.Route.extend(Botinder.SessionApplicationRouteMixin, {
  afterModel: function() {
    this.controllerFor('application').set('user', Botinder.user);
  }
});
Botinder.LikeController = Ember.ArrayController.extend({
  delay: 1500,
  running: false,
  getMore: false,
  displayNb: 0,
  users: [],
  likeAuto: false,
  noMore: false,
  stats: {
    profiles: 0,
    matchs: 0
  },

  start: function() {
    return this.get('running') ? 'Break!' : 'Start!';
  }.property('running'),

  renderUser: function() {
    var users = this.get('users');
    var displayNb = this.get('displayNb');

    // check running status
    if (this.get('getMore')) {
      return;
    }

    // check users length
    if (users.length === 0) {
      this.set('getMore', true);
      this.get('target').send('getMore');
      return;
    }

    // display user
    this.unshiftObject(users[0]);
    this.set('stats.profiles', this.get('stats.profiles') + 1);

    users.shift();

    if (displayNb >= 8) {
      this.popObject();
    }

    this.set('users', users);
    this.set('displayNb', displayNb + 1);

    if (this.get('running')) {
      setTimeout(function(context) {
        context.renderUser.call(context);
      }, this.get('delay'), this);
    }
  },

  runningChanged: function() {
    if (this.get('running')) {
      this.renderUser();
    }
  }.observes('running'),

  gotMore: function(users) {
    var self = this;

    if (users.length == 0) {
      this.set('noMore', true);
      this.set('getMore', false);

      setTimeout(function() {
        self.renderUser();
      }, 4000);
    } else {
      this.set('users', this.get('users').concat(users));
      this.set('noMore', false);
      this.set('getMore', false);
      this.renderUser();
    }
  },

  init: function() {
    var self = this;

    this._super();

    setTimeout(function() {
      self.renderUser();
    }, 1000);
  },

  actions: {
    changeRunningStatus: function() {
      this.toggleProperty('running');
    },

    like: function(like, user, callback) {


      chrome.runtime.sendMessage({
        type: 'request',
        path: (like ? 'like' : 'dislike') + '/' + user.id
      }, function(result) {
        if (result.match) {
          this.set('stats.matchs', this.get('stats.matchs') + 1);
        }

        callback(result);
      });

      if (!this.get('running')) {
        this.renderUser();
      }
    },

    changeDelay: function() {
      this.set('delay', $('.delay-select').val());
    }
  }
});
Botinder.LikeRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render();
    this.render('likeSide', {
      outlet: 'side'
    });
  },
  
  fetch: function(callback) {
    chrome.runtime.sendMessage({
      type: 'request',
      path: 'recs'
    }, function(obj) {
      var users = [];

      if (!obj || !obj.results) {
        callback([]);
        return;
      }

      for (var i = 0; i < obj.results.length; i++) {
        var _user = obj.results[i];
        var photos = [];

        for (var ii = 0; ii < 6; ii++) {
          photos[ii] = _user.photos[ii] ? {
            small: _user.photos[ii].processedFiles[2].url,
            big: _user.photos[ii].url
          } : false;
        }

        var birth_date = new Date(_user.birth_date);
        var ping_time = new Date(_user.ping_time);

        users.push({
          id: _user._id,
          name: _user.name,
          age: Botinder.calculateAge(birth_date),
          ping_time: Botinder.formatDate(ping_time, true),
          distance_km: Math.round(_user.distance_mi * 1.609),
          distance_mi: _user.distance_mi,
          photos: photos
        });
      }

      callback(users);
    });
  },

  deactivate: function() {
    this.controllerFor('like').set('running', false);
  },

  actions: {
    getMore: function() {
      var self = this;
      this.fetch(function(users) {
        self.get('controller').gotMore(users);
      });
    }
  }
});
Botinder.LikeView = Ember.View.extend({
  itemView: Ember.View.extend({
    tagName: 'div',
    classNames: ['item'],
    templateName: 'like.item',

    like: function(like) {
      var self = this;

      if (this.get('user.disableLike')) {
        return;
      }

      if (like) {
        this.set('user.liked', true);
      } else {
        this.set('user.disliked', true);
      }

      this.get('controller').send('like', like, this.get('user'), function(result) {
        if (result.match) {
          self.set('user.matchId', result.match._id);
        }
      });
      
      this.set('user.disableLike', true);
    },

    didInsertElement: function() {
      if (this.get('controller.running') && this.get('controller.likeAuto')) {
        this.like(true);
      }
    },

    photoView: Ember.View.extend({
      tagName: 'div',
      classNames: ['photo-container'],
      attributeBindings: ['style'],
      style: function() {
        return 'background-image: url(' + this.get('photo.small') + ');';
      }.property('photo')
    })
  }),
});
Botinder.MatchesMatchController = Ember.Controller.extend(Ember.Evented, {
  needs: ['application'],
  message: '',

  modelObs: function() {
    var self = this;
    setTimeout(function() {
      self.trigger('scroll');
    }, 50);
  }.observes('model'),
  
  actions: {
    submit: function() {
      var match = this.get('model');
      
      chrome.runtime.sendMessage({
        type: 'message_post',
        id: match.id,
        message: this.get('message')
      });

      this.set('message', '');

    }
  }
});
Botinder.MatchesMatchRoute = Ember.Route.extend({
  timeout: null,
  updateEvent: false,
  ts: false,
  
  activate: function() {
    var self = this;

    this.set('ts', setInterval(function() {
      self.refresh();
    }, 6000));
  },

  deactivate: function() {
    clearInterval(this.get('ts'));
  },

  model: function(params) {
    return new Ember.RSVP.Promise(function(resolve) {
      chrome.runtime.sendMessage({
        type: 'match',
        id: params.match_id
      }, function(_match) {
        var _user = _match.person;

        // dates
        var birth_date = new Date(_user.birth_date);
        var created_date = new Date(_match.created_date);

        var person = {
          id: _user._id,
          name: _user.name,
          age: Botinder.calculateAge(birth_date),
          photo: _user.photos[0].processedFiles[3].url
        };

        var limit = 60;
        var offset = _match.messages.length > limit ? _match.messages.length - limit : 0;

        var messages = [];
        for (var i = offset; i < _match.messages.length; i++) {
          var message = _match.messages[i];

          if (message.from == Botinder.user._id) {
            var author = {
              name: Botinder.user.name,
              photo: Botinder.user.photo
            };
          } else {
            var author = {
              name: person.name,
              photo: person.photo
            };
          }

          messages.push({
            timestamp: message.timestamp,
            content: message.message,
            author: author
          });
        }

        var match = {
          id: _match._id,
          person: person,
          created_date: Botinder.formatDate(created_date, true),
          messages: messages
        };

        resolve(match);
      });
    });
  }
});
Botinder.MatchesMatchView = Ember.View.extend({
  refreshScroll: function() {
    var $messages = $('.match .messages');
    var height = window.innerHeight - $('.match .profil').height() - $('.match .write').height();
    
    $messages.css('height', height + 'px');
    $messages.scrollTop($messages[0].scrollHeight);
  },

  didInsertElement: function() {
    var self = this;

    $(window).on('scroll.match', this.refreshScroll);
    $(window).on('resize.match', this.refreshScroll);

    this.refreshScroll();

    this.get('controller').on('scroll', this, this.refreshScroll);

    $('.message-field').focus();
    $('.message-field').on('keyup', function(e) {
      if (e.keyCode == 13) {
        self.get('controller').send('submit');
      }
    });
  },

  willDestroyElement: function() {
    $(window).off('scroll.match');
    $(window).off('resize.match');

    this.get('controller').off('scroll', this, this.refreshScroll);

    $('.message-field').off('keyup');
  },

  matchObs: function() {
    $('.message-field').focus();
  }.observes('controller')
});
Botinder.MatchesRoute = Ember.Route.extend({
  updateEvent: false,
  ts: false,

  activate: function() {
    var self = this;

    this.set('ts', setInterval(function() {
      self.refresh();
    }, 6000));
  },

  deactivate: function() {
    clearInterval(this.get('ts'));
  },

  renderTemplate: function() {
    this.render();
    this.render('matchesSide', {
      outlet: 'side'
    });
  },
  
  model: function(params) {
    return new Ember.RSVP.Promise(function(resolve) {
      chrome.runtime.sendMessage({
        type: 'matches',
        offset: params.queryParams.page ? params.queryParams.page : null
      }, function(results) {
        for (var i = 0; i < results.length; i++) {
          var match = results[i];

          if (match.person.photos.length > 0) {
            match.id = match._id;
            match.person.photo = match.person.photos[0].processedFiles[3].url;
          }

          results[i] = match;
        }
        resolve(results);
      });
    });
  }
});
Botinder.MatchesView = Ember.View.extend({
  refreshScroll: function() {
    var height = (window.innerHeight - $('.main-side .top').height() - 1);
    $('.side').css('height', height + 'px');
  },

  didInsertElement: function() {
    $(window).on('scroll.matches', this.refreshScroll);
    $(window).on('resize.matches', this.refreshScroll);
    
    this.refreshScroll();
  },

  willDestroyElement: function() {
    $(window).off('scroll.matches');
    $(window).off('resize.matches');
  },
});
Botinder.ProfileRoute = Ember.Route.extend({
  model: function(params) {
    return new Ember.RSVP.Promise(function(resolve) {
      chrome.runtime.sendMessage({
        type: 'request',
        path: 'user/' + params.user
      }, function(obj) {
        var _user = obj.results;
        var photos = [];

        for (var i = 0; i < 6; i++) {
          photos[i] = _user.photos[i] ? {
            big: _user.photos[i].processedFiles[0].url,
            small: _user.photos[i].processedFiles[2].url
          } : false;
        }

        var birth_date = new Date(_user.birth_date);
        var ping_time = new Date(_user.ping_time);

        resolve({
          id: _user._id,
          name: _user.name,
          bio: Botinder.formatText(_user.bio),
          age: Botinder.calculateAge(birth_date),
          ping_time: Botinder.formatDate(ping_time, true),
          distance_km: Math.round(_user.distance_mi * 1.609),
          distance_mi: _user.distance_mi,
          photos: photos
        });
      });
    });
  }
});

var KEY_LEFT = 37;
var KEY_RIGHT = 39;
$(document).on('ready',function(){
	$(document).on('keydown', function(e){
		if(e.keyCode == KEY_LEFT) {
			$(".like-item:first .actions .button-patch.red").trigger('click');
		} else if(e.keyCode == KEY_RIGHT) {
			$(".like-item:first .actions .button-patch.green").trigger('click');
		}
	});
});
