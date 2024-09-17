import React, { useState } from 'react'

function Filtered({onFilter}) {

  const[title, setTitle] = useState("")
  const[rating, setRating] = useState("")

const handleFilter = () =>{
  onFilter({title, rating});
}

  return (
    <div className='flex flex-col md:flex-row justify-center gap-4 mb-4'>
      <input type='text' placeholder='Filter by Title' className='border p-2 rounded' value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input type='number' placeholder='Filter by Rating' className='border p-2 rounded' value={rating} onChange={(e) => setRating(e.setRating.value)}/>


      <button onClick={handleFilter} className='bg-green-400 text-white p-2 rounded'>Filter</button>
    </div>
  )
}

export default Filtered