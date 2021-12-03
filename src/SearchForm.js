import React, {useContext} from 'react'
import { MethodContext } from './contexts/MethodsContext'

function SearchForm() {
  const {linkRef} = useContext(MethodContext)
  let search = "Search film"
  if(linkRef.current==="tvshows") search = "Search series"
  return (
    <div>
      <h4>{search}</h4>
      <input/>
    </div>
  )
}

export default SearchForm
