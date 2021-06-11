import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Detail from './pages/Detail';

function App() {
  return (
      <Router>
          <NavBar />
          <Switch>
              <Route path="/detail/:id">
                  <Detail />  
              </Route> 
              <Route path="/">
                  <Home />  
              </Route>  
          </Switch>
      </Router>
  );
}

export default App;
