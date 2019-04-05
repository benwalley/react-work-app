import React, { Component } from 'react';
import './EditWindow.css';



class EditWindow extends React.Component {
	constructor(props) {
    	super(props);

    	this.state = {
    		data: this.props.data
    	}
  	}

	closeWindow = () => {
		this.props.closeEditWindow()
	}

	handleTaskUpdate = (event) => {
	 	this.props.handleTaskUpdate(event);	
	}

	_handleKeyDown = (event) => {
	    switch( event.keyCode ) {
	        case 13:
	            this.props.closeEditWindow()
	            break;
	        default: 
	            break;
	    }
	}

	// componentWillMount deprecated in React 16.3
	componentDidMount(){
	    document.addEventListener("keydown", this._handleKeyDown);
	    document.getElementById("title").focus();
	}


	componentWillUnmount() {
	    document.removeEventListener("keydown", this._handleKeyDown);
	}

  render() {
    return (
    	<div>
    		<div className="outer" onClick={this.closeWindow}></div>
      		<div className="edit-window">
      			<div className="close-button" onClick={this.closeWindow}>X</div>
      			<form>
	      			<div className="formSection">
	      				<label name="title" htmlFor="title">Title:</label>
	      				<input type="text" id="title" value={this.state.data.title} onChange={this.handleTaskUpdate}/>
	      			</div>
	      			<div className="formSection">
	      				<label name="due" htmlFor="due">Due Date:</label>
	      				<input type="text" id="due" value={this.state.data.due} onChange={this.handleTaskUpdate}/>
	      			<div className="formSection">
	      			</div>
	      				<label name="description" htmlFor="description">Description:</label>
	      				<input type="text" id="description" value={this.state.data.description} onChange={this.handleTaskUpdate}/>
	      			<div className="formSection">
	      			</div>
	      				<label name="status" htmlFor="status">Status:</label>
	      				<input type="text" id="status" value={this.state.data.status} onChange={this.handleTaskUpdate}/>
	      			</div>
	      			<div className="formSection">
	      				<label name="note" htmlFor="note">Notes:</label>
	      				<textarea id="note" value={this.state.data.note} onChange={this.handleTaskUpdate}/>
	      			</div>
      			</form>
      		</div>
      	</div>
    );
  }
}

export default EditWindow;