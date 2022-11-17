import React from 'react'

const Menu = ({items}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 m-3 border w-100'>
        {items.map((menuItem)=>{
            const { id, title, image, price, desc } = menuItem;
            return ( <div key={id}>
                <div className='border m-1'>
                <img className='px-4 my-2 ' src={image} />
                <header className='flex justify-between px-1'>
                  <h4 className='bg-blue-500 px-2 py-2 md:py-2 rounded-xl text-white m-1'>{title}</h4>
                  <h4 className='bg-blue-500 px-1 mt-3 mb-2 rounded-xl text-white mr-3'>${price}</h4>
                </header>
                <p className='px-7 p-2'>{desc}</p>
                </div>
            </div> 
            )
        })}
    </div>
  )
}

export default Menu