import React from 'react';
import './App.css';
import Buscador from './Buscador';
import FormItem from './FormItem';
import Boton from './Boton';

class AlterPrecios extends React.Component {
  render(){
    return (
      <React.Fragment>
        <h1><center>ALTER PRECIOS</center></h1>
        <div>
        <Buscador></Buscador>
        </div>
        <hr/>
        <div className="asideform formulario">
          <form>
           <FormItem label="Temporada"></FormItem>
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

export default AlterPrecios;