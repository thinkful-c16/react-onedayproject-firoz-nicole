import React from 'react';

export default function Question(props){

    return (
        <div>
           <form>     
               <input className="question" type="text" value=""  
                onSubmit={event => props.onSubmit(event.target.value) }></input>
            </form>
        </div>    
    )
}



//=== potential features ===
//history of questions/answers
//make question mark a button if time