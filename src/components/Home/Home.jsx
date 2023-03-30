import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';

const Home = ( {handleWatchTime} ) => {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
          fetch('data.json')
          .then(res =>res.json())
          .then(data=> setMovies(data))
    }, [])
    return (
        <div>
           
           <div className="movie-container row">
            <div className="movie-card d-grid gap-3 m-auto w-100">
                {
                    movies.map(movie =><SingleCart movie ={movie} handleWatchTime={handleWatchTime}></SingleCart>)
                }
            </div>
           </div>
        </div>
    );
};

export default Home;