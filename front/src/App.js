import React from 'react';
import './App.css';
import HeaderBack from './HeaderBack';
import AbmProducto from './AbmProducto';
import {BrowserRouter as Router, Switch, Route,  Link } from "react-router-dom";
import AlterPrecios from './AlterPrecios';
import HeaderFront from './HeaderFront';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show:false
    }
  }
  render(){
    


    return (
    <React.Fragment>

      <Router>
      <div className="container">   
       <section>
       <Switch>
         <Route path="/back*">
          <HeaderBack ></HeaderBack>
        </Route>
         <Route path="/front*">
           <HeaderFront ></HeaderFront>
        </Route>
       </Switch>
       
       <Switch>
          <Route path="/back/abmProducto">
             <AbmProducto></AbmProducto>
          </Route>
          <Route path="/back/alterPrecios">
             <AlterPrecios></AlterPrecios>
          </Route>
          <Route path="/front/abmProducto">
             <AbmProducto></AbmProducto>
          </Route>
          <Route path="/front/alterPrecios">
             <AlterPrecios></AlterPrecios>
          </Route>
         
       </Switch>
         
        </section>
      </div>
      </Router>
     
    </React.Fragment>

    )
  }
}

export default App;
