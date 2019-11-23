import React from 'react';
import './App.css';
import Buscador from './Buscador';
import FormItem from './FormItem';
import Boton from './Boton';
import {addProduct,getProducts} from './actions/productActions'
import { connect } from 'react-redux'

class AbmProducto extends React.Component {
 constructor(props){
   super(props);
   this.state= {
     nombre:"",
     categoria:""
   }
 }

 
onChange2 = name => event => {
  let value_ = name === 'image'
  ? event.target.files[0]
  : event.target.value

  this.setState({[name]: value_ })

}


submitForm =()=>{
  /*
  fetch("http://localhost:8080/stock/product",{
    method: 'POST',
    body:JSON.stringify(this.state),
    headers:{
      'Content-Type': 'application/json'
    }
   }).then((res)=>{
    return res.json();
  }).then((data)=>{
    console.log(data)
    this.props.dispatch(addProduct(data)) 
  
  })
  */
}

componentDidMount(){
  console.log("this")
  console.log(this)
  this.props.getProducts()
}

  render(){
    console.log("this.props2222")
    console.log(this.props)
    return (
      <React.Fragment>
        <h1><center>ABM PRODUCTO</center></h1>
        <div>
        <Buscador></Buscador>
        </div>
        <hr/>
        <div className="asideform formulario">
          <form onSubmit={(e)=>{e.preventDefault()}}> 
            nombre:      <input type="text"  onChange={this.onChange2('nombre')} placeholder="nombre"/> <br/>
            categoria:      <input type="text"  onChange={this.onChange2('categoria')} placeholder="categoria"/>

<input type="submit" onClick={()=>{this.submitForm()}}></input>
          </form>

          <ul>
            {this.props.products &&   this.props.products.filter((prod)=>{return prod.nombre && ( prod.nombre.indexOf(this.props.buscador)!=-1)}).map((product)=>{
              return (
                <li  key={product._id}>
                  {product.nombre}
                  {product.url  && <img src={`http://localhost:8080/product/image/${product.url}`}></img>}
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

const mapStateToProps = (state) => {
  console.log("state2")
  console.log(state)
  return {
    products:state.productReducer,
    buscador:state.buscadorReducer
  }
}
export default connect(mapStateToProps, {getProducts})(AbmProducto);