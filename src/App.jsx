import React from "react";
import Navbar from './components/Navbar'
import Card  from './components/Card'
import Portfolio from './components/Portfolio'
import About from './components/About/index'
import Header from './components/Header'
function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Card/>
      <Portfolio/>
    </div>
  );
}

export default App;