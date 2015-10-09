var React = require('react');
var {Lifecycle, RouteContext} = require('react-router');

var Title       = require('./title/title.jsx');       
var Featured    = require('../../components/featured/featured.jsx');       
var Episodes    = require('./episodes/episodes.jsx');
var Socials     = require('./socialnetworks/socialnetworks.jsx');
var Presenters  = require('./hosts/hosts.jsx');

//layout
var TopBar = require('../../components/topbar/topbar.jsx');
var Footer = require('../../components/footer/footer.jsx');

require('./home.styl');
module.exports =  React.createClass({
  render: function() {
    return (
      <div>
        <TopBar/> 
        <div className="col-xs-12 text-center featured parallax">
          <Title/>
          <Featured/>
        </div>
        <Episodes limit="5"/>
        <Socials/>
        <Presenters/>
        <Footer/>
      </div>
    );
  }
});
