import React from 'react';
import Reflux from 'reflux';
import mixins from 'es6-mixins';
import Actions from '../actions';
import ImageStore from '../stores/image-store';
import ImagePreview from './image-preview';

class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Topic';
    this.state = {
      images: []
    }
    this.topicStyle = {
      textAlign: 'center'
    }
    mixins([
      Reflux.listenTo(ImageStore, 'onChange')
    ], this);
    Actions.getImages(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    Actions.getImages(nextProps.params.id)
  }

  render() {
    return <div className="topic">
      {this.renderImages()}
    </div>;
  }

  renderImages() {
    return this.state.images
      .slice(0,20)
      .map((image) => 
        <ImagePreview key={image.id} {...image}></ImagePreview>
      )
  }

  onChange(event, images) {
    this.setState({
      images 
    });
  }
}

export default Topic;
