import React, { Component } from 'react';
import TimerForm from '../src/components/TimerForm'
import Timer from '../src/components/Timer'
import Button from '../src/components/Button'

import bell from '../src/assets/bell.mp3'

import './components/Styles.css'
class App extends Component {
  state = {
    workTime: 12,
    work: false
  }

  bell = new Audio(bell)
  bellSound = () => {
    this.bell.play()

  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  convertWorkTime = () => {
    let {workTime} = this.state
    return parseFloat(workTime * 60)
  }

  startTimer = () => {
    let interval = null;
    let timeInSec = this.convertWorkTime()
    this.setState({work:true, workTime: timeInSec})
    interval = setInterval(() => {
        this.setState({ workTime: timeInSec })
        timeInSec--
        if(timeInSec === 0) {
          this.bellSound()
          clearInterval(interval)
          return this.setState({work: false, workTime: 12})
        }
      }, 1000)
  }

  render () {

    let timerScreen = 
    <div>
      <div>
        <TimerForm
            handleChange = {this.handleChange}
            workTime = {this.state.workTime}/>
        <Button startTimer = {this.startTimer}/>
      </div>
    </div>

    if(this.state.work) {
      timerScreen = 
      <Timer workTime = {this.state.workTime}/>
    }
    
    return (
      <div className="App" >
        {timerScreen}
      </div>
    )
  }
}

export default App;