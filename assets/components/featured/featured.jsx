var React = require('react');
require('./featured.styl');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var Audio =  require('../audio/audio.jsx');

var Featured = React.createClass({
	getInitialState: function() {
		return {
			message: '',
			url: '',
			title: ''
		};
	},
	componentWillMount : function(){
		if(this.props && this.props.defaultEpisode){
			var ob = this.state;
			ob.url = this.props.defaultEpisode.url;
			ob.title = this.props.defaultEpisode.title;
			ob.message = "Episodio Nº "+this.props.defaultEpisode.id;
			this.setState(ob);
		}else{
			var el = require('../../api/capitulos.jsx')[0];
			var ob = this.state;
			ob.url = el.url?el.url:ob.url;
			ob.title = el.title?el.title:ob.title;
			ob.message = "Episodio Destacado";
			this.setState(ob);
		}
	},
	render: function() {
		return (
			<div className="episode col-xs-12 col-md-8 col-md-offset-2 animated fadeInUp delay-1s">
				<p className="bajada">{this.state.message} <i className="fa fa-fw fa-microphone"></i> </p>
				<h3 className="title">{this.state.title}</h3>
				<Audio url={this.state.url}/>
			</div>
		);
	}
});

module.exports = Featured;