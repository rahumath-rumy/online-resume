import React from 'react';
// import { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/intro';
import './css/main.css'
import bgImage from "././image/bg1.png"
// import mainpg from './pages/mainpage';
//import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
//simple javascript code
   return( // can have only 1 parent tag (div)
    <div>
      <Navbar/>
      <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover'}}>
       <Intro/>
       <div>
       hjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkggggggggggggggg
         lllllllllllllllllllllllllllllllllllllllllllhjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkggggggggggggggg
         lllllllllllllllllllllllllllllllllllllllllllhjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkggggggggggggggg
         lllllllllllllllllllllllllllllllllllllllllllhjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkggggggggggggggg
         lllllllllllllllllllllllllllllllllllllllllllhjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkggggggggggggggg
         lllllllllllllllllllllllllllllllllllllllllllhjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkggggggggggggggg
         lllllllllllllllllllllllllllllllllllllllllllhjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkggggggggggggggg
         lllllllllllllllllllllllllllllllllllllllllllhjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkggggggggggggggg
         lllllllllllllllllllllllllllllllllllllllllllhjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkggggggggggggggg
         lllllllllllllllllllllllllllllllllllllllllllhjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkggggggggggggggg
         lllllllllllllllllllllllllllllllllllllllllll
       </div>
  </div>
    </div>
  );
}

export default App;
