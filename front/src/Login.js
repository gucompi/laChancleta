import React from 'react';
import './App.css';
import {loginUser} from './actions/loginActions'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
var jwtDecode = require('jwt-decode');

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:"", 
      password:"",
    }
  }
  
onChange2 = name => event => {
  let value_ = name === 'image'
  ? event.target.files[0]
  : event.target.value
  this.setState({[name]:value_})

}
handleSubmit= (event)=>{
  event.preventDefault();
  this.props.login(this.state)
}


  render(){
    
    if(this.props.token.token && new Date(jwtDecode(this.props.token.token).exp*1000).toLocaleString("es-AR")> new Date().toLocaleString("es-AR") )   return (<Redirect to='/front' />)
    return (
     
      <form onSubmit={(e)=>{this.handleSubmit(e)}} className="form-inline search">
        
      <input onChange={this.onChange2("email")} id="boton" className="form-control mr-sm-2" type="search" placeholder="Email" aria-label="Search" />
      <input onChange={this.onChange2("password")} id="boton" className="form-control mr-sm-2" type="search" placeholder="Password" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
      
    )
  }
}

const mapDispatchToProps =  {
  
    login:user=>loginUser(user)
  
}



const mapStateToProps = (state) => {
  
  return {
    token:state.loginReducer
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
