import Landing from "./Landing";
import { MethodsProvider } from "./contexts/MethodsContext";
import { Route, Redirect, Switch} from "react-router-dom"; 
import MovieDiv from "./MovieDiv";
import TvShowDiv from "./TvShowDiv";
function App() {
  return (
    <div>
        <Switch className="App">
          <Route exact path="/movies" render={(props)=>(
            <MovieDiv props={props}/>
          )}/>
          <Route exact path="/tvshows" render={(props)=>(
            <TvShowDiv props={props}/>
          )}/>
          <Route path="/*" render={()=><Redirect to="/tvshows"/>}/>
        </Switch>
    </div>

  );
}

export default App;
