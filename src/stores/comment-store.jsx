import Api from '../util/api';
import Reflux from 'reflux';
import Actions from '../actions';
import _ from 'lodash';


module.exports =  Reflux.createStore({
  listenables: [Actions],
  getImage: function(id){
    var p = Api.get('gallery/' + id + '/comments')
    p.then((response) => {
      this.comments = response.data;
      this.triggerChange();
    })
    return p;
  },
  triggerChange: function(){
    this.trigger('change', this.comment);
  }
})