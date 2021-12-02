import React, {useState, useEffect, useRef, useContext} from 'react'
import { MethodContext } from './contexts/MethodsContext'
import "./style/MovieCard.css"

function MovieCard({imageLink, num}) {

  const {setCardClicked} = useContext(MethodContext)

  const blurImgIdx = useRef([0,3,4,6,9,12,16])
  const [blur, setBlur] = useState(false)
  useEffect(() => {
    if(blurImgIdx.current.find(val=>val===num)!==undefined)setBlur(true)
  }, [num])
  return (
    <div onClick={()=>setCardClicked(num)} className="MovieCard">
      <img alt="movie" src={imageLink} className={`MovieCard-image ${blur?"blur":null}`}/>
    </div>
  )
}
MovieCard.defaultProps = {
  imageLink : "https://m.media-amazon.com/images/I/61HirLWRaSL._AC_SL1250_.jpg"
}
export default MovieCard
