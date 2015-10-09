var React = require('react');
require('./episodios.styl');
var TopBar = require('../../components/topbar/topbar.jsx');
var Footer = require('../../components/footer/footer.jsx');
var List   = require('../../components/episodelist/list.jsx');
var Title   = require('../home/title/title.jsx');

module.exports =  React.createClass({
	componentDidMount: function() {
	    
	},
	render: function() {
		return (
			<div className="listado fullheight">
				<TopBar/>
				<div className="col-xs-12 text-center featured parallax">
					<Title/>
					<div className="col-xs-12 col-md-8 col-md-offset-2">
						<h3 className="title">
							<span className="text">Listado de Episodios</span>
							<i className="icon fa fa-fw fa-microphone"/> 
						</h3>
					</div>
				</div>
				<div className="episodios col-xs-8 col-xs-offset-2 text-center">
					<List/>
				</div>
				<Footer/>
			</div>
		);
  }
});
