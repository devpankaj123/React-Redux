import React, { Component } from 'react';
import {connect} from 'react-redux';


class About extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return(
        <p>Hello Everyone this is my first redux application, and my name is {this.props.myName} and code is {this.props.myCode}</p>
        );
    }
}

const mapStateToProps = (state) => {
    return{
      myName: state.name,
      myCode: state.code
    }
  }
export default connect(mapStateToProps)(About)