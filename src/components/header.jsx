import React from 'react';
import {Link} from "react-router";
import Actions from "../actions";
import mixins from 'es6-mixins';
import Reflux from 'reflux';
import TopicStore from '../stores/topic-store';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
        this.state = {
          topics: []
        }
        mixins([
          Reflux.listenTo(TopicStore, 'onChange')
        ], this)
        Actions.getTopics();
    }
    render() {
        return <nav className="navbar navbar-default Header">
          <div className="container-fluid">

            <Link to="/" className="navbar-brand">
              Imgur browser
            </Link>

            <ul className="nav navbar-nav navbar-right">
              {this.renderTopics()}
            </ul>

          </div>
        </nav>
    }
    renderTopics() {
      return this.state.topics
        .slice(0, 4)
        .map(function(topic){
          return <li key={topic.id}>
            <Link 
              to={"topics/" + topic.id}
              activeClassName="active"
              >
                {topic.name}            
            </Link>
        </li>
      })
    }
    onChange(event, topics) {
      this.setState({
        topics 
      });
    }
}

export default Header;

