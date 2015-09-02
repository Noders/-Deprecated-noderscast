var React = require('react');
var feedParser = require('feedparser');
var NodersFeed = "http://noderscast.noders.com/feed/podcast";
/*
var xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","https://ajax.googleapis.com/ajax/services/feed/load?v=2.0&q=http://noderscast.noders.com/feed/podcast",true);
xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
xmlhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET');
xmlhttp.send();
xmlhttp.onreadystatechange=function()
{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
		console.log(xmlhttp.responseText);
	}
};

*/

var capitulo = React.createClass({
	
	render: function(){
		return (
			<div className="capitulo">

			</div>
		)
	}
});
module.exports =  React.createClass({
	componentDidMount: function() {
		

        $.ajax({
	        type: "GET",
	        url: NodersFeed,
            crossDomain: true,
	        dataType: 'application/x-www-form-urlencoded',
	        error: function(err){
	        	console.log(err)
	        },
	        success: function(xml){
	            var values = xml.responseData.feed.entries;
	            console.log(values);
	        }
	    });

	},
  render: function() {
        return (
        	<div className="col-xs-12">
        		<h1>Capítulos</h1>
	        	<div className="col-xs-12 col-md-8 col-md-offset-2 capitulos">
	    		</div>
    		</div>
        );
  }
});