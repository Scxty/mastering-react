import React, { Component } from 'react';
import HelloMessage from './HelloMessage';
import TextBox from './TextBox';

class HelloRect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: ''
        }
    }
    update = (key, value) => {
        var newState = {};
        newState[key] = value;
        this.setState(newState);
    }
    render() {
        return (
            <div>
                <HelloMessage
                    message={`Hello ${this.state.firstName} - ${this.state.lastName}`} />
                <TextBox
                    label='First  Name'
                    update={this.update.bind(this, 'firstName')}
                />

                <TextBox
                    label='Last  Name'
                    update={this.update.bind(this, 'lastName')}
                />

            </div>
        );
    }
}


export default HelloRect;
