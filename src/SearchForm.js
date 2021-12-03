import React, {useContext} from 'react'
import { MethodContext } from './contexts/MethodsContext';
import "./style/SearchForm.css"


function SearchForm() {
  const {linkRef} = useContext(MethodContext)
  let search = "Search Movie"
  if(linkRef.current==="tvshows") search = "Search TV Show"
  return (
    <form className="SearchForm">
      <h4>{search}</h4>
      <div className="SearchForm-inputAndIcon">
        <input/>
        <i className="fab fa-searchengin"></i>
      </div>
    </form>
  )
}

export default SearchForm
