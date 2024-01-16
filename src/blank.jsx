import React, { useEffect, useState } from 'react';

const Blank = () => {

    const [data, setData]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
            
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await res.json();
                setData(data);
        }

        fetchData();
    }, []);
    return (
        <div className=' flex flex-col p-4'>
            <h1 className='text-lg ml-5'>The data from API is follows:</h1>
            {
                 data.map((item, index)=>{
                    return <li className='text-sm' key={item.id}>{item.title}</li>
                })

            }
            
        </div>
    );
}

export default Blank;
