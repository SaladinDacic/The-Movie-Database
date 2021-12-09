import myKey from "../key";
import axios from "axios";
export async function getMovies(linkPath){
  let link;
  if(linkPath === "movies"){link = `https://api.themoviedb.org/3/movie/top_rated?${myKey}`}
  else if(linkPath === "tvshows"){
    link = `https://api.themoviedb.org/3/tv/top_rated?${myKey}`;
  }
  const response = await axios.get(link)
  let movieData = response.data.results
  let blurArray = ["Young Royals", "The D'Amelio Show", "Dilwale Dulhania Le Jayenge", "Gabriel's Inferno Part II", "Gabriel's Inferno Part III", "Gabriel's Inferno", "Hope", "Dedicated to my ex", "Parasite"]
  movieData = movieData.map(movie=>{
    let dataName;
    try{
      if(movie.name) dataName = movie.name;
      if(movie.title) dataName = movie.title;
    }catch(err){}
    if(blurArray.find(name=>name===dataName)){
      return {...movie, blur:true }
    }else return movie;
  })
  return movieData;
}