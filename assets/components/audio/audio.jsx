var React = require('react');
require('./audio.styl');
var {Howler, Howl} = require('howler');
var moment = require('moment');
var podcast = null;

var playControl = React.createClass({
	render:function(){
		return(
			<div className="control play" onClick={this.playAudio}>
				<i className="fa fa-fw fa-play"/>
			</div>
		)
	}
})

var toggleControl = React.createClass({
	render:function(){
		return(
			<div className="control toggle" onClick={this.toggleAudio}>
				<i className={this.toggleClass()}/>
			</div>
		)
	}
})

var pauseControl = React.createClass({
	render:function(){
		return(
			<div className="control pause" onClick={this.pauseAudio}>
				<i className="fa fa-fw fa-pause"/>
			</div>
		)
	}
})
			

var Audio = React.createClass({
	getInitialState: function(){
		return {
			playing : false,
			currentTime:0,
			totalTime:0,
			currentPercentage : function(){
				if(this.totalTime !== 0){
					var percentage = this.currentTime/this.totalTime;
					return percentage*100+"%";
				}else{
					return 0;
				}
			},
			secondsToHms : function(d) {
				d = Number(d);
				var h = Math.floor(d / 3600);
				var m = Math.floor(d % 3600 / 60);
				var s = Math.floor(d % 3600 % 60);
				return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s); 
			},
			getFormatedTotalTime : function(reactComponent){
				return this.secondsToHms(reactComponent.state.totalTime);
			},
			getFormatedCurrentTime : function(thePodcast){
				return this.secondsToHms(thePodcast.pos());
			},
			startTimer:function(podcastPos, reactComponent){
				if(!reactComponent.state.timer){
					var timer = setInterval(function(){ 
								reactComponent.state.currentTime = podcast.pos();
								reactComponent.setState(reactComponent.state);
							}, 1000);
					reactComponent.state.timer = timer;
					reactComponent.setState(reactComponent.state);
				}
			},
			setCurrentTime: function(newPosition, podcast, reactComponent){
				podcast.pos(
					newPosition * reactComponent.state.totalTime,
					reactComponent.state.id
				);
			}
		};
	},
	componentWillMount: function(){
		var reactComponent = this;
 		podcast = new Howl({
 			urls:[this.props.url],
 			buffer:true,
			onplay:function(){
				//console.log("Playing");
			},
			onpause:function(){
				//console.log("Pausing");
			},
			onload:function(){
				reactComponent.state.totalTime = this._duration;
				reactComponent.setState(reactComponent.state);
			},
			onend: function(){

			}
		});
	},
	playAudio: function() {
		if(!this.state.playing){
			var reactComponent = this;
			reactComponent.state.playing = true;
			reactComponent.setState(reactComponent.state);
			reactComponent.state.startTimer(podcast, reactComponent);
			podcast.play(function(id){
				if(!reactComponent.state.id){
					reactComponent.state.id = id;
					reactComponent.setState(reactComponent.state);
				}
			});
		}
	},
	pauseAudio: function() {
		if(this.state.playing){
			this.state.playing = false;
			this.setState(this.state);
			podcast.pause(this.state.id);
		}	
	},
	toggleAudio: function() {
		if(this.state.playing){
			this.pauseAudio();
		}else{
			this.playAudio();
		}
	},
	currentState: function(){
		if(this.state.playing){
			return 'pause';
		}else{
			return 'play';
		}
	},
	totalFormatedTime : function(){
		return this.state.getFormatedTotalTime(this);
	},
	currentFormatedTime: function(){
		return this.state.getFormatedCurrentTime(podcast);
	},
	toggleClass: function(){
		return "fa fa-fw fa-"+this.currentState();
	},
	setCurrentTime: function(evt){
	    var e = evt.target;
	    var parentTarget = evt.target.parentElement.offsetWidth;
	    var dim = e.getBoundingClientRect();
	    var x = evt.clientX - dim.left;
	    var newTime = x/parentTarget;
	    this.state.setCurrentTime(newTime, podcast, this);
	},
	render: function(){
		return(
			<div className="audio col-xs-12">
				<div className="controls">
					<div className="control toggle" onClick={this.toggleAudio}>
						<i className={this.toggleClass()}/>
					</div>
				</div>
				<div className="timer">{this.currentFormatedTime()+" - "+this.totalFormatedTime()}</div>
				<svg className="stream" height="10px" width="100%">
					<line 	y1="0" y2="0" 
							x1="0" x2="100%" 
							style={{stroke:"rgb(30,30,30)","stroke-width":10}} />
					<line 	y1="0" y2="0" 
							x1="0" x2={this.state.currentPercentage()}
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
