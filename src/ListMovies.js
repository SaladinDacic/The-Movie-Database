import React, {useContext} from 'react'
import { MethodContext } from './contexts/MethodsContext'
import MovieCard from './MovieCard'
import MovieCardExpended from './MovieCardExpended'
import "./style/ListMovies.css"

function ListMovies() {
  const {movies, cardClicked} = useContext(MethodContext)
  const renderImages = movies.map((movie, i)=>{
    if(cardClicked === i){
      return <MovieCardExpended num={i} key={i} imageLink={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`}/>
    }else{
      return <MovieCard num={i} key={i} imageLink={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`}/>
    }
  })
  return (
    <div className="ListMovies">
      {renderImages}
    </div>
  )
}

export default ListMovies
