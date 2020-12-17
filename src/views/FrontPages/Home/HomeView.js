import React, { Component } from 'react';
import { Link } from 'react-router-dom';
require('dotenv').config()
export default class Home extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/coba" className="nav-link">Coba</Link>
          </li>
          <li className="navbar-item">
          <Link to="/design" className="nav-link">Design</Link>
          </li>
         
        
        </ul>
        </div>
      </nav>
    );
  }
}