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