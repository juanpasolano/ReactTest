import Api from '../util/api';
import Reflux from 'reflux';
import Actions from '../actions';

var TopicStore = Reflux.createStore({
  listenables: [Actions],
  getTopics: function() {
    var p = Api.get('topics/defaults');
    p.then((response) => {
        this.topics = response.data;
        this.triggerChange();
      }.bind(this));
    return p;
  },
  triggerChange: function(){
    this.trigger('change', this.topics);
  }
})

export default TopicStore;

// class TopicStore extends Reflux.createStore().prototype {
//   constructor(props) {
//     super(props);
//     this.listenables = [Actions];
//   }
//   getTopics() {
//     var p = Api.get('tospics/defaults');
//     p.then(function(response){
//         this.topics = response.data;
//         this.triggerChange();
//       }.bind(this));
//     return p;
//   }
//   setState() {
//     this.trigger('change', this.topics)
//   }
// }
