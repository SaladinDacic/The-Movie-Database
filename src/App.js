import Landing from "./Landing";
import { MethodsProvider } from "./contexts/MethodsContext";

function App() {
  return (
    <div className="App">
      <MethodsProvider>
        <Landing/>
      </MethodsProvider>
    </div>
  );
}

export default App;
