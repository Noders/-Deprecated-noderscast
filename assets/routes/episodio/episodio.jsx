var React = require('react');
var Featured = require('../../components/featured/featured.jsx');
var TopBar = require('../../components/topbar/topbar.jsx');
var Footer = require('../../components/footer/footer.jsx');
require('./episodio.styl');

var linkify = function (inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    return replacedText;
};

module.exports =  React.createClass({
	getInitialState: function() {
		var ep = null;
		if(this.props.params.episodioId){
	    	require('../../api/capitulos.jsx').forEach(function(el){
				if(parseInt(this.props.params.episodioId) === el.id){
					ep = el;
					ep.parsedSumary = '<p>'+el.sumary.replace(/\n(\s*\n)+/g, '</p><p>')+'</p>';
					ep.parsedSumary = ep.parsedSumary.replace(/andnbsp;/g, '');
					ep.parsedSumary = ep.parsedSumary.replace(/Picks of the day!/g, '<p class="picks">Picks of the day</p>');
					ep.parsedSumary = ep.parsedSumary.replace(/ShowNotes:/g, '<p class="picks">ShowNotes</p>');
					ep.parsedSumary = ep.parsedSumary.replace(/\t/g, '</br>');
					ep.parsedSumary = linkify(ep.parsedSumary);
				}
			},this);
	    }	
		return {defaultEpisode:ep};
	},
  	render: function() {
        return (
        	<div className="row episodio fullheight">
				<TopBar/>
	        	<div className="col-xs-12 text-center featured parallax">
	        		<Featured id={this.props.params.episodioId} defaultEpisode={this.state.defaultEpisode}/>
				</div>
	    		<div className="col-xs-12 col-md-8 col-md-offset-2 shownotes">
	        		<h3 className="titulo text-center">{this.state.defaultEpisode.title}</h3>
	        		<div className="content" dangerouslySetInnerHTML={{__html:this.state.defaultEpisode.parsedSumary}}></div>
	        		<div className="saludos text-center">El equipo de NodersCast</div>
	    		</div>
				<Footer/>
        	</div>
        );
  }
});