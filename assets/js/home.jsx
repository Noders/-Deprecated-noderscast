var React = require('react');
require("font-awesome-webpack");

module.exports =  React.createClass({
  render: function() {
        return (
          <div className="row">
            <div className="col-xs-12 text-center">
              <h1>NodersCast</h1>
              <p>El podcast oficial de <a href="http://www.noders.com" target="_blank">Noders</a></p>
              <ul className="list-inline">
                <li><a href="https://itunes.apple.com/cl/podcast/id1009061967" target="_blank"><i className="fa fa-fw fa-apple"></i>Itunes</a></li>
                <li><a href="http://www.stitcher.com" target="_blank"><i className="fa fa-fw fa-microphone"></i>Stitcher</a></li>
                <li><a href="http://noderscast.noders.com/feed/podcast" target="_blank"><i className="fa fa-fw fa-rss"></i>RSS</a></li>
                <li><a href="http://www.twitter.com/noderscast" target="_blank"><i className="fa fa-fw fa-twitter"></i>Twitter</a></li>
                <li><a href="https://www.youtube.com/playlist?list=PLBEwfn9JYDc-8LKrnlcogwrILF08EqLHF" target="_blank"><i className="fa fa-fw fa-youtube"></i>Youtube</a></li>
              </ul>
            </div>
            <div className="col-xs-12">
            </div>
          </div>
        );
  }
});
