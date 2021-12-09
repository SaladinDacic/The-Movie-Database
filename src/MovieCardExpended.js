import React, {useContext,useRef} from 'react'
import { MethodContext } from './contexts/MethodsContext';
import "./style/MovieCardExpended.css"

function MovieCardExpended({imageNavLink, cardClicked, setCardClicked}) {
  const {movies, linkRef} = useContext(MethodContext)
  const pathRef = useRef(linkRef.current)
 
  
  let title;
  if(pathRef.current === "movies"){title = movies[cardClicked].title}
  else if(pathRef.current === "tvshows"){title = movies[cardClicked].name}
  return (
    <div className={"MovieCardExpended"}>
      <div className={"MovieCardExpended-container"}>
        <div className={"MovieCardExpended-header"}>
          <h4 className={"MovieCardExpended-header-title"}>{title}</h4>
          <h4 onClick={()=>setCardClicked(null)} className={"MovieCardExpended-header-X"}>X</h4>
        </div>
        <img alt="movie" src={imageNavLink} className={`MovieCardExpended-image ${movies[cardClicked].blur?"blur":null}`}/>
        <p>{movies[cardClicked].overview}</p>
      </div>
    </div>
  )
}

export default MovieCardExpended
