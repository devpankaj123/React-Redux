import React, { Component } from 'react';
import Home from './Component/Home';
import About from './Component/About'
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
        <Home handleNameChange = {this.changeAuthorName} authorName ={name} />
        <About authorName ={name} />
      </React.Fragment>
    );
  }
}