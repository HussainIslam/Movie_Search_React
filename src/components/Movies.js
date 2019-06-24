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
        this.setState({searchString: this.props.string},()=>console.log(this.props.string));
        await this.loadData(this.props);
    }

    async shouldComponentUpdate(nextProps, nextState){
        return nextProps.string !== this.props.string;
    }

    async componentWillReceiveProps(nextProps){
        this.loadData(nextProps);
    }

    async loadData(props){
        try{
            this.setState({ loading: true });
            let response;
            if(props.string){
                response = await getData(this.state.currentPage, true, props.string);
            }
            else {
                response = await getData(this.state.currentPage, false);
            }
            this.setState({
                loading: false,
                movieList: response,
            });
        }
        catch(error){
            console.log(error);
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