import React, { useEffect, useState } from 'react';
import Slider from '../../components/Swiper/Slider';
import { getPopulapFilms } from '../../Service/serviceFilf';
import styles from './KinostocsPage.module.css';
import Loading from '../../UI/Loading/Loading';
import KinostoctPageContent from '../../components/KinostoctPageContent/KinostoctPageContent';
import Footer from '../../Footer/Footer';
const KinostocsPage = () => {

    const [films, setFilms] = useState({popular: [], newFilms: [], watchNow: [], filmsForYou: []})
    const [loading, setLoading] = useState(false)

    const getPopulap = async () => {
        setLoading(true)
        const popularFilms = await getPopulapFilms(1)
        const newFilms = await getPopulapFilms(2)
        const watchNow = await getPopulapFilms(3)
        const filmsForYou = await getPopulapFilms(4)
        setFilms({...films, popular: popularFilms, newFilms: newFilms, watchNow: watchNow, filmsForYou: filmsForYou})
        setLoading(false)
    }

    useEffect(()=>{
        getPopulap()
    }, [])
    

    return (
        <div>
            <img src="/mainfon.jpg" alt="" className={styles.fon}/>
            {/* <Slider/> */}

            {loading 
            ? <Loading/>
            : <><KinostoctPageContent films={films}/>
            <Footer/>
            </>
            }
            
            
        </div>
    );
};


export default KinostocsPage;