import React, {useState} from 'react'
import people from '../JS Folder/Reviewws'
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.lenght - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  // first step
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index)=> {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  // Suprise me button
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if(randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };


  return (
    <div className='px-5 m-5'>
      <div className='bg-green-300 w-[30%] text-center rounded-xl'>
        <div className='flex justify-center bg-red-300 py-5 rounded-xl'>
          <div>
            <img className='w-32 h-32 rounded-full' src={image} alt='' />
          </div>
          <span className='absolute text-center p-4 mr-[120px] mt-2 bg-blue-500 rounded-full'>
            <FaQuoteRight className='text-white text-sm'/>
          </span>
        </div>
      <h4 className='font-bold text-2xl px-1 uppercase'>{name}</h4>
      <p className='font-bold text-slate-500 text-xl'>{job}</p>
      <p className='text-justify p-3'>{text}</p>
      <div className='flex justify-evenly p-5'>
        <button onClick={prevPerson}>
          <FaChevronLeft/>
        </button>
        <button onClick={nextPerson}>
          <FaChevronRight/>
        </button>
      </div>
      <button className='font-bold my-2 p-3 bg-white rounded-xl' onClick={randomPerson} >Suprise me</button>
      </div>
    </div> 
  );
}

export default Review