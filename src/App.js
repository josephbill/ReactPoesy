import './App.css';
import React, {useState} from "react";
import Home from "./components/Home/Home";
import Favourites from './components/Favourites/Favourites';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
       {/* define an element like a navigation tag */}
       <nav
        style={{
          backgroundColor: 'black', height: '50px',
          display: 'flex', justifyContent: 'center',
          alignItems: 'center'
        }}
       >
        
        {/* links */}
        <Link to={'/'} style={{marginLeft: 0 +'px', color: 'white'}}>Home</Link>
        <Link to={'/favourites'} style={{marginLeft: 40 +'px', color: 'white'}}>Favourites</Link>
       </nav>
       <Routes>
           <Route exact path="/" element={
              <Home/>
           }/>
           <Route exact path="/favourites" element={
               <Favourites/>
           }/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
