import React from 'react';
import './App.css';
import Question from './Question';
import Answer from './Answer';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: false,
    }
  }

  onSubmit() {
    document.getElementById("questionBox").value='';
    this.setState ({
      response: true
    })
  }
  
  render()  {
    if (!(this.state.response)) {
    return (
      <div>
        <Question onSubmit={() => this.onSubmit()} />
      </div>
    )}
      else {
      return (
        <div>
          <Question 
          onSubmit={() => this.onSubmit()}
          />
          <Answer />
        </div>
      )
    }
  }
 }



