import React from 'react';
import './App.css';
import {  Link } from "react-router-dom";

class Header extends React.Component {
  render(){
    return (
     
        <header>
          <nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light menu">
              <a className="navbar-brand" href="abmstock.html">Amankay</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                  <Link to="/form">ABM Producto</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/stock">Modificar Stock</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="abmstock.html">Facturación</a>
                  </li>
                </ul>
              </div>
            </nav>
          </nav>      
        </header>    
      
    )
  }
}

export default Header;
