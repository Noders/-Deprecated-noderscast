var React = require('react');
var List = require('../../../components/episodelist/list.jsx');
var episodiosArr = require('../../../api/capitulos.jsx');
require('./episodes.styl');
var Episodes = React.createClass({
  render:function(){
    return(
      <div className="episodios col-xs-8 col-xs-offset-2 text-center">
        <h2 className="text-left title">Episodios Anteriores <a href="#/episodios" className="verMas"><small>Ver todos los episodios</small></a></h2>
        <List limit="5"/>
        <div className="col-xs-12 no-padding futer" href="#/episodios">
        	<a href="#/episodios" className="link">
        		Ver todos los episodios <i className="fa fa-fe fa-chevron-circle-down"/>
    		</a>
    	</div>
      </div>
    );
  }
});

module.exports = Episodes;