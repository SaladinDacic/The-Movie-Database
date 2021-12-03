import React, {useEffect, useState, createContext, useRef} from 'react';
import axios from "axios";
import myKey from "../key";

export const MethodContext = createContext()

export function MethodsProvider(props) {
  const linkRef = useRef(props.match.path.slice(1))
  const blurImgIdx = useRef([0,3,4,6,9,12,16])
  const [cardClicked, setCardClicked] = useState(false)
  const [movies, setMovies] = useState([])




  useEffect(() => {
    (async function getMovies(){
      let link;
      if(linkRef.current === "movies"){link = `https://api.themoviedb.org/3/movie/top_rated?${myKey}`}
      else if(linkRef.current === "tvshows"){
        link = `https://api.themoviedb.org/3/tv/top_rated?${myKey}`;
        blurImgIdx.current = [0,5]
      }
      const response = await axios.get(link)
      const movieData = response.data.results
      setMovies(movieData)
    })()
  }, [])

  return (
    <MethodContext.Provider value={{movies,cardClicked,setCardClicked, linkRef, blurImgIdx}}>
      {props.children}
    </MethodContext.Provider>
  )
}

