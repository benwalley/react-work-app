import React, { Component } from 'react';
import './AddButton.css';


class AddButton extends React.Component {


  render() {
    return (
      <button className="add-task-button" onClick={this.props.addTask}>
        +
      </button>
    );
  }
}

export default AddButton;