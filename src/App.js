import React from 'react';
import './App.css';
import Header from './Header';
import FormComponent from './FormComponent';
import StockComponent from './StockComponent';
import {BrowserRouter as Router, Switch, Route,  Link } from "react-router-dom";

class App extends React.Component {
  
  render(){
    return (
      <Router>
      <div className="container">   
       <section>
        <Header ></Header>
        <Switch>
          <Route path="/stock">
             <StockComponent></StockComponent>
          </Route>
          <Route path="/">
            <FormComponent></FormComponent>
          </Route>
       </Switch>
         
        </section>
      </div>
      </Router>
    )
  }
}

export default App;
