import React from 'react';
import './App.css';
import Question from './Question';
import Answer from './Answer';
const data = require('./8ballresponse.json');


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: false,
      questions: [],
      answers: [],
      currentAnswer: ''
    }
  }

  generateAnswer(){
    let randomResponse = data[Math.floor(Math.random()*data.length)];
    return randomResponse.answer;
  }

  onSubmit() {
    const questions = (document.getElementById("questionBox").value);
    const answer = this.generateAnswer();
    const newQuestions = this.state.questions.slice(0);
    const newAnswers = this.state.answers.slice(0);

    newQuestions.push(questions);
    newAnswers.push(answer);

    document.getElementById("questionBox").value='';
    console.log(newQuestions, newAnswers, answer);
    this.setState ({
      response: true,
      questions: newQuestions,
      answers: newAnswers,
      currentAnswer: answer
    })
  }
  
  render()  {
    console.log(this.state);
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
          <Answer answer={this.state.currentAnswer}/>
        </div>
      )
    }
  }
 }



