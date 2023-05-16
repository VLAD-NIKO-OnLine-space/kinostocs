import React, { useState } from "react"


export const useFilms = (func) => {
    const [allFilm, setAllFilms] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    const [films, setFilms] = useState({allFilm: [], page: 1, totalPage: 0})


    const getFilms = async () => {
        const [all, totalPages] = await func(page)
        setFilms({...films, allFilm: all, totalPage: totalPages})
    }





}