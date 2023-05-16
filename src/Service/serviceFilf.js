import axios from "axios";
// const API = '694d6a07-fe36-4cf7-ab0c-4a159b55db17'
const API = 'e94c141b-e2e8-4df0-a657-b8e234c74780'
const headers =  {headers: {
    'Content-Type': 'application/json',
    'X-API-Key': API,
}}




// 250 фильмов с API + кол-во страниц
export const getATop250Films = async (page) => {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`
    const totalPages = 13
    const responce = await axios.get(url,headers)
    return [responce.data.films, totalPages]
}


export const getSoonFilms = async () => {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1`
    const responce = await axios.get(url,headers)
    return responce.data.films
}


// получаем информацию по id фильма
export const getInfoById = async (id) => {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`
    const url2 = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office`

    const responce = await axios.get(url,headers)
    const responceAmount = await axios.get(url2,headers)

    return [responce.data, responceAmount.data.items]
}



export const SearchFilm = async (input) => {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${input}`
    const responce = await axios.get(url,headers)
    return responce.data.films
}
