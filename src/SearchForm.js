import React, {useState, useEffect} from 'react'
import "./style/SearchForm.css"


function SearchForm({searchFilter, linkRef}) {
  const [searchInput, setSearchInput] = useState("")
  let search = "Search Movie"
  if(linkRef==="tvshows") search = "Search TV Show"

  const handleChange=(evt)=>{
    const inputedText = evt.target.value
    window.localStorage.setItem("searchInput", evt.target.value)

    if(inputedText.length > 3){
      setSearchInput(evt.target.value);
      searchFilter(evt.target.value);
    }else{
      setSearchInput(evt.target.value);
      searchFilter("");
    }
    
  }
  useEffect(() => {
    setSearchInput(window.localStorage.getItem("searchInput"));
    searchFilter(window.localStorage.getItem("searchInput"));
  },[])

  return (
    <form className="SearchForm">
      <h4>{search}</h4>
      <div className="SearchForm-inputAndIcon">
        <input onChange={handleChange} name="search" value={searchInput}/>
        <i className="fab fa-searchengin"></i>
      </div>
    </form>
  )
}

export default SearchForm
