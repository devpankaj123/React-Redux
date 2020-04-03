import React, { Component } from 'react';
import {connect} from 'react-redux';
 class Home extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <React.Fragment>
                <p>This is {this.props.myName}</p>
                <p>My code is {this.props.myCode}</p>
            </React.Fragment>
            
        );
    }
}

const mapStateToProps = (state) => {
    return{
      myName: state.name,
      myCode: state.code
    }
  }

export default connect(mapStateToProps)(Home);