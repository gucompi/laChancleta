import React from 'react';
import './App.css';
import Header from './Header';
import FormComponent from './FormComponent';
import StockComponent from './StockComponent';
import {BrowserRouter as Router, Switch, Route,  Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show:false
    }
  }
  render(){
    

    const handleShow = () => this.setState({show:!this.state.show});

    return (
    <React.Fragment>

      <Router>
      <div><b>important</b></div>
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
      <Modal show={this.state.show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={handleShow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
    </React.Fragment>

    )
  }
}

export default App;
