import React, {useEffect, useState, createContext} from 'react';
import axios from "axios";
import myKey from "../key";

export const MethodContext = createContext()

export function MethodsProvider(props) {
  const [cardClicked, setCardClicked] = useState(false)
  const [movies, setMovies] = useState([])
  useEffect(() => {
    (async function getMovies(){
      const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?${myKey}`)
      const movieData = response.data.results
      setMovies(movieData)
    })()
  }, [])

  return (
    <MethodContext.Provider value={{movies,cardClicked,setCardClicked}}>
      {props.children}
    </MethodContext.Provider>
  )
}

