import React from 'react';
import Movie from './Movie';
import _ from 'lodash';
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
            scrollPosition: null,
            currentPage: 1,
            movieList: []
        };
    }

    async componentDidMount(){
        this.setState({searchString: this.props.string, scrollPosition: window.scrollY});
        await this.loadData(this.props);
    }

    async shouldComponentUpdate(nextProps, nextState){
        return nextProps.string !== this.props.string;
    }

    async componentWillReceiveProps(nextProps){
        this.loadData(nextProps);
    }

    async loadData(props){
        console.log(props);
        try{
            this.setState({ loading: true });
            let response;
            let newList
            if(props.string){
                console.log("this is captain");
                this.setState({ searchString: props.string });
                response = await getData(this.state.currentPage, true, props.string);
                newList = this.state.movieList.concat(response);
                this.setState({movieList: []});
            }
            else {
                response = await getData(this.state.currentPage, false);
                newList = this.state.movieList.concat(response);
                this.setState({movieList: []});
            }
            this.setState({
                loading: false,
                movieList: newList,
            });
        }
        catch(error){
            console.log(error);
        }
    }

    updatePageNumber(){
        let page = this.state.currentPage;
        page++;
        this.setState({ currentPage: page });
    }

    async scrollEvent(e){
        if(window.scrollY !== this.state.scrollPosition){
            this.setState({ scrollPosition: window.scrollY }, async () =>{
                if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
                    this.updatePageNumber();
                    const data = await this.loadData({string: this.state.searchString});
                    //console.log('await ',data);
                }
            });

        }
    }



    render(){
        window.addEventListener('scroll', _.throttle(this.scrollEvent.bind(this), 2000, {'leading': true}));
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

