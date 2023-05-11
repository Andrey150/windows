import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {
  measurment,
  pensioners,
  newcomers,
  multy,
  builder } from '../../../utils/images.jsx';

import 'swiper/css';
import 'swiper/css/bundle';
import './promotion-item.scss'

const PromotionItem = () => {
  const promotions = [
    {
      'title': 'Спецусловия для застройщиков',
      'description': 'Специальные условия для застройщиков и оптовиков',
      'img' : builder
    },
    {
      'title': 'Бесплатный замер',
      'description': 'Предоставляем бесплатный замер всем, кто приобретет окна',
      'img' : measurment
    },
    {
      'title': 'Скидки пенсионерам',
      'description': 'Скидки пенсионерам при предоставлении пенсионного удовстоверения',
      'img' : pensioners
    },
    {
      'title': 'Скидки новоселам',
      'description': 'Скидки предоставляется клиентам, купившим жилье',
      'img' : newcomers
    },
    {
      'title': 'Мультифункционал по цене обычного стекла',
      'description': 'Преобретайте мультифункционал по цене обычного стекла',
      'img' : multy
    },

  ]

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1920) {
        setSlidesPerView(5);
      } else if (width >= 1600) {
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

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      // navigation={sliderNavigation}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    >
      {
        promotions.map((item) => {
          return (
            <SwiperSlide>
              <div className='promotion-item'>
                <div className="promotion-img">
                  <img src={item.img} alt=""/>
                </div>
                <div className="promotion-text">
                  <h4 className="promotion-title">{item.title}</h4>
                  <div className="promotion-description">{item.description}</div>
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>

  );
};

export default PromotionItem;