var React = require('react');
require('./home.styl');

var Title       = require('./title/title.jsx');       
var Featured    = require('./featured/featured.jsx');       
var Episodes    = require('./episodes/episodes.jsx');
var Socials     = require('./socialnetworks/socialnetworks.jsx');
var Presenters  = require('./hosts/hosts.jsx');

module.exports =  
React.createClass({
  render: function() {
    return (
      <div>
        <div className="col-xs-12 text-center featured parallax">
          <Title/>
          <Featured/>
        </div>
        <Episodes/>
        <Socials/>
        <Presenters/>
      </div>
    );
  }
});