import React from 'react';
import './App.css';

class FormItem extends React.Component {
  render(){
    return (
     
      <div className="form-group ">
      <label htmlFor="formGroupExampleInput">Example label</label>
      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
    </div>
    )
  }
}

export default FormItem;
