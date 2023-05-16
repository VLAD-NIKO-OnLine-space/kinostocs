import React from 'react';
import styles from './FilmItem.module.css';

const FilmItem = ({item, getValue, setVisible}) => {
    
    const openModal = async () => {
        const info = item.filmId
        setVisible(true)
        getValue(info)
    }

    
    return (
        <div className={styles.container} onClick={openModal}>
            <img src={item.posterUrl}  alt="poster" className={styles.poster} />
            <p className={styles.year}>{item.year}</p>
            <div className={styles.wrapper}>
                <p className={styles.reit}>IMDB <span>{item.rating}</span></p>
            </div>
        </div>
    );
};



export default FilmItem;