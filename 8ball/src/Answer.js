import React from 'react';
import './answer.css';
const data = require('./8ballresponse.json');

export default function Answer (){
    let randomResponse = data[Math.floor(Math.random()*data.length)];
    return (
        <div className="circle" >
            
                <div className="answer">
                    {randomResponse.answer}
                </div>
            
        </div>
    )
}