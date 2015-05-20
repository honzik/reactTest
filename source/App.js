var Debug = require('debug');

global.debug = Debug('reactTest:base');
Debug.enable('reactTest:*');

var React = require('react');
var FriendsContainer = require('./components/FriendsContainer.react');

debug("Rendering start");

React.render(
  <FriendsContainer />,
  document.getElementById('mainSpot')
);

debug("Rendering complete");