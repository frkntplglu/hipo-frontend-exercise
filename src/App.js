import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './screens/Home';
import SearchResults from './screens/SearchResults';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/search/:query/:collections?">
          <SearchResults />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>        
      </div>
    </Router>
  );
}

export default App;
