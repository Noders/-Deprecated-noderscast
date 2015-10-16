var React = require('react');
var List = require('../../../components/episodelist/list.jsx');
var episodiosArr = require('../../../api/capitulos.jsx');
require('./episodes.styl');
var Episodes = React.createClass({
  render:function(){
    return(
      <div className="episodios col-xs-8 col-xs-offset-2 text-center">
        <h2 className="text-left title">
          Episodios Anteriores 
          <a href="#/episodios" className="verMas">
          </a>
        </h2>
        <List limit="5"/>
        <div className="col-xs-12 no-padding futer">
        	<a href="#/episodios" className="link">
        		<span className="text"> Ver todos los episodios</span> <i className="fa fa-fe fa-chevron-circle-down"/>
    		  </a>
        </div>
      </div>
    );
  }
});

module.exports = Episodes;
