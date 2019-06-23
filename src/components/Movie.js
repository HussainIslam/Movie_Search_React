import React from 'react'
import Title from './Title'
import Poster from './Poster'
import Rating from './Rating'
import Description from './Description'

import './Movie.css'



export default (props)=>{
    return(
        <div className="container">
            <div>
                <Poster key={props.movie.poster_path} poster={props.movie.poster_path} />
            </div>
            <div>
                <Rating rating={props.movie.vote_average} />
                <Title key={props.movie.title} title={props.movie.title} />
                <Description description={props.movie.overview} />

            </div>
        </div>

    );
}