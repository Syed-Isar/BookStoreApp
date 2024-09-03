import React from 'react'
import list from "../list.json"
function FreeBook() {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData)
  return (
    <>
      <div className=' w-full md:px-15 px-4 my-10'>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Course</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis qui necessitatibus animi numquam!</p>

      </div>
    </>
  )
}

export default FreeBook