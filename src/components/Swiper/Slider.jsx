import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.css'
import 'swiper/css';

const Slider = () => {

    const preview = [
        {id: 1, img: '/prev/1.jpg'},
        {id: 2, img: '/prev/2.jpg'},
        {id: 3, img: '/prev/3.jpg'},
        {id: 4, img: '/prev/4.jpg'},
        {id: 5, img: '/prev/5.jpg'},
        {id: 6, img: '/prev/6.jpg'},
        {id: 7, img: '/prev/7.jpg'},
        {id: 8, img: '/prev/8.jpg'},
        {id: 9, img: '/prev/9.jpg'},
        {id: 10, img: '/prev/10.jpg'},
    ]


    return (

    
        <Swiper
            className={styles.swiper}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {preview.map(e => <SwiperSlide key={e.id}>
                <img src={e.img} alt="img-preview" className={styles.imgPreview}/>
            </SwiperSlide>)}

        </Swiper>
       
    );
};



export default Slider;