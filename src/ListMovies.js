import React, {useContext} from 'react'
import { MethodContext } from './contexts/MethodsContext'
import MovieCard from './MovieCard'
import "./style/ListMovies.css"

function ListMovies() {
  const {movies, cardClicked} = useContext(MethodContext)
  const renderImages = movies.map((movie, i)=>{
      return <MovieCard tint={cardClicked===i?"tint":null} num={i} key={i} imageLink={`https://www.themoviedb.org/t/p/original${movie.poster_path}`}/>
  })
  return (
    <div className="ListMovies">
      {renderImages}
    </div>
  )
}

export default ListMovies
