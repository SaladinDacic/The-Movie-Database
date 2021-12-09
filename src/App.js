import "./style/App.css"
import { Route, Redirect, Switch} from "react-router-dom"; 
import Movies from "./routes/Movies";
import TvShows from "./routes/TvShows";
function App() {
  return (
    <div className="App">
        <Switch >
          <Route exact path="/movies" render={(props)=>(
            <Movies props={props}/>
          )}/>
          <Route exact path="/tvshows" render={(props)=>(
            <TvShows props={props}/>
          )}/>
          <Route path="/*" render={()=><Redirect to="/tvshows"/>}/>
        </Switch>
    </div>

  );
}

export default App;
