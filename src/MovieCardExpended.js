import React, {useContext} from 'react'
import { MethodContext } from './contexts/MethodsContext';
import "./style/MovieCardExpended.css"

function MovieCardExpended({imageLink}) {
  const {movies,setCardClicked, cardClicked} = useContext(MethodContext)
  return (
    <div onClick={()=>{console.log(movies)}} className={"MovieCardExpended"}>
      <div className={"MovieCardExpended-container"}>
        <div className={"MovieCardExpended-header"}>
          <h4 className={"MovieCardExpended-header-title"}>{movies[cardClicked].title}</h4>
          <h4 onClick={()=>setCardClicked(false)} className={"MovieCardExpended-header-X"}>X</h4>
        </div>
        <img alt="movie" src={imageLink} className={`MovieCardExpended-image`}/>
        <p>{movies[cardClicked].overview}</p>
      </div>
    </div>
  )
}

export default MovieCardExpended
