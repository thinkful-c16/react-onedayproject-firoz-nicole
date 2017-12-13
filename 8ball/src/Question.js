import React from 'react';

export default function Question(){

    return (
        
        <div>
           <form>     
               <input className="question" type="text" value="" placeholder="Will I pass this course?">
               </input>
            </form>
        </div>    
    )
}

//change value to {props.value}

//make question mark a button if time