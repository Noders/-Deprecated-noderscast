var React = require('react');
require('./socialnetworks.styl');
var Socials = React.createClass({
  render:function(){
    return(
      <div className="row subscribe">
        <div className="col-md-8 col-md-offset-2 col-xs-12">
          <h2> Sucríbete </h2>
          <div className="buttons">
            <a className="link" href="https://itunes.apple.com/cl/podcast/id1009061967"  target="_blank"> <i className="fa fa-fw fa-apple"></i> iTunes </a>
            <a className="link" href="http://www.stitcher.com/podcast/noderscast/"  target="_blank"> <i className="fa fa-fw fa-microphone"></i> Stitcher </a>
            <a className="link" href="http://noderscast.noders.com/feed/podcast"  target="_blank"> <i className="fa fa-fw fa-rss"></i> RSS</a>
            <a className="link" href="https://www.youtube.com/playlist?list=PLBEwfn9JYDc-8LKrnlcogwrILF08EqLHF"  target="_blank"> <i className="fa fa-fw fa-youtube"></i> Youtube </a>
          </div>
        </div>
      </div>
    )
  }
})
module.exports = Socials;