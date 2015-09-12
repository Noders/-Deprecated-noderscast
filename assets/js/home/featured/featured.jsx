var React = require('react');
require('./featured.styl');

var Audio = React.createClass({
	render: function(){
		return(
			<div className="audio">
				<audio controls>
					<source src={this.props.url} type="audio/ogg"/>
					<source src={this.props.url} type="audio/mpeg"/>
					<p>Tu navegador no soporta audio html5</p>
				</audio>
			</div>
		);
	}
});
var Featured = React.createClass({
	getInitialState: function() {
		return {
			url: 'http://d1xuhndp8unoax.cloudfront.net/EP06.mp3',
			title: 'Noderscast - E06 - [En Vivo] Hablemos de Seniority, con Fernando Larragaña'
		};
	},
	componentDidMount: function() {
		/**/
	},
	render: function() {
		return (
			<div className="row text-center featured">
				<div className="col-xs-12">
					<h1 className="site-name">NodersCast</h1>
					<p className="site-slogan">El podcast oficial de <a href="http://www.noders.com" target="_blank"><img src="/assets/img/noders3-rectangle-150.png"/></a></p>
				</div>
				<div className="episode col-xs-12 col-md-8 col-md-offset-2">
					<p className="bajada">Episodio destacado</p>
					<h3 className="title">{this.state.title}</h3>
					<Audio url={this.state.url}/>
				</div>
				<div className="subscribe col-md-8 col-md-offset-2 col-xs-12">
					<h2> Sucríbete </h2>
					<div className="buttons">
						<a className="link" href="https://itunes.apple.com/cl/podcast/id1009061967"  target="_blank"> <i className="fa fa-fw fa-apple"></i> iTunes </a>
						<a className="link" href="http://www.stitcher.com/podcast/noderscast/"  target="_blank"> <i className="fa fa-fw fa-microphone"></i> Stitcher </a>
						<a className="link" href="http://noderscast.noders.com/feed/podcast"  target="_blank"> <i className="fa fa-fw fa-rss"></i> RSS</a>
						<a className="link" href="https://www.youtube.com/playlist?list=PLBEwfn9JYDc-8LKrnlcogwrILF08EqLHF"  target="_blank"> <i className="fa fa-fw fa-youtube"></i> Youtube </a>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Featured;