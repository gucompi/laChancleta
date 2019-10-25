import React from 'react';
import './App.css';
import Buscador from './Buscador';
import FormItem from './FormItem';
import Boton from './Boton';

class StockComponent extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div>
        <Buscador></Buscador>
        </div>
        <hr/>
        <div className="asideform formulario">
          <form>
          <FormItem></FormItem>
      
          </form>
        </div>
        <hr/>
        <div id="reiniciar">
          <Boton></Boton>
        </div>
        <div id="guardar">
        <Boton></Boton>
        </div>
      </React.Fragment>
    )
  }
}

export default StockComponent;