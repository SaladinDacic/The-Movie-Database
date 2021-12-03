import React, {useContext} from 'react'
import { MethodContext } from './contexts/MethodsContext';
import "./style/SearchForm.css"

function SearchForm() {
  const {linkRef} = useContext(MethodContext)
  let search = "Search Movie"
  if(linkRef.current==="tvshows") search = "Search TV Show"
  return (
    <div className="SearchForm">
      <h4>{search}</h4>
      <input/>
    </div>
  )
}

export default SearchForm
