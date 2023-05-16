import React, { useEffect, useState } from 'react';
import { getSoonFilms } from '../../Service/serviceFilf';
import Loading from '../../UI/Loading/Loading';
import FilmList from '../../components/FilmList/FilmList';
import styles from '../MainPage/MainPage.module.css';


const SoonInCinemaPage = () => {

    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(false)

    const getFilms = async () => {
        setLoading(true)
        const test = await getSoonFilms()
        setFilms(test)
        setLoading(false)
    }

    useEffect(() =>{
        getFilms()
    },[])

 
    
    if (loading){
        return (
            <>
                <img src="/soonfon.jpg" alt="" className={styles.fon}/>
                <Loading/>
            </>
        )
    }

    return (
        <div className={styles.main}>
            <img src="/soonfon.jpg" alt="" className={styles.fon}/>
            <FilmList allFilm={films}/>
        </div>
    );
};

export default SoonInCinemaPage;