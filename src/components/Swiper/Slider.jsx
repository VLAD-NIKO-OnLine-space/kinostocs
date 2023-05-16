import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.css';
import { Pagination, Autoplay, EffectFade, EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { sliderPreview } from '../../utils/sliderPreview';


const Slider = () => {

    return (


    
        <Swiper
            modules={[Pagination, Autoplay, EffectFade, EffectCards]}
            className={styles.swiper}
            spaceBetween={0}
            effect="fade"
            autoplay={{delay: 3000, disableOnInteraction: false}}
            pagination={{ clickable: true, type: 'progressbar', color: '#fff'}}
            slidesPerView={1}
        >
            {sliderPreview.map(e => <SwiperSlide key={e.id}>
                <img src={e.img} alt="img-preview" className={styles.imgPreview}/>
            </SwiperSlide>)}

        </Swiper>
       
    );
};



export default Slider;