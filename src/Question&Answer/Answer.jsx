import React, {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Answer = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false);

  return (
    <div className='px-7 m-2 border rounded-xl text-center'>
        <div className='p-3 text-center'>
        <header className='flex w-100 justify-evenly p-4 m-1 rounded-xl shadow-bg bg-blue-100 text-black font-bold'>
            <h4>{title}</h4>
            <button className='ml-auto px-5' onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
        </header>
        {showInfo && <p className='px-5 '>{info}</p> }
        </div>
    </div>
  )
}

export default Answer