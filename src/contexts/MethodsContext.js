import React, {useEffect, useState, createContext, useRef} from 'react';
import axios from "axios";
import myKey from "../key";

export const MethodContext = createContext()

export function MethodsProvider(props) {
  const linkRef = useRef(props.match.path.slice(1))
  const blurImgIdx = useRef([0,3,4,7,9,16])
  const [cardClicked, setCardClicked] = useState(false)
  const [movies, setMovies] = useState([])
  const moviesRef = useRef(movies)




  useEffect(() => {
    (async function getMovies(){
      let link;
      if(linkRef.current === "movies"){link = `https://api.themoviedb.org/3/movie/top_rated?${myKey}`}
      else if(linkRef.current === "tvshows"){
        link = `https://api.themoviedb.org/3/tv/top_rated?${myKey}`;
        blurImgIdx.current = [0,5]
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
      setMovies(movieData)
      moviesRef.current=movieData
    })()
  }, [])

  
    function searchFilter (str="", moviesList=moviesRef.current){
      let newData = moviesList.map(movieData=>{
        let dataName;
        try{
          if(movieData.name) dataName = movieData.name.toLowerCase();
          if(movieData.title) dataName = movieData.title.toLowerCase();
        }catch(err){}

        dataName = dataName.split(" ").join("")
        str = str.split(" ").join("")
        if(dataName.includes(str.toLocaleLowerCase())){
          return movieData
        }else{
          return null
        }
      })
        

      const dataFiltered = newData.filter(isNotNull=>isNotNull);
      setMovies(dataFiltered)
    }
  
  

  return (
    <MethodContext.Provider value={{movies,cardClicked,setCardClicked, linkRef, blurImgIdx, searchFilter}}>
      {props.children}
    </MethodContext.Provider>
  )
}

