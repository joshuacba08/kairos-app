import React from 'react';

import HeroContainer from "./components/HeroContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
      <>
        <NavBar />
        <HeroContainer />
        <ItemListContainer />
      </>
  );
}

export default App;
