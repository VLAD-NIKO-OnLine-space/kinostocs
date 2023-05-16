import React, { useState } from 'react';
import SearchBlock from '../../components/SearcBlock/SearchBlock';
import styles from './Searchpage.module.css';
import FilmList from '../../components/FilmList/FilmList';
import Loading from '../../UI/Loading/Loading';


const Searchpage = () => {

    const [value, setValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [nullResult, setNullResult] = useState(false)
    const [loading, setLoading] = useState(false)


    if(loading){
        return(
            <div className={styles.main}>
                <img src="/wonder.jpeg" alt="" className={styles.fon}/>

                <SearchBlock value={value} setValue={setValue} setSearchResult={setSearchResult}
                    setNullResult={setNullResult} setloading={setLoading}
                />
                <Loading/>
            </div>
        )
    }

    return (
        <div className={styles.main}>
            <img src="/wonder.jpeg" alt="" className={styles.fon}/>
            <SearchBlock value={value} setValue={setValue} setSearchResult={setSearchResult}
                setNullResult={setNullResult} setloading={setLoading}
            />
            
            {!nullResult
            ?  <FilmList allFilm={searchResult}/>
            :  <p className={styles.nullResult}>поиск не дал результатов...</p>
            }

        </div>
    );
};



export default Searchpage;