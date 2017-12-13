import React from 'react';
import Answer from './Answer';

export default function Question(props) {
 
    return (
        <div>
            <input className="question" type="text" id="questionBox" />
            <button onClick={() => props.onSubmit()} >Submit</button>
        </div>    
    )
 
}

//=== potential features ===
//history of questions/answers
//make question mark a button if time