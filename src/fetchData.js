import axios from 'axios'

const movieURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=a6a02d7b45b6b3dad199329c5774302f&language=en-US&page=";
const searchURLPart1 = "https://api.themoviedb.org/3/search/movie?api_key=a6a02d7b45b6b3dad199329c5774302f&language=en-US&query=";
const searchURLPart2 = "&include_adult=false";
export default async function(pageNumber, search, query){
    let url;
    if(search){
        url = `${searchURLPart1}${query}&page=${pageNumber}${searchURLPart2}`;
    }
    else{
        url = `${movieURL}${pageNumber}`
    }
    const response = await getData(url);
    return response.data;
}


async function getData(url){
    const response = await axios.get(url);
    const data = await response.data.results;
    const totalPages = await response.data.total_pages;
    if(!data){
        throw new Error("Unable to fetch data");
    }
    return {
        data,
        totalPages
    };
}