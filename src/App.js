import React, { Component } from 'react';
import Home from './Component/Home';
import About from './Component/About'
import Contact from './Component/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Pankaj Kumar"
    }
  }

  changeAuthorName = (name) => {
    this.setState({name})
  }
  render() {
    const {name} = this.state;
    return (

      <React.Fragment>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home handleNameChange = {this.changeAuthorName} authorName ={name} />
            </Route>
            <Route path="/about">
               <About authorName ={name} />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}