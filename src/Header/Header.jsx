import React, { useState } from 'react';
import styles from './Header.module.css';
import HeaderLinks from '../UI/HeaderLinks/HeaderLinks';
import { Link } from 'react-router-dom';


const Header = () => {
    

    const links = [
        {id: 1, title: 'Главная', to: '/kinostocs'},
        {id: 2, title: 'Поиск фильма', to: '/main'},
        {id: 3, title: 'Топ 250 фильмов', to: '/mainpage'},
        {id: 4, title: 'Скоро в кино', to: '/soonincinema'},
        {id: 5, title: 'Избранное', to: '/favourites'},
    ]
    const [click, setClick] = useState(false)
    const styleWidget = [styles.burgerWidget]
    const styleContentWidget = [styles.contentWidget]
    const styleBurgerMenu = [styles.burgerIcon]
    if(click){
        styleWidget.push(styles.active)
        styleContentWidget.push(styles.activeContent)
        styleBurgerMenu.push(styles.activeBurgerMenu)
    }


    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.logoWrapper}>
                    <img src="/478.gif" alt="logo" className={styles.logo}/>
                    <p className={styles.par}>KINO-STOCS</p>
                </div>
                <div className={styles.links}>
                    {links.map(e => <HeaderLinks link={e} key={e.id}/>)}        
                </div>
            </div>

            <div className={styles.burgerMenu}>
                <div className={styleBurgerMenu.join(' ')} onClick={()=>setClick(!click)}><span></span></div>
                <div className={styles.logoWrapper}>
                    <img src="/478.gif" alt="logo" className={styles.logo}/>
                    <p className={styles.par}>KINO-STOCS</p>
                </div>
            </div>

            <div className={styleWidget.join(' ')} onClick={()=>setClick(false)}>
                <div className={styleContentWidget.join(' ')} onClick={(e)=>e.stopPropagation()}>
                    {links.map(e => <Link to={e.to} key={e.id} className={styles.linksBurger} onClick={()=>setClick(false)}>{e.title}</Link>)}  
                </div>       
            </div>
        </div>
    );
};



export default Header;