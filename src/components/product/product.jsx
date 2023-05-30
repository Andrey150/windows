import React from 'react';
import {
  Blitz,
  Grazio,
  Delight,
  Intelio,
  Geneo
} from '../../utils/prodict-specification.jsx'
import {
  BlitzDescription,
  GrazioDescription,
  DelightDescription,
  IntelioDescription,
  GeneoDescription
} from '../../utils/product-description.jsx'

import './product.scss'
import BasicTabs from "./product-tabs/product-tabs.jsx";

const Product = () => {

  const guarantee = [
    {
      'period': 'от 1 года ',
      'note' : 'на двери и окна'
    },
    {
      'period': 'от 1 года ',
      'note' : 'на их установку'
    },
    {
      'period': 'от 2 лет ',
      'note' : 'на отделку'
    },
    {
      'period': 'до 5 лет ',
      'note' : 'на фурнитуру (40 тысяч циклов открывания)'
    },
    {
      'period': '5 лет ',
      'note' : 'на оконные профили'
    },
    {
      'period': '5 лет ',
      'note' : ' на теплопакеты'
    },
    {
      'period': '1 год ',
      'note' : 'на стеклопакеты и теплопакеты'
    },
  ]

  return (
    <div className='product'>
      <div className="wrap">
        <h2 className="product-title">Продукция</h2>
        <p className='product-subtitle'>Цены, указанные&nbsp;на&nbsp;сайте, акуальны до&nbsp;конца&nbsp;месяца  </p>
        <BasicTabs manufacturer={{
          Blitz,
          Grazio,
          Delight,
          Intelio,
          Geneo
        }}
        description={{
         BlitzDescription,
         GrazioDescription,
         DelightDescription,
         IntelioDescription,
         GeneoDescription
        }}
        />
      </div>
      <div className="product-guarantee">
        <div className="wrap">
          <h2 className="product-guarantee__title">Гарантия</h2>
          <h5 className="product-guarantee__subtitle">Гарантия качества от завода оконных конструкций "Фаворит" распространяется на все товары и перечень услуг:</h5>
          <div className="product-guarantee__wrap">
          {guarantee.map((guarantee, idx) => {
            return (
              <div className="product-guarantee__item" key={idx}>
                <span>{guarantee.period}</span>
                {guarantee.note}
              </div>
            )
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;