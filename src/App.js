import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Detail from './pages/Detail';
import CartContextProvider from './context/CartContext';
import Cart from './pages/Cart';


function App() {

  

  return (
    <CartContextProvider>
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
    </CartContextProvider>  
  );
}

export default App;
