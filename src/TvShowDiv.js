import React from 'react';
import { MethodsProvider } from "./contexts/MethodsContext";
import Landing from './Landing';
function TvShowDiv({props}) {
  return (
      <div>
       <MethodsProvider {...props}>
          <Landing/>
        </MethodsProvider> 
     </div>
  )
}

export default TvShowDiv
