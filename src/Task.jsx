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
      <div draggable="true" className={this.props.data.taskClass}>
      	<div className="edit" onClick={this.handleOpenEditWindow}><i className="far fa-edit"></i></div>
        <h2 className="title">
        	{this.props.data.title}
        </h2>
        <div className="priority">
        	<input type="radio" name="priority" value="red" className="redRadio" checked={this.props.data.priority === "red"} onChange={this.handlePriorityChange}/>
        	<input type="radio" name="priority" value="yellow" className="yellowRadio" checked={this.props.data.priority === "yellow"} onChange={this.handlePriorityChange}/>
        	<input type="radio" name="priority" value="green" className="greenRadio" checked={this.props.data.priority === "green"} onChange={this.handlePriorityChange}/>
        </div>
        <div className="due-date section">
        		<div className="section-title">Due</div>
        		<div className="section-data">{this.props.data.due}</div>
        </div>
        <div className="description section">
        	<div className="section-title">Description</div>
        	<div className="section-data">{this.props.data.description}</div>
        </div>
        <div className="delete" onClick={this.handleDelete}><i className="fas fa-trash-alt"></i></div>
        <div className="status section">
        	<div className="section-title">Status</div>
        	<div className="section-data">{this.props.data.status}</div>
        </div>
        <div className="note section">
        	<div className="section-title">Notes</div>
        	<div className="section-data">{this.props.data.note}</div>
        </div>
      </div>
    );
  }
}

export default Task;