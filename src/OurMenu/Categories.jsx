import React from 'react'

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='flex justify-center'>
      {categories.map((category, index) => {
        return (
          <div className='px-4 p-3 border m-2 bg-blue-400 rounded-xl'>
            <button className='uppercase font-bold text-white' type='button' key={index} onClick={() => filterItems(category)}>
              {category}
            </button>
          </div>
        )
      })}
      {/* <button className='bg-red-300 px-7 p-3 rounded-xl font-bold mx-2' onClick={() => filterItems('all')}>
        All
      </button>
      
      Breakfast category
      <button className='bg-red-300 px-3 p-3 rounded-xl font-bold' onClick={() => filterItems('breakfast')}>
        Breakfast
      </button> */}
    </div>
  );
}

export default Categories