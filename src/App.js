import React from 'react';

import HeroContainer from "./components/HeroContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
      <>
        <NavBar />
        <HeroContainer />
        <ItemListContainer />
        <ItemDetailContainer idItem={2}/>
      </>
  );
}

export default App;
