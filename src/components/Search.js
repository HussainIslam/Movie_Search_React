import React from 'react'
import {Form} from 'react-bootstrap'

import './Search.css'

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: null
    }
  }
  render(){
    //console.log(this.props);
    return(
      <div id="searchdiv">
        <Form.Control 
          type="text" 
          placeholder="enter movie name" 
          id="search" 
          onKeyDown={e => {
            if(e.keyCode === 13){
              //console.log(e.target.value);
              this.setState({value: e.target.value});
              this.props.onChange(e.target.value);
            }
          }}
        />
      </div>
    );
  }
}