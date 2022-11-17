import React from 'react'

const List = ({people}) => {
  return (
    <React.Fragment>
      {people.map((person)=>{
        const {id, name, age, image} = person;
        return (
          <div key={id} className='flex flex-grow py-3'>
          <img className='w-[30%] rounded-full' src={image} alt={name} />
          <div>
            <h4 className='px-2 font-bold'>{name}</h4>
            <p className='px-2'>{age} years</p>
          </div>
        </div>
        )
      })}
    </React.Fragment>
  )
}

export default List