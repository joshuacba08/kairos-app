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
import {CartContext} from './context/CartContext';
import Cart from './pages/Cart';


function App() {
  return (
    <CartContext.Provider>
      <Router>
          <NavBar />
          <Switch>
              <Route path="/cart">
                  <Cart />  
              </Route> 
              <Route path="/detail/:id">
                  <Detail />  
              </Route> 
              <Route path="/">
                  <Home />  
              </Route>  
          </Switch>
      </Router>
    </CartContext.Provider>  
  );
}

export default App;
