import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {A11y, Autoplay, Navigation, Pagination, Scrollbar} from "swiper";

import 'swiper/css/navigation';
import './main-page-slider.scss'

SwiperCore.use([Autoplay ]);

const MainPageSlider = ({items}) => {

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1920) {
        setSlidesPerView(4);
      } else if (width >= 1800) {
        setSlidesPerView(4);
      } else if (width >= 1200) {
        setSlidesPerView(3);
      } else if (width >= 600) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(items)
  return (
    <div className="section-slider ">
      <Swiper
        onInit={(swiper) => setTimeout(() => swiper.update(), 0)}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        navigation
        slidesPerView={slidesPerView}
        slidesPerGroup={1}
        speed={1000}
      >
        {
          items.map((item, i) => {
            return (
              <SwiperSlide>
                <img src={item.img} alt='' />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default MainPageSlider;