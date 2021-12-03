import React from 'react';
import { MethodsProvider } from "./contexts/MethodsContext";
import Landing from './Landing';
function MovieDiv({props}) {
  return (
      <div>
       <MethodsProvider {...props}>
          <Landing/>
        </MethodsProvider> 
     </div>
  )
}

export default MovieDiv
