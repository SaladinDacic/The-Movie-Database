import ListMovies from "./ListMovies";
import MovieCardExpended from "./MovieCardExpended";
import SearchForm from "./SearchForm";
import {NavLink} from "react-router-dom"; 
import "./style/Landing.css"
function Landing({movies, cardClicked, setCardClicked, searchFilter, linkRef}) {
  let renderExpCard;
  try{
    if(cardClicked!==undefined && movies !== undefined){
      let url = `https://www.themoviedb.org/t/p/original${movies[cardClicked].backdrop_path}`
      renderExpCard = <MovieCardExpended setCardClicked={setCardClicked} cardClicked={cardClicked} imageNavLink={url}/>
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
        
        <SearchForm searchFilter={searchFilter} linkRef={linkRef}/>
      </div>
      <div className="Landing-page-cover">
        {renderExpCard}
        <ListMovies movies={movies} setCardClicked={setCardClicked}/>
      </div>
    </div>
  )
}

export default Landing
