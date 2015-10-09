import React from 'react';
import {Link} from 'react-router'

class ImagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'ImagePreview';
    this.imageStyle = {
      width: '100%'
    }
    this.state = {
      hovering: false
    }
  }

  //RENDER method
  render() {
    return <Link 
      to={"images/" + this.props.id}
      className="image-preview"
      onMouseEnter={this.handleMouseEnter.bind(this)}
      onMouseLeave={this.handleMouseLeave.bind(this)}
      >
      {this.props.animated && this.state.hovering ? this.video() : this.image()}
      {this.props.animated && !this.state.hovering ? this.icon() : null}
      {this.state.hovering ? this.inset() : null}
    </Link>;
  }

  //DOM builders
  image(){
    var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';
    return <img src={link} alt="" />
  }
  video(){
    return <div>
      <video preload="auto" autoPlay="autoPlay" loop="loop" webkit-playsinline>
        <source src={this.props.mp4}/>
      </video>
    </div>
  }
  icon(){
    return <span className="glyphicon glyphicon-play"></span>
  }
  inset(){
    return <div className="inset">
      Views: {this.props.views} <br/>
      Upvotes: {this.props.ups}
    </div>
  }
  //Event Handlers
  handleMouseEnter(){
    this.setState({
      hovering: true
    });
  }
  handleMouseLeave(){
    this.setState({
      hovering: false
    });
  }
}

export default ImagePreview;
