import React, {useContext, useState, useRef, useEffect} from 'react'
import { MethodContext } from './contexts/MethodsContext';
import "./style/MovieCardExpended.css"

function MovieCardExpended({imageNavLink}) {
  const {movies,setCardClicked, cardClicked, linkRef} = useContext(MethodContext)
  const blurImgIdx = useRef([0])
  const pathRef = useRef(linkRef.current)
  const [blur, setBlur] = useState(false)
  useEffect(() => {
    if(pathRef.current==="movies") blurImgIdx.current = [0,3,4,6,9,12,16]
    if(blurImgIdx.current.find(val=>val===cardClicked)!==undefined)setBlur(true)
  }, [cardClicked])
  

  
  
  let title;
  if(pathRef.current === "movies"){title = movies[cardClicked].title}
  else if(pathRef.current === "tvshows"){title = movies[cardClicked].name}
  return (
    <div className={"MovieCardExpended"}>
      <div className={"MovieCardExpended-container"}>
        <div className={"MovieCardExpended-header"}>
          <h4 className={"MovieCardExpended-header-title"}>{title}</h4>
          <h4 onClick={()=>setCardClicked(false)} className={"MovieCardExpended-header-X"}>X</h4>
        </div>
        <img alt="movie" src={imageNavLink} className={`MovieCardExpended-image ${blur?"blur":null}`}/>
        <p>{movies[cardClicked].overview}</p>
      </div>
    </div>
  )
}

export default MovieCardExpended
