import React, { Component } from 'react';
import HelloReact from './HelloReact'

//import PropTypes from 'TextBox-types'; // ES6
//sandbox_one
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Default'
    }
    this.updateMessage = this.updateMessage.bind(this)
  }
  updateMessage = () => {
    this.setState({
      message: this.refs.messageTextBox.value
    });
  }
  render() {
    return (
      <div>
        <h1>
          <HelloReact message='Hello Components' />
        </h1>
      </div>
    );
  }
}


export default Main;
