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

	// componentWillMount deprecated in React 16.3
	componentDidMount(){
	    document.getElementById("title").focus();
	}

  render() {
    return (
    	<div>
      		<div className="edit-window">
      			<form>
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
	      				<label name="note" htmlFor="note">Notes:</label>
	      				<textarea id="note" value={this.props.data.note} onChange={this.handleTaskUpdate}/>
	      			</div>
      			</form>
      		</div>
      	</div>
    );
  }
}

export default EditWindow;