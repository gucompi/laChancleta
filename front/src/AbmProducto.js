import React from 'react';
import './App.css';
import Buscador from './Buscador';
import FormItem from './FormItem';
import Boton from './Boton';

class AbmProducto extends React.Component {
 constructor(props){
   super(props);
   this.state= {
     products:[]
   }
 }
 componentDidMount(){
   fetch("http://localhost:8080/stock/products").then((res)=>{
     return res.json();
   }).then((data)=>{
     this.setState({products:data})
   })
 }

  render(){
    return (
      <React.Fragment>
        <h1><center>ABM PRODUCTO</center></h1>
        <div>
        <Buscador></Buscador>
        </div>
        <hr/>
        <div className="asideform formulario">
          <form>
          {/*<FormItem label="Categoria"></FormItem>
          <FormItem label="Nombre Producto"></FormItem>
          <FormItem label="Precio"></FormItem>
          <FormItem label="Precio Oferta"></FormItem>
          <FormItem label="Stock Inicial"></FormItem>
          <FormItem label="Descripcion"></FormItem>
          <FormItem label="Categoria"></FormItem>
    */}

          </form>

          <ul>
            {this.state.products.map((product)=>{
              return (
                <li key={product._id}>
                  {product.nombre}
                </li>
            
              )
            })}
          </ul>
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

export default AbmProducto;