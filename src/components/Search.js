import React from 'react'
import {Form} from 'react-bootstrap'

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchString: null
    }
  }
  render(){
    return(
      <div>
        <Form.Control type="text" placeholder="enter movie name" />
      </div>
    );
  }
}