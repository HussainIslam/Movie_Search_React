import React from 'react'

export default function(props){
  const posterURL = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${props.poster}`;
  return(
    <div>
      <img src={posterURL} alt="movieposter"></img>
    </div>
  );
}