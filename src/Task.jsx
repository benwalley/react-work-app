import React, { Component } from 'react';
import './Task.css';


class Task extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = this.props.data
	 }

	handlePriorityChange = (changeEvent) => {
		let newData = this.props.data;
		newData.priority = changeEvent.target.value;
		newData.taskClass = "task " + changeEvent.target.value;
		this.setState({
		    data: newData
		});

		this.props.updateStorage();
	};

	handleOpenEditWindow = () => {
		this.props.openEditWindow(this.props.index)
	}

	handleDelete = () => {
		let x = window.confirm("Are you sure you want to delete this?")
		if(x == true){
			this.props.handleDelete(this.props.index)
		}
	}

	handleDragOver = (event) => {
		event.preventDefault();
		// console.log(DataTransfer())
	}

	handleDrop = (event, extra) => {
		event.preventDefault();
		var dragged = event.dataTransfer.getData("Text");
		let target = this.props.index;
		this.props.updatePositions(dragged, target);
		// Make sure there is not still a hover class
		let newData = this.props.data;
		newData.taskClass = "task " + this.props.data.priority;
		this.setState({data: newData})

	}

	handleDragStart = (event) => {
		event.dataTransfer.setData("Text", event.target.id);
	}

	handleDragEnter = (event) => {
		let newData = this.props.data;
		newData.taskClass = "task " + this.props.data.priority + ' hovered';
		this.setState({data: newData})

	}

	handleDragLeave =(event) => {
		let newData = this.props.data;
		newData.taskClass = "task " + this.props.data.priority;
		this.setState({data: newData})
	}

	handleDontDrop = (event) => {
		event.preventDefault()
	}

  render() {
    return (
      <div draggable="true"  onDragOver={(e)=>this.handleDragOver(e)} onDrop={(e)=>this.handleDrop(e, this.props.index)} onDragStart={(e) => this.handleDragStart(e)} className={this.props.data.taskClass} id={this.props.index}>
     
        <h2 className="title" onDragOver={(e) => this.handleDontDrop (e)}>
        	{this.props.data.title}
        </h2>
        <div className="priority" onDragOver={this.handleDontDrop}>
        	<input type="radio" name="priority" value="red" className="redRadio" checked={this.props.data.priority === "red"} onChange={this.handlePriorityChange}/>
        	<input type="radio" name="priority" value="yellow" className="yellowRadio" checked={this.props.data.priority === "yellow"} onChange={this.handlePriorityChange}/>
        	<input type="radio" name="priority" value="green" className="greenRadio" checked={this.props.data.priority === "green"} onChange={this.handlePriorityChange}/>
        	<input type="radio" name="priority" value="blue" className="blueRadio" checked={this.props.data.priority === "blue"} onChange={this.handlePriorityChange}/>
        	<input type="radio" name="priority" value="purple" className="purpleRadio" checked={this.props.data.priority === "purple"} onChange={this.handlePriorityChange}/>
        </div>
        <div className="due-date section" onDragOver={(e) => this.handleDontDrop (e)}>
        		<div className="section-title">Due</div>
        		<div className="section-data">{this.props.data.due}</div>
        </div>
        <div className="description section" onDragOver={(e) => this.handleDontDrop (e)}>
        	<div className="section-title">Description</div>
        	<div className="section-data">{this.props.data.description}</div>
        </div>
        <div className="delete" onDragOver={(e) => this.handleDontDrop (e)} onClick={this.handleDelete}><i className="fas fa-trash-alt"></i></div>
        <div className="status section">
        	<div className="section-title">Status</div>
        	<div className="section-data">{this.props.data.status}</div>
        </div>
        <div className="note section" onDragOver={(e) => this.handleDontDrop (e)}>
        	<div className="section-title">Notes</div>
        	<div className="section-data">{this.props.data.note}</div>
        </div>
        <div className="cover" onDragEnter={(e) =>this.handleDragEnter(e)} onDragLeave={(e) =>this.handleDragLeave(e)} onClick={this.handleOpenEditWindow}></div>
      </div>
    );
  }
}

export default Task;