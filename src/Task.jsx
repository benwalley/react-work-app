import React, { Component } from 'react';
import './Task.css';


class Task extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = this.props.data
	 }

	handlePriorityChange = changeEvent => {
		let newData = this.props.data;
		newData.priority = changeEvent.target.value;
		newData.taskClass = "task " + changeEvent.target.value;
		this.setState({
		    data: newData
		});

		this.props.updatePositions();
	};

	handleOpenEditWindow = () => {
		this.props.openEditWindow(this.props.index)
	}

	handleDelete = () => {
		this.props.handleDelete(this.props.index)
	}

  render() {
    return (
      <div className={this.props.data.taskClass}>
      	<div className="edit" onClick={this.handleOpenEditWindow}>Edit</div>
        <div className="title">Task: {this.props.data.title}</div>
        <div className="priority">
        	<input type="radio" name="priority" value="red" className="redRadio" checked={this.props.data.priority === "red"} onChange={this.handlePriorityChange}/>
        	<input type="radio" name="priority" value="yellow" className="yellowRadio" checked={this.props.data.priority === "yellow"} onChange={this.handlePriorityChange}/>
        	<input type="radio" name="priority" value="green" className="greenRadio" checked={this.props.data.priority === "green"} onChange={this.handlePriorityChange}/>
        </div>
        <div className="due-date">Due: {this.props.data.due}</div>
        <div className="description">Description: {this.props.data.desctiption}</div>
        <div className="delete" onClick={this.handleDelete}>X</div>
        <div className="status">Status: {this.props.data.status}</div>
        <div className="note">Notes: {this.props.data.note}</div>
      </div>
    );
  }
}

export default Task;