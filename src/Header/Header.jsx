import React from 'react';
import styles from './Header.module.css';
import HeaderLinks from '../UI/HeaderLinks/HeaderLinks';


const Header = () => {
    

    const links = [
        {id: 1, title: 'Главная', to: '/kinostocs'},
        {id: 2, title: 'Поиск фильма', to: '/main'},
        {id: 3, title: 'Топ 250 фильмов', to: '/mainpage'},
        {id: 4, title: 'Скоро в кино', to: '/soonincinema'},
        {id: 5, title: 'Избранное', to: '/favourites'},
    ]

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.logoWrapper}>
                    <img src="/logo.svg" alt="logo" className={styles.logo}/>
                    <p>KINO-STOCS</p>
                </div>
                <div className={styles.links}>
                    {links.map(e => <HeaderLinks link={e} key={e.id}/>)}        
                </div>
            </div>
        </div>
    );
};



export default Header;