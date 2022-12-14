import React, {Component} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../src/components/navbar";
import Beranda from "../src/pages/beranda";
import Kontak from "../src/pages/kontak"
import Jelajah from "./pages/jelajah";
import Tentang from "./pages/tentang";



function App() {
  return (
      <>

      <Beranda />
      <Tentang />
      <Jelajah />
      <Kontak />
      </>
      
  );
}

export default App;
