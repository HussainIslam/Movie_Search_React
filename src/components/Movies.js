import React from 'react';
import Movie from './Movie';
import getData from '../fetchData';

import './Movies.css';

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            errored: false,
            search: false,
            searchString: null,
            currentPage: 1,
            movieList: null
        };
    }

    async componentDidMount(){
        try{
            this.setState({loading: true});
            const response = await getData();
            await this.setState({
                loading: false, 
                movieList: response
            })

        }
        catch(error){
            console.error(error);
        }

    }

    render(){
        
        if(this.state.errored){
            return(
                <div>
                    <p>Error: unable to load data</p>
                </div>
            );
        }

        if(this.state.loading){
            return(
                <div>
                    <p>Loading the data ...</p>
                </div>
            );
        }

        if(this.state.movieList == null){
            return(
                <div>
                    <p>This is still loading...</p>
                </div>
            );
        }

        return this.state.movieList.map(movie=>
            <Movie 
                key={movie.id} 
                movie={movie} 
            />
        );
        
        
    }

}