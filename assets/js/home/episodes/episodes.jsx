var React = require('react');
var Audio =  require('../audio/audio.jsx');
var List = require('../../episodelist/list.jsx');
var episodiosArr = require('../../../api/capitulos.jsx');
require('./episodes.styl');
var Episodes = React.createClass({
  render:function(){
    return(
      <div className="episodios col-xs-8 col-xs-offset-2 text-center">
        <h2 className="text-left title">Episodios Anteriores <a href="#/episodios" className="verMas"><small>Ver todos los episodios</small></a></h2>
        <List/>
      </div>
    );
  }
});

module.exports = Episodes;