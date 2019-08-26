import React, { Component } from 'react';
import './EditWindow.css';



class EditWindow extends React.Component {
	constructor(props) {
    	super(props);

    	this.state = {
    		data: this.props.data
    	}
  	}

	handleTaskUpdate = (event) => {
	 	this.props.handleTaskUpdate(event);	
	}

	componentDidMount = () => {
	    document.getElementById("title").focus();
	}

	toggleTime = () => {
		this.props.handleToggleTime(this.props.index);
	}

	handleTimeChange = (event) => {
		this.props.handleTaskUpdate(event);	
	}

  render() {
    return (
    	<div>
      		<div className="edit-window">
      			<form>
      				<div className="formSection">
	      				<h2 className="">{this.props.data.title}</h2>
	      				
      				</div>
	      			<div className="formSection">
	      				<label name="title" htmlFor="title">Title:</label>
	      				<input type="text" id="title" value={this.props.data.title} onChange={this.handleTaskUpdate}/>
	      			</div>
	      			<div className="formSection">
	      				<label name="description" htmlFor="description">Description:</label>
	      				<input type="text" id="description" value={this.props.data.description} onChange={this.handleTaskUpdate}/>
	      			</div>
	      			<div className="formSection">
	      				<label name="status" htmlFor="status">Status:</label>
	      				<input type="text" id="status" value={this.props.data.status} onChange={this.handleTaskUpdate}/>
	      			</div>
	      			<div className="formSection">
	      				<label name="link" htmlFor="link">link:</label>
	      				<input type="text" id="link" value={this.props.data.link} onChange={this.handleTaskUpdate}/>
	      				<a href={this.props.data.link} target="_blank_">{this.props.data.link}</a>
	      			</div>
	      			<div className="formSection">
	      				<label name="note" htmlFor="note">Notes:</label>
	      				<textarea id="note" value={this.props.data.note} onChange={this.handleTaskUpdate}/>
	      			</div>
	      			<div className="formSection">
	      				<h4>Time</h4>
	      				<label name="hours" htmlFor="hours">Hr</label>
	      				<input type="text" id="hours" value={this.props.data.hours} onChange={this.handleTaskUpdate}/>

	      				<label name="min" htmlFor="min">Min</label>
	      				<input type="text" id="min" value={this.props.data.min} onChange={this.handleTaskUpdate}/>
	      			</div>
      			</form>
      		</div>
      	</div>
    );
  }
}

export default EditWindow;