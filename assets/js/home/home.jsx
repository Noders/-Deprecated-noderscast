var React = require('react');
require('./home.styl');

var Featured    = require('./featured/featured.jsx');       
var Episodes    = require('./episodes/episodes.jsx');
var Socials     = require('./socialnetworks/socialnetworks.jsx');
var Presenters  = require('./hosts/hosts.jsx');

module.exports =  
React.createClass({
  render: function() {
        return (
          <div>
            <Featured/>
            <Episodes/>
            <Socials/>
            <Presenters/>
          </div>
        );
  }
});