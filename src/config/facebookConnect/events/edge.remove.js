var connect = require('extensions').getOne('facebookConnect');

module.exports = function(trigger) {
  connect.then(function() {
    FB.Event.subscribe('edge.remove', function(url, element) {
      trigger({ url: url, element: element });
    });
  })
};
