import React, { Component } from 'react';
import AddButton from './AddButton.jsx';
import Task from './Task.jsx';
import EditWindow from './EditWindow.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      editWindowOpen: false
    }
  }

  addTask = () => {
    let currentState = this.state.tasks;
    console.log(currentState)
    currentState.push({
      title: "",
      priority: "",
      due: "",
      description: "",
      status: "",
      note: ""
    })
    this.setState({tasks: currentState})
  }

  openEditWindow = (data) => {
    this.setState({editWindowOpen: true})
    this.setState({editWindowData: data})
  }

  closeEditWindow = () => {
    this.setState({editWindowOpen: false})
  }

  editWindow = () => {
    if(this.state.editWindowOpen) {
      return(
        <EditWindow closeEditWindow = {this.closeEditWindow} data={this.state.editWindowData}/>
        )
    }
  }

  render() {
    return (
      <div className="App">
        <AddButton addTask = {this.addTask}/>
        {this.state.tasks.map((task, index) => {
          return <Task key={ index } openEditWindow={this.openEditWindow}/>
        })}
        {this.editWindow()}
      </div>
    );
  }
}

export default App;
