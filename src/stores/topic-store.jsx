import Api from '../util/api';
import Reflux from 'reflux';
import Actions from '../actions';


module.exports = Reflux.createStore({
  listenables: [Actions],
  getTopics: function() {
    var p = Api.get('topics/defaults');
    p.then(function(response){
        this.topics = response.data;
        this.triggerChange();
      }.bind(this));
    return p;
  },
  triggerChange: function(){
    this.trigger('change', this.topics);
  }

})