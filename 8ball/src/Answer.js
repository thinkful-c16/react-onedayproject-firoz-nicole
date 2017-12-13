import React from 'react';
const data = require('./8ballresponse.json');

export default function Answer (){
    let randomResponse = data[Math.floor(Math.random()*data.length)];
    return (
        <div className="response">
            {randomResponse.answer}
        </div>
    )
}