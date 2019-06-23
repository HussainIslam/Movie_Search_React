import React from 'react'
import './Description.css'

export default function (props){
    return(
        <div>
            <p id="description">{props.description}</p>
        </div>
    );
}
