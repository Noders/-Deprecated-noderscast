var React = require('react');
var Audio =  require('../audio/audio.jsx');
var episodiosArr = require('../../../api/capitulos.jsx');

var Episode = React.createClass({
	render:function(){
    var d = new Date(this.props.pubdate);
    var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + d.getFullYear();
		return(
      <div className="episodio">
  			<div className="col-xs-12">
          <h4 className="text-left">{this.props.title}</h4>
          <div className="time text-right">{datestring}</div>
          <Audio url={this.props.url}/>
        </div>
			</div>
		)
	}
});

var Episodes = React.createClass({
  render:function(){
  	var eps = [];
    for (var i = 0; i < 5; i++) {
      eps.push(<Episode 
            title={episodiosArr[i].title}
            pubdate={episodiosArr[i].pubdate}
            content={episodiosArr[i].content}
            sumary={episodiosArr[i].sumary}
            url={episodiosArr[i].url}
            />);
    };
    return(
      <div className="col-xs-12 text-center">
      {eps}
      </div>
    )
  }
});

module.exports = Episodes;