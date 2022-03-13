import React from 'react';
// import { Component } from 'react';
import Navbar from './Components/Navbar';
import Home from './pages/homepage';
import About from './pages/About';
import '././css/main.css'

import {Route, Link} from 'react-router-dom'

function App() {
//simple javascript code
   return( // can have only 1 parent tag (div)
    <div>
      {/* <Home/> */}
      <Route exact path="/" activeStyle={{color: "red",textDecoration:"none"}} component={Home}/>
      <Route exact path="/about" activeStyle={{color: "red",textDecoration:"none"}} component={About}/>
      {/* <Route exact path="/" component={contact}/> */}
     
    </div>
  );
}

export default App;
