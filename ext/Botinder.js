/**
 * Botinder
 */

var Botinder = (function() {
  var user = null;

  function openAppTab(tabId) {
    if (tabId) {
      chrome.tabs.update(tabId, {
        url: '/app/index.html'
      });
    } else {
      chrome.tabs.create({
        url : '/app/index.html'
      });
    }
  }

  function openWelcomeTab(tabId) {
    if (tabId) {
      chrome.tabs.update(tabId, {
        url: '/app/welcome.html'
      });
    } else {
      chrome.tabs.create({
        url : '/app/welcome.html'
      });
    }
  }

  function setUser(_user) {
    localStorage.setItem('user', JSON.stringify(_user));
    user = _user;
  }

  function getUser() {
    return user;
  }

  function resetLocalStorage() {
    localStorage.removeItem('last_activity_date');
    localStorage.removeItem('last_update');
    localStorage.removeItem('tinder_token');
    localStorage.removeItem('user');
  }

  function reset() {
    resetLocalStorage();
    Botinder.Tinder.setToken(null);
    Botinder.IndexedDB.reset();
  }

  function chromeEvent() {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

      // get user account
      if (request.type === 'user') {
        var user = localStorage.getItem('user');

        if (user) {
          sendResponse(JSON.parse(localStorage.getItem('user')));
        } else {
          openWelcomeTab(sender.tab.id);
          sendResponse(false);
        }
      }

      if (request.type === 'reset') {
        reset();
        openWelcomeTab(sender.tab.id);
        return false;
      }

      return true;
    });

    // listen Botinder button
    chrome.browserAction.onClicked.addListener(function(tab) {

      // if Tinder token get update
      if (Botinder.Tinder.getToken()) {
        openAppTab();
      }

      // else open Facebook auth tab
      else {
        openWelcomeTab();
      }
    });
  }

  return {
    openAppTab: openAppTab,
    openWelcomeTab: openWelcomeTab,
    setUser: setUser,
    getUser: getUser,
    user: user,
    init: function() {
      Botinder.IndexedDB.init(function(result) {

        // init
        Botinder.Tinder.init();
        Botinder.Facebook.init();

        // reset localstorage if IndexedDB need upgrade
        if (result.upgradeneeded) {
          resetLocalStorage();
          Botinder.Tinder.setToken(null);
        }

        // user
        var user = localStorage.getItem('user');
        if (user) {
          setUser(JSON.parse(user));
        }

        // listen Chrome event
        chromeEvent();
      });
    }
  };
})();