import React from 'react'

function Card({title="", description,className,...props}) {
  return (
    <div className={'bg-white flex flex-col justify-center items-center'+className} >
        <h1 className='text-2xl font-semibold' >
           {title} </h1>
      <p>
        {description}
      </p>
    </div>
  )
}

export default Card
