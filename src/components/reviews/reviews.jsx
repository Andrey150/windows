import React, {useEffect, useState} from 'react';
import {builder, measurment, multy, newcomers, pensioners} from "../../utils/images.jsx";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import './reviews.scss'

const Reviews = () => {
  const reviews = [
    {
      'capitalLetter' : 'И',
      'authorName': 'Иван Иванов',
      "city" : 'г.Казань',
      'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut beatae consequatur cum dignissimos distinctio eius, eligendi hic incidunt iste minima minus natus nemo neque omnis pariatur, quibusdam, veritatis.'
    },
    {
      'capitalLetter' : 'П',
      'authorName': 'Петр Петров',
      "city" : 'г.Зеленодольск',
      'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut beatae consequatur cum dignissimos distinctio eius, eligendi hic incidunt iste minima minus natus nemo neque omnis pariatur, quibusdam, veritatis.'
    },
    {
      'capitalLetter' : 'А',
      'authorName': 'Анна Петрова',
      "city" : 'г.Казань',
      'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut beatae consequatur cum dignissimos distinctio eius, eligendi hic incidunt iste minima minus natus nemo neque omnis pariatur, quibusdam, veritatis.'
    },
    {
      'capitalLetter' : 'И',
      'authorName': 'Инна Иванова',
      "city" : 'г.Казань',
      'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut beatae consequatur cum dignissimos distinctio eius, eligendi hic incidunt iste minima minus natus nemo neque omnis pariatur, quibusdam, veritatis.'
    },
    {
      'capitalLetter' : 'С',
      'authorName': 'Семен',
      "city" : 'г.Иннополис',
      'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut beatae consequatur cum dignissimos distinctio eius, eligendi hic incidunt iste minima minus natus nemo neque omnis pariatur, quibusdam, veritatis.'
    },
    {
      'capitalLetter' : 'Е',
      'authorName': 'Екатерина Михайловна',
      "city" : 'г.Казань',
      'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut beatae consequatur cum dignissimos distinctio eius, eligendi hic incidunt iste minima minus natus nemo neque omnis pariatur, quibusdam, veritatis.'
    },
  ]


  return (
    <>
      <div className='reviews'>
        <h2>Отзывы покупателей</h2>

        <div className="wrap">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
          >
          {
            reviews.map((item) => {
              return (
                <SwiperSlide>
                  <div className='reviews-item'>
                    <div className="reviews-item__header">
                      <h4 className="reviews-item__header-profile">{item.capitalLetter}</h4>
                      <div className="reviews-item__header-author">
                        <h5 className="reviews-item__header-author__name">{item.authorName}</h5>
                        <div className="reviews-item__header-author__city">{item.city}</div>
                      </div>
                    </div>
                    <div className="reviews-description">{item.review}</div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        </div>
      </div>
    </>
  );
};

export default Reviews;