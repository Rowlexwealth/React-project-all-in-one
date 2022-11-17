import {useState} from 'react'
import data from './JS Folder/data'
import List from './List'
import './index.css'

const Birthday = () => {
  const[people, setPeople] = useState(data)
  return (
    <div className='p-3'>
        <div className='py-4 px-4 bg-red-500 w-[300px]'>
        <section className='bg-white p-5'>
            <h3 className='p-3 font-bold text-center text-xl'>{people.length} birthdays today</h3>
            <List people={people}/>
            <button className='bg-pink-300 w-full p-2' onClick={()=> setPeople([])}>Clear all</button>
        </section>
        </div>
    </div>
  )
}

export default Birthday