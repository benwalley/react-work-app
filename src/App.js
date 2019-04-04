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
      editWindowOpen: false,
      editWindowIndex: undefined
    }
  }

  addTask = () => {
    let currentState = this.state.tasks;
    currentState.push({
      title: "",
      priority: "green",
      due: "",
      description: "",
      status: "",
      note: "",
      taskClass: 'task green'
    })
    this.setState({tasks: currentState})
  }

  openEditWindow = (index) => {
    this.setState({editWindowOpen: true})
    this.setState({editWindowIndex: index})
  }

  closeEditWindow = () => {
    this.setState({editWindowOpen: false})
  }

  editWindow = () => {
    if(this.state.editWindowOpen) {
      return(
        <EditWindow closeEditWindow = {this.closeEditWindow} data={this.state.tasks[this.state.editWindowIndex]} handleTaskUpdate={this.handleTaskUpdate} index={this.state.editWindowIndex}/>
        )
    }
  }

  updatePositions = () => {

  }

  handleDelete = (index) => {
    console.log(index)
    let tasks = this.state.tasks;
    tasks.splice(index, 1)
    console.log(tasks)
    this.setState({tasks: tasks})
  }

  handleTaskUpdate = (event) => {
    let currentTask = this.state.editWindowIndex;
    let tasks = this.state.tasks;

    tasks[currentTask][event.target.id] = event.target.value
    this.setState({tasks: tasks});
  }

  render() {
    return (
      <div className="App">
        <AddButton addTask = {this.addTask}/>
        {this.state.tasks.map((task, index) => {
          return <Task key={ index } index={index} handleDelete={this.handleDelete} updatePositions={this.updatePositions} openEditWindow={this.openEditWindow} data={this.state.tasks[index]}/>
        })}
        {this.editWindow()}
      </div>
    );
  }
}

export default App;
