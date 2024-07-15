import React from 'react';

import './App.css';
import "simplebar/src/simplebar.css";
// require('dotenv').config();


import { BrowserRouter as Router,Switch, Route,Redirect } from "react-router-dom";
// router
// import Navbar from "./components/header/Navbar"
import FrontPages from "./pages/FrontPages"

import DesignPages from "./pages/DesignPages"

import CobaPages from './pages/CobaPages'


import 'normalize.css';


// import Home from "./views/Home/Home"
// 

function App() {
  return (
    <Router>

      <Switch>
     
         
        <Route path="/coba"  component={CobaPages} />
        <Route path="/"   component={DesignPages} />        
      </Switch>
    
  </Router>
  );
}

export default App;
