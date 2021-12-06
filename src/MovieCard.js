import React, {useContext} from 'react'
import { MethodContext } from './contexts/MethodsContext'
import "./style/MovieCard.css"

function MovieCard({imageLink, num, movie}) {
  const {setCardClicked} = useContext(MethodContext)

  return (
    <div onClick={()=>{setCardClicked(num)}} className="MovieCard">
      <img alt="movie" src={imageLink} className={`MovieCard-image ${movie.blur?"blur":null}`}/>
    </div>
  )
}
MovieCard.defaultProps = {
  imageLink : "https://m.media-amazon.com/images/I/61HirLWRaSL._AC_SL1250_.jpg"
}
export default MovieCard
