import React, {useContext} from 'react'
import { MethodContext } from './contexts/MethodsContext';
import "./style/MovieCardExpended.css"

function MovieCardExpended({imageLink}) {
  const {movies} = useContext(MethodContext)
  return (
    <div onClick={()=>{console.log(movies)}} className={"MovieCardExpended"}>
      <div className={"MovieCardExpended-container"}>
        <img alt="movie" src={imageLink} className={`MovieCardExpended-image`}/>
      </div>
    </div>
  )
}

export default MovieCardExpended
