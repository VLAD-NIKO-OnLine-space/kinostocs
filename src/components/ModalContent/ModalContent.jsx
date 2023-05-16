import React from 'react';
import styles from './ModalContent.module.css'
import MyButton from '../../UI/MyButton/MyButton';
import { observer } from 'mobx-react-lite';
import FavouritesStore from '../../store/FavouritesStore';
import { toJS } from 'mobx';


const ModalContent = observer(({filmId, setVisible, amount}) => {

    const rootStyles = [styles.myBtn]
    const rootDelBtn = [styles.delBtn]

    if (toJS(FavouritesStore.ids).includes(filmId.kinopoiskId)) {
        rootStyles.push(styles.disabled)
        rootDelBtn.push(styles.delBtnActive)
    }


    const getGenres = () => {
        const result = []
        filmId.genres.forEach(e => result.push(e.genre))
        return result.join(', ')
    }

    const getCountries = () => {
        const result = []
        filmId.countries.forEach(e => result.push(e.country))
        return result.join(', ')
    }   

    const pushFavorites = () => {
        const newItem = {filmId: filmId.kinopoiskId, posterUrl: filmId.posterUrl, year: filmId.year, reit: filmId.reit}
        if(!toJS(FavouritesStore.ids).includes(filmId.kinopoiskId)){
            FavouritesStore.pushFilms(newItem)
            FavouritesStore.pushIds(filmId.kinopoiskId)
        }
    }

    const deliteItem = () => {
        FavouritesStore.deliteItem(filmId.kinopoiskId)
    }


    return (
        <div className={styles.wrapper}>
            <img src={filmId.posterUrl} alt="poster-img" className={styles.modalImg}/>
            <img src="/exit.png" alt="exit-icon" className={styles.exit} onClick={()=>setVisible(false)}/>
            <div className={styles.modalContainer}>
                <div className={styles.infoContainer}>
                    <h1 className={styles.nameRu}>{filmId.nameRu}</h1>
                    <p className={styles.genres}>{getGenres()}</p>
                    <p className={styles.countries}>{getCountries()}</p>
                    <p className={styles.description}>{filmId.description}</p>
                    <p className={styles.filmLength}>Продолжительность: <span>{filmId.filmLength}</span> мин</p>
                    <p className={styles.year}>Год выпуска: <span>{filmId.year}</span></p>
                    <p className={styles.amount}>Сборы: <span>{amount}</span> $</p>
                </div>
                <div className={styles.btnContainer}>
                    <button className={rootDelBtn.join(' ')} onClick={deliteItem}>Удалить из избранного</button>
                    <button className={rootStyles.join(' ')} onClick={pushFavorites}>В избранное</button>
                    <MyButton>Смотреть на Кинопоиск</MyButton>
                </div>
            </div>
        </div>
    );
});


export default ModalContent;