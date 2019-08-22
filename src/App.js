import React, { Component } from 'react';
import AddButton from './AddButton.jsx';
import Task from './Task.jsx';
import EditWindow from './EditWindow.jsx';
// import './grabbable.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{title: "", priority: "green", due: "", description: "", status: "", note: "", taskClass: 'task green'}],
      editWindowOpen: false,
      editWindowIndex: 0,
      darkModeOn: false,
      appClass: 'App'
    }
  }


  addTask = () => {
    let newTaskIndex = this.state.tasks.length;
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
    this.setState({tasks: currentState});
    this.setState({editWindowIndex: newTaskIndex});
    document.getElementById("title").focus();
  }

  openEditWindow = (index) => {
    this.setState({editWindowIndex: index})
  }

  updatePositions = (originalPos, newPos) => {
    let newTasks = this.state.tasks;
    let movingTask = newTasks[originalPos]
    newTasks.splice(originalPos, 1);
    newTasks.splice(newPos, 0, movingTask)
    this.setState({tasks: newTasks});
  }

  handleDelete = (index) => {
    let tasks = this.state.tasks;
    tasks.splice(index, 1)
    this.setState({tasks: tasks})
    if(index === 0) {
      var newEditIndex = 0;
    } else {
      var newEditIndex = index - 1;
    }
    this.setState({editWindowIndex: newEditIndex})
    // if there are no more tasks, create an empty one
    if(this.state.tasks.length === 0) {
      this.addTask();
    }
  }

  handleTaskUpdate = (event) => {
    let currentTask = this.state.editWindowIndex;
    let tasks = this.state.tasks;

    tasks[currentTask][event.target.id] = event.target.value
    this.setState({tasks: tasks});

    this.updateLocalStorage()
  }

  updateLocalStorage = () => {
    let stateData = JSON.stringify(this.state);
    let storage = window.localStorage;
    storage.setItem("myTasks", stateData)
  }

  updateFromLocalStorage = () => {
    let storage = window.localStorage;
    let appData = storage.getItem('myTasks');
    appData = JSON.parse(appData);
    this.setState(appData);
  }

  componentDidMount() {
    let storage = window.localStorage;
    let appData = storage.getItem('myTasks');
    if(appData) {
      this.updateFromLocalStorage()
    }
  }

  handleDarkMode = () => {
    if(this.state.darkModeOn) {
      this.setState({darkModeOn: false})
      document.querySelector("body").classList.remove("dark");
    } else {
      this.setState({darkModeOn: true})
      document.querySelector("body").classList.add("dark");
    }
  }

  componentDidUpdate = () => {
    this.updateLocalStorage()
  }

  componentDidMount = () => {
    this.handleDarkMode()
  }

  render() {
    return (
      <div className='App'>
        <div className='dark-mode-control'>
          <label htmlFor="dark-mode-toggle">
            Dark mode
          </label>
          <input onClick={this.handleDarkMode} className="toggle" type="checkbox" id="dark-mode-toggle" checked={this.state.darkModeOn}/>
        </div>
        <AddButton addTask = {this.addTask}/>
        {this.state.tasks.map((task, index) => {
          return <Task key={ index } index={index} handleDelete={this.handleDelete} updatePositions={this.updatePositions} openEditWindow={this.openEditWindow} data={this.state.tasks[index]} handleColorChange={this.handleColorChange} updateStorage={this.updateLocalStorage}/>
        })}
        <EditWindow closeEditWindow = {this.closeEditWindow} data={this.state.tasks[this.state.editWindowIndex]} handleTaskUpdate={this.handleTaskUpdate} index={this.state.editWindowIndex}/>
      </div>
    );
  }
}

export default App;
