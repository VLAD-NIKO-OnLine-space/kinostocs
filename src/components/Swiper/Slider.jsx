import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.css';
import { Pagination, Autoplay, EffectFade, EffectCube } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import { sliderPreview } from '../../utils/sliderPreview';



const Slider = () => {



    return (
        <Swiper
            modules={[Pagination, Autoplay, EffectFade, EffectCube]}
            className={styles.swiper}
            spaceBetween={0}
            effect="cube"
            destroyed='false'

            autoplay={{delay: 4000, disableOnInteraction: false, running: true}}
            pagination={{ clickable: true}}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {sliderPreview.map(e => <SwiperSlide key={e.id}>
                <img src={e.img} alt="img-preview" className={styles.imgPreview}/>
            </SwiperSlide>)}

        </Swiper>
       
    );
};



export default Slider;