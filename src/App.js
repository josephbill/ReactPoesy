import './App.css';
import React, {useState} from "react";
import Home from "./components/Home/Home";
import Favourites from './components/Favourites/Favourites';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import FormikYupForm from './components/Formik/FormikYupForm';
import ReduxApp from './Redux/ReduxApp';


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
        <Link to={'/formikform'} style={{marginLeft: 40 +'px', color: 'white'}}>Formik Form</Link>
        <Link to={'/reduxapp'} style={{marginLeft: 40 +'px', color: 'white'}}>Redux App</Link>

       </nav>
       <Routes>
           <Route exact path="/" element={
              <Home/>
           }/>
           <Route exact path="/favourites" element={
               <Favourites/>
           }/>
              <Route exact path="/formikform" element={
               <FormikYupForm/>
           }/>
               <Route exact path="/reduxapp" element={
               <ReduxApp/>
           }/>
       </Routes>
    </BrowserRouter>
   
  );
}

export default App;
