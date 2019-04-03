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

  render() {
    return (
    	<div>
    		<div className="outer" onClick={this.closeWindow}></div>
      		<div className="edit-window">
      			<div className="close-button" onClick={this.closeWindow}>X</div>
      			<form>
      				<label name="title" for="title">Title:</label>
      				<input type="text" id="title" value={this.state.data.title}/>

      				<label name="due" for="due">Due Date:</label>
      				<input type="date" id="due" value={this.state.data.due}/>

      				<label name="description" for="description">Description:</label>
      				<input type="text" id="description" value={this.state.data.description}/>

      				<label name="status" for="status">Status:</label>
      				<input type="text" id="status" value={this.state.data.status}/>

      				<label name="notes" for="notes">Notes:</label>
      				<textarea id="notes" value={this.state.data.notes}/>
      			</form>
      		</div>
      	</div>
    );
  }
}

export default EditWindow;