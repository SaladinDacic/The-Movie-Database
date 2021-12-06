import React, {useContext} from 'react'
import { MethodContext } from './contexts/MethodsContext'
import MovieCard from './MovieCard'
import "./style/ListMovies.css"

function ListMovies() {
  const {movies, cardClicked} = useContext(MethodContext)
  const renderImages = movies.map((movie, i)=>{
      return <MovieCard tint={cardClicked===i?"tint":null} movie={movies[i]} num={i} key={i} imageLink={`https://www.themoviedb.org/t/p/original${movie.poster_path}`}/>
  })
  
  return (
    <div className="ListMovies">
      {movies && movies.length >0
        ?renderImages
        :movies.length === 0
          ?<h1 className="ListMovies-missing">No data to show!!</h1>
          :<div className="ListMovies-loading">loading</div>}

    </div>
  )
}

export default ListMovies
