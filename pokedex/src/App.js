import React, { useEffect, useState } from "react";
import About from "./components/About";
import "./App.css";
import Home from './components/Homepage';
import Header from "./components/Header";
import PokemonDetail from './components/pokemon_details';
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header/>
        <Routes>
          <Route path ="about" element={<About />} exact />
          <Route path="/detail/:id" element={<PokemonDetail/>}/>
          <Route path="*" element={<Home />} exact />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
