import React from 'react';
import './App.css';
import {  Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'
import Toggle from 'react-bootstrap/DropdownToggle'
import Menu from 'react-bootstrap/DropdownMenu'
import Item from 'react-bootstrap/Dropdown'
class HeaderBack extends React.Component {
  render(){
    return (
     
        <header>
          <nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light menu">
              <a className="navbar-brand" href="abmstock.html">Amankay Back...</a>
             
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                  <Link  to="/back/abmProducto">ABM Producto</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/back/alterPrecios">Alter Precios</Link>
                  </li> <li className="nav-item">
                    <Link to="/front/login">LOGIN</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/front">FRONT</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </nav>      
        </header>    
      
    )
  }
}

export default HeaderBack;
