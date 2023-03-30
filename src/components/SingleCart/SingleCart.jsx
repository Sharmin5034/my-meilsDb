import React from 'react';

const SingleCart = ({movie, handleWatchTime}) => {
//const {description, poster, movieName, watchTime, imdbRating} =props.movie

    //console.log(handleWatchTime)
    return (
        <div>
            <div className="movie-poster text-center w-100 m-auto card col-md-6">
                    <img className='w-50 m-auto'
                     src={movie.poster} alt="" />
                    <h3>{movie.movieName}</h3>
                    <p>{movie.description}</p>
                    <div className="timeAndRating d-flex justify-content-around">
                        <p>Watch time: {movie.watchTime}</p>
                        <p>Rating: {movie.imdbRating}</p>
                    </div>
                   <button onClick={()=>handleWatchTime(movie.watchTime)} className='btn btn-info w-75 m-auto' >book now</button>
                </div>
        </div>
    );
};

export default SingleCart;