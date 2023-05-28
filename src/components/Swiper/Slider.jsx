import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.css';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import { sliderPreview } from '../../utils/sliderPreview';



const Slider = () => {

    return (
        <div className={styles.main}>
            <Swiper
                modules={[Pagination, Autoplay]}
                className={styles.swiper}
                spaceBetween={0}
                autoplay={{running: true, delay: 4000, disableOnInteraction: false} }
                pagination={{ clickable: true}}
                slidesPerView={1}
            >
                {sliderPreview.map(e => <SwiperSlide key={e.id}>
                    <img src={e.img} alt="img-preview" className={styles.imgPreview}/>
                </SwiperSlide>)}

            </Swiper>
        </div>
       
    );
};


export default Slider;