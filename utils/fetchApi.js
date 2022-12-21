import axios from "axios" ; 

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) =>{
    const {data}= await axios.get((url) , {
        headers: {
            'X-RapidAPI-Key': '4e9d8dd12cmsh54d69b5fc55cf42p182295jsnabff759f9227',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data ;
}