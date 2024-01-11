import React, { useState } from 'react';

const array=[
    {
        Name: 'Bitcoin', Value: 'BTC'
    },
    {
        Name: 'Ethereum', Value: 'ETH'
    },
    {
        Name: 'DogeCoin', Value: 'DOG'
    }
]

const Trixo = () => {
    {/*1st state to manage input */}
    const[inp, setInp]=useState('');
    const [res, setRes]=useState([]);


    function handleSubmit(){
        const result=array.filter(item=>item.Name.toLowerCase().includes(inp.toLowerCase()));
        setRes(result);
    }

    

    return (
        <div className='mt-4'>
            <input type="text" placeholder='search..' value={inp} onChange={(e)=>{setInp(e.target.value)}} className='ml-2 mt-2 border border-1' />
            <button onClick={handleSubmit} className='ml-1 border border-1'>Search</button>
            {
                res.length>0 && (
                    <ul>
                        {
                            res.map((item, index)=>{
                                return <li key={index} className='ml-2 mt-2 border border-1'>{item.Name}</li>
                            })
                        }
                    </ul>
                )
            }
        </div>
    );
}

export default Trixo;
