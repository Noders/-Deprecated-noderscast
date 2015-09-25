var React = require('react');
require('./audio.styl');
var {Howler, Howl} = require('howler');
var podcast = null;
var Audio = React.createClass({
	getInitialState: function(){
		return {
			playing : false,
			time : 0,
			timepercentage : "10%"
		};
	},
	componentDidMount: function(){
 		podcast = new Howl({
 			urls:[this.props.url],
			onplay:function(){
				console.log("Starting");
			},
			onpause:function(){
					console.log("Pausing");
			}
		});
	},
	playAudio: function() {
		if(!this.state.playing){
			this.setState({playing : !this.state.playing});
			podcast.play();
		}
	},
	pauseAudio: function() {
		if(this.state.playing){
			this.setState({playing : !this.state.playing});
			podcast.pause();
		}	
	},
	render: function(){
		return(
			<div className="audio col-xs-12">
				<div className="controls">
					<div className="control play" onClick={this.playAudio}>
						<i className="fa fa-fw fa-play"/>
					</div>
					<div className="control pause" onClick={this.pauseAudio}>
						<i className="fa fa-fw fa-pause"/>
					</div>
				</div>
					<svg className="stream" height="10px" width="100%">
						<line 	y1="0" y2="0" 
								x1="0" x2="100%" 
								style={{stroke:"rgb(30,30,30)","stroke-width":10}} />
						<line 	y1="0" y2="0" 
								x1="0" x2="10%"
								style={{stroke:"rgb(255,0,0)","stroke-width":10}} />
					</svg>
				<audio className="hidden" controls>
					<source src={this.props.url} type="audio/ogg"/>
					<source src={this.props.url} type="audio/mpeg"/>
					<p>Tu navegador no soporta audio html5</p>
				</audio>
			</div>
		);
	}
});
module.exports = Audio;
