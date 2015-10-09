import React from 'react';
import Reflux from 'reflux';
import mixins from 'es6-mixins';
import TopicStore from '../stores/topic-store';
import Actions from '../actions';
import {Link} from 'react-router';

class TopicList extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        topics: []
      }

      mixins([
        Reflux.listenTo(TopicStore, 'onChange')
      ], this);

      Actions.getTopics();
    }


    render() {
      return <div className="list-group">
        {this.renderTopics()}
      </div>;
    }

    renderTopics() { 
      return this.state.topics.map(function(topic){
        return <Link 
          to={"/topics/" + topic.id} 
          className="list-group-item" 
          key={topic.id}>
            <h4>{topic.name}</h4>
            <p>{topic.description}</p>
          </Link>
      })
    }

    onChange(event, topics){
      this.setState({
        topics:topics 
      });
    }
}

export default TopicList;
