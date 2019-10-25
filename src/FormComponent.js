import React from 'react';
import './App.css';
import Buscador from './Buscador';
import FormItem from './FormItem';
import Boton from './Boton';

class FormComponent extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div>
        <Buscador></Buscador>
        </div>
        <div className="asideform formulario">
          <form>
          <FormItem></FormItem>
      
          </form>
        </div>
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

export default FormComponent;