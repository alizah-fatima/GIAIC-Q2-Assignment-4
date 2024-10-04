import React from 'react'

interface Tcard {
    Name : string;
    Age: number;
    RollNo : number;
    Class: string;
    imageUrl : string
}

const Card = (props: Tcard) => {
  return (
    <div className='max-w-sm mx-auto bg-cyan-200 shadow-lg rounded-lg border border-gray-300 p-6 '>
        <h1 className='text-lg text-center mb-2 font-bold text-gray-800 bg-cyan-400'>Student ID Card</h1>
        <div className='flex items-center justify-between'>
            <div className='flex-1'>
            <span className='font-mono'> 
               <p>Name= {props.Name}</p>
               <p>Age= {props.Age}</p>        
               <p>RollNo= {props.RollNo}</p>        
               <p>Class= {props.Class}</p>
            </span>
            </div>
        <img src={props.imageUrl} alt='image' className='w-20 h-20 object-cover  ml-20'/>
        </div>
    </div>
  )
}

export default Card;