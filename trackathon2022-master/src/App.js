import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './routes/navbar';
import Root from './routes/root';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route path="/grid-view">
            <Root />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
