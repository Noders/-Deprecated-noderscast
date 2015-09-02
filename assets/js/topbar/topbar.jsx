var React = require('react');
require('./topbar.css');

module.exports = React.createClass({
render: function(){
	return (
	<nav className="navbar navbar-default header fixed " role="navigation">
	    <div className="container-fluid">
	        <div className="navbar-header">
	            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	                <span className="sr-only">Toggle navigation</span>
	                <span className="icon-bar"></span>
	                <span className="icon-bar"></span>
	                <span className="icon-bar"></span>
	            </button>
	            <a className="navbar-brand" href="#"><img src="/assets/img/noders3-rectangle-150.png"/></a>
	        </div>
	        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	            <ul className="nav navbar-nav navbar-right">
	                <li><a href="#/capitulos">Capítulos</a></li>
	                <li className="dropdown">
	                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Escúchanos <i className="fa fa-fw fa-volume-up"></i><span className="caret"></span></a>
	                    <ul className="dropdown-menu">
			                <li className="icon itunes"><a href="https://itunes.apple.com/cl/podcast/id1009061967" target="_blank"><i className="fa fa-fw fa-apple"></i>Itunes</a></li>
			                <li className="icon stitcher"><a href="http://www.stitcher.com/podcast/noderscast/" target="_blank"><i className="fa fa-fw fa-microphone"></i>Stitcher</a></li>
			                <li className="icon rss"><a href="http://noderscast.noders.com/feed/podcast" target="_blank"><i className="fa fa-fw fa-rss"></i>RSS</a></li>
			                <li className="icon twitter"><a href="http://www.twitter.com/noderscast" target="_blank"><i className="fa fa-fw fa-twitter"></i>Twitter</a></li>
			                <li className="icon youtube"><a href="https://www.youtube.com/playlist?list=PLBEwfn9JYDc-8LKrnlcogwrILF08EqLHF" target="_blank"><i className="fa fa-fw fa-youtube"></i>Youtube</a></li>
                		</ul>
	                </li>
	            </ul>
	        </div>
	    </div>
	</nav>
	)
} })