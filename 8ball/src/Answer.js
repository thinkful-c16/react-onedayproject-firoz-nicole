import React from 'react';
import './answer.css';

export default function Answer (props){
    return (
        <div className="circle" >
            
                <div className="answer">
                    {props.answer}
                </div>
            
        </div>
    )
}