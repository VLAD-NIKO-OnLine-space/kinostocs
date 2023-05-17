import React from 'react';
import styles from './KinostoctPageContent.module.css'
import FilmList from '../FilmList/FilmList';

const KinostoctPageContent = ({films}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Популярное <span>&#9660;</span></h1>
            <FilmList allFilm={films.popular}/>

            <h1 className={styles.h1}>Новинки <span>&#9660;</span></h1>
            <FilmList allFilm={films.newFilms}/>

            <h1 className={styles.h1}>Смотрят все <span>&#9660;</span></h1>
            <FilmList allFilm={films.watchNow}/>

            <h1 className={styles.h1}>Для Вас <span>&#9660;</span></h1>
            <FilmList allFilm={films.filmsForYou}/>
        </div>
    );
};

export default KinostoctPageContent;