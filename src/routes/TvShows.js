import React, {useState, useEffect, useRef} from 'react'
import { MethodsProvider } from "../contexts/MethodsContext";
import Landing from '../Landing'
import { getMovies }  from  '../api/api';
function TvShows({props}) {
  const [movies, setMovies] = useState([])
  const moviesHolder = useRef(movies)
  const [cardClicked, setCardClicked] = useState(null)
  useEffect(() => {
    (async function getData(){
      let moviesList = await getMovies("tvshows")
      setMovies(moviesList)
      moviesHolder.current=moviesList
    })()
  }, [])
  
  function searchFilter (str="", moviesList=moviesHolder.current){
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
    <div>
      <MethodsProvider {...props}>
        <Landing linkRef="tvshows" searchFilter={searchFilter} movies={movies} cardClicked={cardClicked} setCardClicked={setCardClicked}/>
      </MethodsProvider> 
    </div>
  )
}

export default TvShows