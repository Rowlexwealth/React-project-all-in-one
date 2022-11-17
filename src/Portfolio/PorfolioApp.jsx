import React, {useState, useEffect} from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'

const url ='https://course-api.com/react-tabs-project';

const PorfolioApp = () => {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchJobs = async () => {
        const response = await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs);
        setLoading(false);
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    if(loading) {
        return (
            <div className='section loading'>
                <h1>Loading...</h1>
            </div>
        );
    }

    const { company, dates, duties, title } = jobs[value];
    return (
        <div className='text-center'>
            <div className='title'>
                <h2 className='underline'>Experience</h2>
            </div>
            <div>
                {/* btn container */}
                <div>
                    {jobs.map((item, index)=>{
                        return (
                            <button key={item.id} 
                            onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'} p-2 border m-2`}> 
                            {item.company}
                        </button>
                        )
                    })}
                </div>
                {/* job info */}
                <div>
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className='flex'>{dates}</p>
                    {duties.map((duty, index)=>{
                        return <div key={index}>
                            <FaAngleDoubleRight/>
                            <p>{duty}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
  )
}

export default PorfolioApp