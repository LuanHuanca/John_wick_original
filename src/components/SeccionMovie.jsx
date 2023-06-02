import React from 'react'
import './SeccionMovie.css'
import MovieCard from './MovieCard'


const SeccionMovie = ({movies, title}) => {
  return (
    <div className="seccion-container">
      <span>{title}</span>
      <div className='seccion-slider'>
        {
          movies.map((movie) => {
            return <MovieCard movie={movie} key= {movie.id}/>
          })
        }
      </div>
    </div>
  )
}

export default SeccionMovie
