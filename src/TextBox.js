import React, { Component } from 'react';

class TextBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }
        this.update = this.update.bind(this)

    }
    update = () => {
        this.props.update(this.refs.messageTextBox.value);
        this.setState(
            {
                isEditing: false
            });
    }
    edit = () => {
        this.setState({ isEditing: true })
    }
    render() {
        return (
            <div>
                {this.props.label} <br />
                <input
                    type='text'
                    ref='messageTextBox'
                    disabled={!this.state.isEditing}
                />
                {
                    this.state.isEditing ?
                        <button onClick={this.update}>Update</button>
                        :
                        <button onClick={this.edit}>Edit</button>
                }
            </div>
        );
    }
}


export default TextBox;
