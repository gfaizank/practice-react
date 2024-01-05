import React, {useState} from 'react';

const countries=[
    { name: 'India', value: 'IN', cities: [
        'Delhi',
        'Mumbai'
    ]},
    { name: 'Pak', value: 'PK', cities: [
        'Lahore',
        'Karachi'
    ]},
    { name: 'Bangladesh', value: 'BG', cities: [
        'Dhaka',
        'Chittagong'
    ]}

];

const InterviewPrep1 = () => {
    const [country, setCountry]=useState([])
    
    return (
       <div>
        {/*1st dropdown*/}
        <select className='mx-2 my-2 border border-1 rounded-md' value={country} onChange={(e)=>setCountry([e.target.value])}>
            {
                countries.map((item, index)=>{
                    return <option value={index} key={index}>{item.name}</option>
                })
            }
        </select>
        {/*2nd dropdown*/}
        <select className='border border-1 rounded-md'>
            {
                countries[country] &&  countries[country].cities.map((item, index)=>{
                    return <option value={index} key={index}>{item}</option>
                })
            }
        </select>
       </div>
    );
}

export default InterviewPrep1;
