import React from 'react'

export default ()=>{
    console.log(this.props);
    return(
        <div>
            <p>Movie image</p>
            <p>{this.props.movie.title}</p>
        </div>

    );
}