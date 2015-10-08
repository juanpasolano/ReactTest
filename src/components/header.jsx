import React from 'react';

import {Link} from "react-router";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }
    render() {
        return <nav className="navbar navbar-default Header">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Imgur browser
            </Link>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="">Topic #1</a></li>
            </ul>
          </div>
        </nav>
    }
}

export default Header;

