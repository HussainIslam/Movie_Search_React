import React from 'react'
import ReactDOM from 'react-dom'
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
            const resepone = await getData()
        }
        catch(error){

        }

    }

}