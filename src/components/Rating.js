import React from 'react'
import './Rating.css'

export default function(props){
    return(
        <div>
            <h2 className="movieRating">{props.rating}</h2>
        </div>
    );
}