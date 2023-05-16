import React, { useEffect, useState } from 'react';
import styles from './MainPage.module.css';
import { getATop250Films } from '../../Service/serviceFilf';
import Pagination from '../../components/Pagination/Pagination';
import FilmList from '../../components/FilmList/FilmList';
import Loading from '../../UI/Loading/Loading';


               
const MainPage = () => {

    const [films, setFilms] = useState({allFilm: [], page: 1, totalPage: 0})
    const [loading, setLoading] = useState(false)

    const getFilms = async () => {
        setLoading(true)
        const [all, totalPages] = await getATop250Films(films.page)
        setFilms({...films, allFilm: all, totalPage: totalPages})
        setLoading(false)
    }

    useEffect(()=>{
        getFilms()
    }, [films.page])


    
    if (loading){
        return (
            <>
                <img src="/djoker.jpeg" alt="" className={styles.fon}/>
                <Loading/>
            </>
        )
    }
    return (
        <div className={styles.main}>
            <img src="/djoker.jpeg" alt="" className={styles.fon}/>
            <FilmList allFilm={films.allFilm}/>
            <Pagination films={films} setFilms={setFilms}/>
        </div>
    );
};



export default MainPage;