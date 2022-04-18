import React from "react";
import { BrowserRouter } from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavRouter from "./components/NavMenu/NavRouter";
import NavBar from "./components/NavMenu/NavBar"

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Header />
      <NavRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
