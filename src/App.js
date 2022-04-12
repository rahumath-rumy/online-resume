import React from 'react';
import Home from './pages/homepage';
import About from './pages/About';
import Contact from './pages/contact';
import '././css/main.css'

import {Route, Link} from 'react-router-dom'

function App() {
//simple javascript code
   return( // can have only 1 parent tag (div)
    <div>
      {/* <Home/> */}
      <Route exact path="/" activeStyle={{color: "red",textDecoration:"none"}} component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
     
    </div>
  );
}

export default App;
