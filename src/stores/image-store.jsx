import Api from '../util/api';
import Reflux from 'reflux';
import Actions from '../actions';
import _ from 'lodash';

var ImageStore = Reflux.createStore({
  listenables: [Actions],
  getImages: function(topicId) {
    var p = Api.get('topics/' + topicId);
    p.then((response) => {
        this.images = _.reject(response.data, (image) => image.is_album);
        this.triggerChange();
    }.bind(this));
    return p;
  },
  getImage: function(id){
    var p = Api.get('gallery/image/' + id);
    p.then((response) => {
      if(this.images){
        this.images.push(response.data);
      }else {
        this.images = [response.data]
      }
      this.triggerChange();
    }.bind(this));
    return p;
  },
  find: function(id){
    var image = _.findWhere(this.images, {id: id});
    if(image){
      return image;
    }else {
      this.getImage(id);
      return null;
    }
  },
  triggerChange: function(){
    this.trigger('change', this.images);
  }
})

export default ImageStore;