import React, { Component } from 'react';

export default class Home extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <React.Fragment>
                <p>This is {this.props.authorName}</p>
                <button onClick = {() => this.props.handleNameChange('Raj kumar')} value="Click" />
            </React.Fragment>
            
        );
    }
}