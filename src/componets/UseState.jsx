import React, { useState } from 'react'

export default function Counter() {
  let [data, setData] = useState([])
  let [user_input, setUserInput] = useState('')

  function handleClick() {
    setData([...data, user_input])
  }

  return (
    <div className=' '>
      <input className='h-16 w-30 ' type="text" placeholder='Enter Here' name="" id="" onChange={(e) => setUserInput(e.target.value)} />
      <button className='h-16 w-20 text-white bg-red-600' onClick={handleClick}>Add Something</button>
      <ul>
        {data.map((value, index) => (<li key={index}>{value}</li>))}
      </ul>


    </div>
  )
}
