import React from 'react'
import Tour2 from '../TourProject/Tour2'

// from Tour.js step-3:- add removeTour here
const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <div className='px-3 w-[70%] text-center'>
        <h2 className='my-5 font-bold text-3xl'>Ours Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour)=>{
          return <Tour2 key={tour.id} {...tour} removeTour={removeTour}></Tour2>
          // step 4:- insert - removeTour here also, then got to Tour2.jsx
        })}
      </div>
    </>
  )
}

export default Tours