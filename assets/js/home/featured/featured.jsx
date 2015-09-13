var React = require('react');
require('./featured.styl');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var Audio =  require('../audio/audio.jsx');

var Featured = React.createClass({
	getInitialState: function() {
		return {
			url: 'http://d1xuhndp8unoax.cloudfront.net/EP06.mp3',
			title: 'Noderscast - E06 - [En Vivo] Hablemos de Seniority, con Fernando Larragaña'
		};
	},
	componentDidMount: function() {
		if (ExecutionEnvironment.canUseDOM) {
			document.documentElement.addEventListener('scroll', this.handleScroll);
		}
	},
	componentWillUnmount() {
    	document.documentElement.removeEventListener('scroll', this.handleScroll);
  	},
	handleScroll() {
		console.log(this.refs.nav.getDOMNode())
		this.refs.nav.getDOMNode().style.top = document.documentElement.scrollTop + 'px';
	},
	render: function() {
		return (
			<div className="col-xs-12 text-center featured parallax">
				<div className="col-xs-12">
					<h1 className="site-name">NodersCast</h1>
					<p className="site-slogan">El podcast oficial de <a href="http://www.noders.com" target="_blank"><img src="/assets/img/noders3-rectangle-white-150.png"/></a></p>
				</div>
				<div className="episode col-xs-12 col-md-8 col-md-offset-2">
					<p className="bajada">Episodio destacado</p>
					<h3 className="title">{this.state.title}</h3>
					<Audio url={this.state.url}/>
				</div>
			</div>
		);
	}
});

module.exports = Featured;