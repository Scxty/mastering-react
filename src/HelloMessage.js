import React, { Component } from 'react';

class HelloMessage extends Component {
  
  render() {
    return (
      <div>
          <h2>{this.props.message}</h2>
      </div>
    );
  }
}


export default HelloMessage;
