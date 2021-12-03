import { useContext} from "react";
import { MethodContext } from "./contexts/MethodsContext";
import ListMovies from "./ListMovies";
import MovieCardExpended from "./MovieCardExpended";
import SearchForm from "./SearchForm";
import {NavLink} from "react-router-dom"; 
import "./style/Landing.css"
function Landing() {
  const {movies, cardClicked} = useContext(MethodContext)
  let renderExpCard;
  try{
    if(cardClicked!==undefined && movies !== undefined){
      let url = `https://www.themoviedb.org/t/p/original${movies[cardClicked].backdrop_path}`
      renderExpCard = <MovieCardExpended  imageNavLink={url}/>
    }else{
      renderExpCard = null
    }
  }catch(e){}


  return (
    <div className="Landing-page">
      <div className="Landing-page-header">
        <div>
          <NavLink className={(props)=>{return props?"active":"inactive"}} to="tvshows">TV Shows </NavLink>
          <NavLink className={(props)=>{return props?"active":"inactive"}} to="movies">Movies</NavLink>
        </div>
        
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
