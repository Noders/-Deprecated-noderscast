var React = require('react');
require('./audio.styl');
var {Howler, Howl} = require('howler');
var podcast = null;
var Audio = React.createClass({
	getInitialState: function(){
		return {
			playing : false,
			currentPosition : {
				percent:"0%",
				number:0,
				currentPercentage : function(){
					return this.percent;
				}
			},
			currentTime : function(podcastPos, currentState, reactComponent){
				var _current = podcastPos*100/currentState.totalTime;
				console.log(currentState.currentPosition);
				currentState.currentPosition.number = _current.toFixed(2);
				currentState.currentPosition.percent = _current.toFixed(0) + '%';
				reactComponent.setState(currentState);
				if(podcastPos == currentState.totalTime){
					clearInterval(currentState.timer);
				}
				return _current;
			},
			calculatePercentage : function(reactComponent){
				var currentState = this;
				if(!reactComponent.state.timer){
					var currentTime = reactComponent.state.currentTime;
					reactComponent.setState({timer : setInterval(function(){ 
						currentTime(podcast.pos(),currentState,reactComponent);
					}, 1000)});
				}
			},
			setCurrentTime: function(newPosition, podcast, reactComponent){
				podcast.pos(newPosition*reactComponent.state.totalTime,reactComponent.state.id);
			}
		};
	},
	componentWillMount: function(){
		var that = this;
 		podcast = new Howl({
 			urls:[this.props.url],
 			buffer:true,
			onplay:function(){
				that.state.calculatePercentage(that);
				console.log("Starting");
			},
			onpause:function(){
				console.log("Pausing");
			},
			onload:function(){
				that.setState({totalTime:3337.7});
			},
			onend: function(){

			}
		});
	},
	playAudio: function() {
		if(!this.state.playing){
			var that = this;
			that.setState({playing : true});
			podcast.play(function(id){
				if(!that.state.id){
					that.setState({id:id});
				}
			});
		}
	},
	pauseAudio: function() {
		if(this.state.playing){
			this.setState({playing : false});
			podcast.pause(this.state.id);
		}	
	},
	setCurrentTime: function(evt){
	    var e = evt.target;
	    var parentTarget = evt.target.parentElement.offsetWidth;
	    var dim = e.getBoundingClientRect();
	    var x = evt.clientX - dim.left;
	    var currentTime = x/parentTarget;
	    this.state.setCurrentTime(currentTime,podcast,this);
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
							x1="0" x2={this.state.currentPosition.currentPercentage()}
							style={{stroke:"rgb(255,0,0)","stroke-width":10}} />
					<line 	y1="0" y2="0" 
							x1="0" x2="100%" 
							onClick={this.setCurrentTime} 
							style={{stroke:"rgba(0,0,0,0)","stroke-width":10}} />
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
