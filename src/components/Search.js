import React from 'react'
import {Form} from 'react-bootstrap'

import './Search.css'

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchString: null
    }
  }
  render(){
    return(
      <div id="searchdiv">
        <Form.Control type="text" placeholder="enter movie name" id="search" />
      </div>
    );
  }
}