Ember.TEMPLATES["account"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Account");
  
});
Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Botinder");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<img class=\"user-photo\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("user.photo")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("> ");
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Booster");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Matches");
  }

  data.buffer.push("<div class=\"main-side\">\n  <div class=\"top\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("botinder-logo")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "like", options) : helperMissing.call(depth0, "link-to", "like", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <div class=\"slogan\">a Tinder extension</div>\n    <ul class=\"main-menu\">\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "profile", "user._id", options) : helperMissing.call(depth0, "link-to", "profile", "user._id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "like", options) : helperMissing.call(depth0, "link-to", "like", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "matches", options) : helperMissing.call(depth0, "link-to", "matches", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reset", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"reset\">Sign out</li>\n    </ul>\n  </div>\n  <div class=\"side\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "side", options) : helperMissing.call(depth0, "outlet", "side", options))));
  data.buffer.push("\n  </div>\n</div>\n<div class=\"page\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["like"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.itemView", {hash:{
    'userBinding': ("user")
  },hashTypes:{'userBinding': "ID"},hashContexts:{'userBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"page-like\">\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("noMore::hidden :no-more")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      No more profile, please increase distance<br>\n      on your mobile then wait 4s. (or refresh).\n  </div>\n  <div class=\"like-list\">\n    ");
  stack1 = helpers.each.call(depth0, "user", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["likeSide"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"side-like\">\n  <div class=\"options\">\n    <div class=\"field field-checkbox\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'name': ("likeAuto"),
    'id': ("field-like"),
    'checked': ("likeAuto")
  },hashTypes:{'type': "STRING",'name': "STRING",'id': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'name': depth0,'id': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      <label for=\"field-like\">Like automatically</label>\n    </div>\n    <div class=\"field\">\n      <label for=\"field-delay\">Speed</label>\n      <select id=\"field-delay\" class=\"delay-select field-select\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeDelay", {hash:{
    'on': ("change")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        <option value=\"3200\">slow</option>\n        <option value=\"1500\" selected>normal</option>\n        <option value=\"900\">fast</option>\n        <option value=\"600\">booster!</option>\n      </select>\n    </div>\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeRunningStatus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":button :big :light running:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "start", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n  </div>\n  <div class=\"stats\">\n    <big>");
  stack1 = helpers._triageMustache.call(depth0, "stats.profiles", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</big><br>\n    <small>profiles</small>\n  </div>\n  <div class=\"info\">\n    Developed by <a href=\"http://jonathan.am\" target=\"_blank\">Jonathan.am</a><br>\n    Bitcoin <a href=\"https://blockchain.info/address/1KrJDJNa4R4kC5Rc4ayBcaM3TULqxutasV\" target=\"_blank\">1KrJDJNa4R4kC5Rc4...</a>\n  </div>\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["matches"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"page-matches\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["matchesSide"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <li class=\"item\">\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "matches.match", "match._id", options) : helperMissing.call(depth0, "link-to", "matches.match", "match._id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </li>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "match.new_data", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "match.person.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("match.person.photo")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"user-photo\">\n      ");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("<i class=\"new\"></i>");
  }

  data.buffer.push("<div class=\"page-matches\">\n  <ul class=\"matches\">\n    ");
  stack1 = helpers.each.call(depth0, "match", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["profile"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <div class=\"photo-container\">\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("photo.big")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      </div>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"page-profile\">\n  <header class=\"user\">\n    <div class=\"username\">");
  stack1 = helpers._triageMustache.call(depth0, "model.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"age\">");
  stack1 = helpers._triageMustache.call(depth0, "model.age", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></div>\n    <div class=\"min-title\">Distance</div>\n    <div class=\"min-value\">");
  stack1 = helpers._triageMustache.call(depth0, "model.distance_mi", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" miles (");
  stack1 = helpers._triageMustache.call(depth0, "model.distance_km", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" km)</div>\n    <div class=\"min-title\">Connection</div>\n    <div class=\"min-value\">");
  stack1 = helpers._triageMustache.call(depth0, "model.ping_time", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    <div class=\"min-title\">Bio</div>\n    <div class=\"min-value\">");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.bio", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n  </header>\n  <section class=\"photos\">\n    ");
  stack1 = helpers.each.call(depth0, "photo", "in", "model.photos", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </section>\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["like/item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "like", 0, {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["ID","INTEGER"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":button-patch :big :red user.disliked:active user.liked:inactive")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Dislike</button>\n          ");
  data.buffer.push("\n            <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "like", 1, {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["ID","INTEGER"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":button-patch :big :green user.liked:active user.disliked:inactive")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Like</button>");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n            <button class=\"button medium pink active\">Match!</button>\n          ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <td class=\"photo\">\n        ");
  stack1 = helpers['if'].call(depth0, "photo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </td>\n    ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "profile", "user.id", options) : helperMissing.call(depth0, "link-to", "profile", "user.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.photoView", {hash:{
    'photoBinding': ("photo")
  },hashTypes:{'photoBinding': "ID"},hashContexts:{'photoBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  }

  data.buffer.push("<table class=\"like-item\">\n  <tr>\n    <td class=\"profil\">\n      <div class=\"wrap\">\n        <div class=\"username\">");
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"age\">");
  stack1 = helpers._triageMustache.call(depth0, "user.age", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></div>\n        <div class=\"info\">\n          <div class=\"min-title\">Distance</div>\n          <div class=\"min-value\">");
  stack1 = helpers._triageMustache.call(depth0, "user.distance_mi", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" miles (");
  stack1 = helpers._triageMustache.call(depth0, "user.distance_km", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" km)</div>\n          <div class=\"min-title\">Connection</div>\n          <div class=\"min-value\">");
  stack1 = helpers._triageMustache.call(depth0, "user.ping_time", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        </div>\n        <div class=\"actions\">\n          ");
  stack1 = helpers.unless.call(depth0, "user.matchId", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      </div>\n    </td>\n    ");
  stack1 = helpers.each.call(depth0, "photo", "in", "user.photos", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n</table>");
  return buffer;
  
});
Ember.TEMPLATES["matches/match"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("model.person.photo")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"user-photo\">\n        <span class=\"username\">");
  stack1 = helpers._triageMustache.call(depth0, "model.person.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"age\">");
  stack1 = helpers._triageMustache.call(depth0, "model.person.age", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></span>\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <li class=\"item\">\n        <div class=\"photo-container\"><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("message.author.photo")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"user-photo\"></div>\n        <div class=\"message\">\n          <div class=\"content\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "message.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n        </div>\n      </li>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"match\">\n  <div class=\"profil\">\n    <div class=\"wrap\">\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "profile", "model.person.id", options) : helperMissing.call(depth0, "link-to", "profile", "model.person.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <span class=\"informations\">Since ");
  stack1 = helpers._triageMustache.call(depth0, "model.created_date", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n    </div>\n  </div>\n  <ul class=\"messages\">\n    ");
  stack1 = helpers.each.call(depth0, "message", "in", "model.messages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n  <form class=\"write\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'class': ("message-field"),
    'value': ("message"),
    'placeholder': ("Write here...")
  },hashTypes:{'class': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'class': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n    <button type=\"submit\" class=\"button post\">Post!</button>\n  </form>\n</div>");
  return buffer;
  
});