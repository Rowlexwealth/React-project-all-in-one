import React, { useState } from 'react'

// step 5:- insert removeTour here
const Tour2 = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className='flex  px-3 w-[70%] text-justify'>
      <div className=' py-4 '>
      <img className='rounded-2xl' src={image} alt={name} />
      <footer>
        <div className='flex justify-between py-2'>
          <h4 className='font-bold'>{name}</h4>
          <h4 className='font-bold'>${price}</h4>
        </div>
        {/* Read and Shoe more */}
        <p>{readMore ? info : `${info.substring(2, 200)}...`}
          <button className='text-red-500 px-2 font-bold' onClick={()=> setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>

        {/* Delete - removeTour */}
        <div className='text-center'>
        <button className='bg-blue-300 p-3 rounded-xl mt-3 px-5' onClick={()=>removeTour(id)}>Delete Page</button>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default Tour2