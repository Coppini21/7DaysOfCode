import React from "react";
import GlobalStyle from "./styles/global";

import Menu from './components/Menu';
import Hero from './components/Hero';
import Ofertas from "./components/ofertas";

function App() {
  return (
      <>
        <GlobalStyle/>
        <Menu />
        <Hero />
        <Ofertas />

      </>
  );
}

export default App;
