import React from 'react';
import './App.css';
import Question from './Question';
import Answer from './Answer';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    //this.state {}
  }
  
  
  render()  {
    return (
      <div>
        <Question />
        <Answer />
      </div>
    );
  }
}


