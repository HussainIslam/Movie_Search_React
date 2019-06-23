import React from 'react'
import getData from '../fetchData'

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
        }
    }

    async componentDidMount(){
        try{
            this.setState({laoding: true});
            const response = await getData();
            console.log(response);

        }
        catch(error){

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

        return (
            <div>
                <p>These are the movies</p>
            </div>
        );
        
    }

}