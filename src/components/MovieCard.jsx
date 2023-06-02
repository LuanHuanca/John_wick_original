import React from 'react'
import './MovieCard.css'

const MovieCard = ({movie}) => {
    
  return (
    <div className='movie-container'>
      <img 
      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
      alt=''/>
      {/* <img src={peli.poster} alt={peli.title }/> */}
    </div>
  )
}

export default MovieCard
