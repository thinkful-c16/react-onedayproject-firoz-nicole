import React from 'react';
import Answer from './Answer';

export default function Question(props) {
 
    return (
        <div>
            <input className="question" type="text" id="questionBox" value={props.value}></input>
            <button onClick={() => props.onSubmit()} >Submit</button>
        </div>    
    )
 
}

//value="" 

//=== potential features ===
//history of questions/answers
//make question mark a button if time