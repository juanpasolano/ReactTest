import React from 'react';

import Header from './header';
import TopicList from './topic-list';

class Main extends React.Component {
    render() {
        return <div>
            <Header></Header>
            {this.content()}
        </div>;
    }
    content() {
      if(this.props.children)
        return this.props.children;
      else
        return <TopicList></TopicList>
    }
}

export default Main;