import React from 'react';
import './App.css';
import {updateBuscador} from './actions/buscadorActions'
import {connect} from 'react-redux'
class Buscador extends React.Component {
  constructor(props){
    super(props);
    this.state={
      buscador:""
    }
  }
  
onChange2 = name => event => {
  let value_ = name === 'image'
  ? event.target.files[0]
  : event.target.value
console.log("this.props")
console.log(this.props)
  this.props.dispatch(updateBuscador(value_))

}
  render(){
    return (
     
      <form className="form-inline search">
      <input onChange={this.onChange2("buscador")} id="boton" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
      
    )
  }
}

const mapStateToProps = (state) => {
 
  return {
    buscador:state.buscadorReducer
  }
}
export default connect(mapStateToProps)(Buscador);
