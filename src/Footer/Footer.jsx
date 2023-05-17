import React from 'react';
import styles from './Footer.module.css'
import { Link } from 'react-router-dom';
import FooterLinks from '../UI/FooterLinks/FooterLinks';


const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <img src="/478.gif" alt="logo" className={styles.logo}/>

                <div className={styles.navigation}>
                    <FooterLinks to='/kinostocs'>Главная</FooterLinks>
                    <FooterLinks to='/main'>Поиск фильма</FooterLinks>
                    <FooterLinks to='/mainpage'>Топ 250 фильмов</FooterLinks>
                    <FooterLinks to='/soonincinema'>Скоро в кино</FooterLinks>
                    <FooterLinks to='/favourites'>Избранное</FooterLinks>
                </div>
                <p className={styles.par2}>KINOSTOCS™ | 2023</p>
                <p className={styles.par}>Project by VLAD.NIKO</p>
                <p className={styles.par3}> Все права защищены честным словом!</p>

                <div className={styles.contacts}>
                    <a href='https://t.me/VLADISLAV717' target="_blank">
                        <img src="/icons/telegram.svg" alt="icon" className={styles.icon}/>
                    </a>
                    <a href='https://github.com/VLAD-NIKO-OnLine-space' target="_blank">
                        <img src="/icons/github.svg" alt="icon" className={styles.icon}/>
                    </a>
                    <a href='https://vk.com/tekkenayt' target="_blank">
                        <img src="/icons/vk.svg" alt="icon" className={styles.icon}/>
                    </a>
                </div>
            </div>
        </div>
    );
};


export default Footer;