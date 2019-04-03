import React, { Component } from 'react';
import './Task.css';


class Task extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      title: "",
	      priority: "green",
	      due: "",
	      description: "",
	      status: "",
	      note: "",
	      selected: false,
	      taskClass: 'task green'
	    }
	 }

	handlePriorityChange = changeEvent => {
	  	console.log("in it")
		  this.setState({
		    priority: changeEvent.target.value
		  });
		  this.setState({taskClass: ("task " + changeEvent.target.value)});
	};

	handleOpenEditWindow = () => {
		this.props.openEditWindow(this.state)
	}

  render() {
    return (
      <div className={this.state.taskClass}>
      	<div className="edit" onClick={this.handleOpenEditWindow}>Edit</div>
        <div className="title">Task: {this.props.title}</div>
        <div className="priority">
        	<input type="radio" name="priority" value="red" className="redRadio" checked={this.state.priority === "red"} onChange={this.handlePriorityChange}/>
        	<input type="radio" name="priority" value="yellow" className="yellowRadio" checked={this.state.priority === "yellow"} onChange={this.handlePriorityChange}/>
        	<input type="radio" name="priority" value="green" className="greenRadio" checked={this.state.priority === "green"} onChange={this.handlePriorityChange}/>
        </div>
        <div className="due-date">Due: {this.props.due}</div>
        <div className="description">Description: {this.props.desctiption}</div>
        <div className="delete">X</div>
        <div className="status">Status: {this.props.status}</div>
        <div className="note">Notes: {this.props.note}</div>
      </div>
    );
  }
}

export default Task;