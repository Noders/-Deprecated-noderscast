var React = require('react');
var episodiosArr = require('../../api/capitulos.jsx');
require('./list.styl');
var Episode = React.createClass({
  render:function(){
      var d = new Date(this.props.pubdate);
      var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + d.getFullYear();
      var href = '#/episodios/'+this.props.id;
      return(
          <a className="episodio col-xs-12" href={href}>
            <div className="col-xs-12 no-padding text-left">{this.props.title}</div>
            <div className="col-xs-12 no-padding">
              <span className="duration pull-left">{this.props.duration}</span>
              <span className="date pull-right">{datestring}</span>
            </div>
          </a>
      );
  }
});

var Episodes = React.createClass({
  render:function(){
    var eps = [];
    var limit = episodiosArr.length;
    if(this.props.limit){
      limit = parseInt(this.props.limit)
    }
    for (var i = 0; i < limit; i++) {
      eps.push(<Episode 
            id={episodiosArr[i].id}
            title={episodiosArr[i].title}
            pubdate={episodiosArr[i].pubdate}
            content={episodiosArr[i].content}
            sumary={episodiosArr[i].sumary}
            duration={episodiosArr[i].duration}
            url={episodiosArr[i].url}
            />);
    }
    return(
      <div className="listaepisodios">
        {eps}
      </div>
    );
  }
});

module.exports = Episodes;