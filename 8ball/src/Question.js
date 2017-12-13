import React from 'react';

import './question.css';

export default function Question(props) {
 
    return (
        <div>
            <h1>Magic 8 Ball</h1>
                <div className="questionDiv">
                    <input className="question" type="text" id="questionBox" required/>
                    <button onClick={() => props.onSubmit()} >Submit</button>
                </div>
        </div>    
    )
 
}

//=== potential features ===
//history of questions/answers
//make question mark a button if time