import React, { useState } from 'react';

const options=["cricket", "football", "hockey"];
const days=["weekdays", "weekend"];


const InterviewPrep2 = () => {
    const [game, setGame]=useState();
    const [day, setDay]=useState();
        return (
        <div>
            <h1>Which Game?</h1>
            {
                options.map((item)=>{
                   return <>
                    <input type='radio' id={item} value={item} checked={game===item} onChange={(e)=>{setGame(e.target.value)}} />
                    <label htmlFor={item} >{item}</label>
                    </>
                })
            }
            
            <h2>Will you play</h2>
            {
                days.map((item)=>{
                    return <>
                    <input type='radio' id={item} value={item} checked={day===item} onChange={(e)=>{setDay(e.target.value)}} />
                    <label htmlFor={item}>{item}</label>
                    </>
                })
            }

            <h3>{game} on {day}</h3>
        </div>
    );
}

export default InterviewPrep2;
