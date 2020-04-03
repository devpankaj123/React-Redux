import React, { Component } from 'react';
import {connect} from 'react-redux';


 class Contact extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <React.Fragment>
               <p>For more Information call to {this.props.myContact}</p>
                <button onClick = {this.props.changeInformation}>Change All the Infomation</button> 
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return{
      myContact: state.contact
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
        changeInformation: () => {dispatch({type:'CHANGE_STATE', payload: {name: 'Suchit', code: 4353, contact: 7631530404}})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact)