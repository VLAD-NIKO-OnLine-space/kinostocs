import { observer } from 'mobx-react-lite';
import React from 'react';
import FavouritesStore from '../../store/FavouritesStore';
import FilmList from '../../components/FilmList/FilmList';
import styles from './FavouritesPage.module.css'
import MyButton from '../../UI/MyButton/MyButton';


const FavouritesPage = observer(() => {

    const myFavorites = FavouritesStore.listFavourites 

    const deleteAll = () => {
        FavouritesStore.delAll()
    }

    return (
        <div className={styles.main}>
            <img src="/batman.jpg" alt="batman-fon" className={styles.fon}/>
            {myFavorites.length
                ? 
                <>
                    <FilmList allFilm={myFavorites}/>
                    <MyButton onClick={deleteAll}>Очистить список</MyButton>
                </>
                : <p className={styles.nullResult}>ничего не добавленно....</p>
            }
        </div>
    );
});

export default FavouritesPage;