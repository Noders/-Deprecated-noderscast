var React = require('react');
require('./episodios.styl');
var Episodes   = require('../home/episodes/list.jsx');

module.exports =  React.createClass({
	componentDidMount: function() {
	    
	},
	render: function() {
		return (
			<div className="listado">
				<div className="col-xs-12 text-center featured parallax">
					<div className="col-xs-12 col-md-8 col-md-offset-2">
						<h3 className="title"><span className="text">Listado de Episodios</span> <i className="icon fa fa-fw fa-microphone"></i> </h3>
					</div>
				</div>
				<div className="episodios col-xs-8 col-xs-offset-2 text-center">
					<Episodes/>
				</div>
			</div>
		);
  }
});