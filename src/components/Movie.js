import React from 'react'
import Title from './Title'
import Poster from './Poster'
import Rating from './Rating'
import Description from './Description'

import './Movie.css'



export default (props)=>{
    return(
        <div>
            <Poster key={props.movie.poster_path} poster={props.movie.poster_path} />
            <Title key={props.movie.title} title={props.movie.title} />
            <Rating rating={props.movie.vote_average} />
            <Description description={props.movie.overview} />
        </div>

    );
}