import React from 'react';
import './App.css';

class FormItem extends React.Component {
  constructor(props){
    super(props);
    this.state={
    //  label:this.props.label || '',
      value:''
    }
    console.log(this)
  }
  
onChange = name => event => {
  let value_ = name === 'image'
  ? event.target.files[0]
  : event.target.value

  this.setState({value: value_ })

}

  render(){
    return (
     
      <div className="form-group ">
      <label htmlFor="formGroupExampleInput">{this.props.label}</label>
      <input type="text" defaultValue={this.state.defaultValue}  onChange={this.onChange()} className="form-control" id="formGroupExampleInput" placeholder="Example input" />
       </div>
    )
  }
}

export default FormItem;
