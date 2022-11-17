import React, {useState, useEffect} from 'react'
import Loading from './Loading'
import Tours from '../TourProject/Tours'

const url='https://course-api.com/react-tours-project'

const Tour = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    // To remove id
    const removeTour = (id) => {
        const newTours = tours.filter((tour)=> tour.id != id);
        setTours(newTours);
        // next step 1- add removeTour down
    };

    const fetchTours = async () => {
        setLoading(true);

        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(()=>{
        fetchTours();
    }, []);

    if (loading) {
        return (
            <main>
                <Loading/>
            </main>
        );
    }

    // For refresh button
    if(tours.length === 0) {
        return(
           <>
            <div className='px-3 w-[70%] text-justify'>
            <h2 className='my-5 font-bold mr-5 text-2xl'>No Tours Left</h2>
            <buttonon className='bg-blue-300 rounded-xl py-3 px-4 mx-5' onClick={fetchTours}>Refresh</buttonon>
            </div> 
           </>
        );
    }

    return (
        <div>
        <Tours tours={tours} removeTour={removeTour}/>
        {/* step 2- add removeTour here then proceed to Tours.jsx */}
        </div>
    );
}

export default Tour