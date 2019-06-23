import React from 'react'

export default (props)=>{
    console.log(props);
    return(
        <div>
            <p>Movie image</p>
            <p>{props.movie.title}</p>
        </div>

    );
}