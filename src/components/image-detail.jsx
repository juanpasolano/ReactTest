import React from 'react';
import Reflux from 'reflux';
import ImageStore from '../stores/image-store';
import mixins from 'es6-mixins';
import Actions from '../actions';
import CommentStore from '../stores/comment-store';
import CommentBox from './comment-box';

class ImageDetail extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ImageDetail';
        mixins([
          Reflux.listenTo(ImageStore, 'onChange'),
          Reflux.listenTo(CommentStore, 'onChange')
        ], this);
        this.state = {
          image: null,
          comments: null
        }
        Actions.getImage(this.props.params.id);
    }

    //RENDER METHOD
    render() {
        return <div className="image-detail">
          {this.state.image ? this.renderContent(): null}
        </div>;
    }
    //DOM Generators
    renderContent() {
      return <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>{this.state.image.title}</h4>
          </div>
          <div className="panel-body">
            {this.renderImage()}
          </div>
          <div className="panel-footer">
            {this.state.image.description}
          </div>

        </div>
        <h3>Comments</h3>
        {this.renderComments()}
      </div>
    }

    renderImage(){
      if(this.state.image.animated){
        return <video preload="auto" autoPlay="autoPlay" loop="loop" webkit-playsinline>
          <source src={this.state.image.mp4}/>
        </video>
      } else {
        return <img src={this.state.image.link} alt=""/>
      }
    }
    renderComments(){
      if(!this.state.comments) {
        return <h1>No comments</h1>
      }
      return <CommentBox comments={this.state.comments}></CommentBox>
    }

    //Event Handlers
    onChange(event, image){
      this.setState({
        image: ImageStore.find(this.props.params.id),
        comments: CommentStore.comments
      });
    }
}

export default ImageDetail;
