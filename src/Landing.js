import { MethodsProvider } from "./contexts/MethodsContext";
import ListMovies from "./ListMovies";
import "./style/Landing.css"

function Landing() {
  return (
    <div className="Landing-page">
      <MethodsProvider>
        
        <ListMovies/>
      </MethodsProvider>
    </div>
  )
}

export default Landing
