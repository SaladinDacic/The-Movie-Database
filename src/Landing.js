import { useContext } from "react";
import { MethodContext } from "./contexts/MethodsContext";
import ListMovies from "./ListMovies";
import MovieCardExpended from "./MovieCardExpended";
import SearchForm from "./SearchForm";
import "./style/Landing.css"
function Landing() {
  const {movies, cardClicked} = useContext(MethodContext)
  let renderExpCard;
  try{
    if(cardClicked!==undefined && movies !== undefined){
      renderExpCard = <MovieCardExpended  imageLink={`https://www.themoviedb.org/t/p/original${movies[cardClicked].backdrop_path}`}/>
    }else{
      renderExpCard = null
    }
  }catch(e){}
  return (
    <div className="Landing-page">
      <div className="Landing-page-header">
        <SearchForm/>
      </div>
      <div className="Landing-page-cover">
        {renderExpCard}
        <ListMovies/>
      </div>
    </div>
  )
}

export default Landing
