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
      tasks: [{title: "", priority: "green", due: "", timerClass: 'play-pause paused', timeRunning: false, description: "", status: "", note: "", hours: 0, min: 0, totalTime: 0, link: "", taskClass: 'task green'}],
      editWindowOpen: false,
      editWindowIndex: 0,
      darkModeOn: false,
      appClass: 'App',
      darkModeToggleClass: 'toggle'
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
      taskClass: 'task green',
      link: "",
      hours: 0,
      min: 0,
      totalTime: 0,
      timeRunning: false,
      timerClass: "play-pause paused"
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

  stopTimer = (index) => {
    var tasks = this.state.tasks;
    tasks[index].timeRunning = false;
    tasks[index].timerClass = "play-pause paused"
  }

  handleToggleTime = (index) => {
    for (var i = 0; i < this.state.tasks.length; i++) {
      this.stopTimer(i);
    }
    var task = this.state.tasks;
    console.log(index)
    if(task[index].timeRunning) {
      task[index].timeRunning = false
      task[index].timerClass = "play-pause paused"
    } else {
      task[index].timeRunning = true
      task[index].timerClass = "play-pause playing"
    }

    this.setState({tasks: task})
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

  toggleDarkMode = () => {
    if(this.state.darkModeOn) {
      this.setState({darkModeOn: false})
      this.setState({darkModeToggleClass: 'toggle off'});
      this.setState({appClass: 'App'})
    } else {
      this.setState({darkModeOn: true})
      this.setState({darkModeToggleClass: 'toggle on'});
      this.setState({appClass: 'App dark'})
    }
  }

  componentDidUpdate = () => {
    this.updateLocalStorage()
  }

  render() {
    return (
      <div className={this.state.appClass}>
        <div className="main-container">
          <div className='dark-mode-control'>
          <label>
            Dark mode
          </label>
          <div onClick={this.toggleDarkMode} className={this.state.darkModeToggleClass}></div>
        </div>
        <AddButton addTask = {this.addTask}/>
        {this.state.tasks.map((task, index) => {
          return <Task key={ index } index={index} handleDelete={this.handleDelete} updatePositions={this.updatePositions} openEditWindow={this.openEditWindow} data={this.state.tasks[index]} handleColorChange={this.handleColorChange} updateStorage={this.updateLocalStorage}/>
        })}
        <EditWindow handleToggleTime={this.handleToggleTime} closeEditWindow = {this.closeEditWindow} data={this.state.tasks[this.state.editWindowIndex]} handleTaskUpdate={this.handleTaskUpdate} index={this.state.editWindowIndex}/>
        </div>
      </div>
    );
  }
}

export default App;
