import React from "react";
import {
  mainPage,
  window1,
  window2,
  window3,
  window4,
  window5,
  window6,
  window7,
  window8,
  window9,
  window10,
  window11,
  window12,
  window13,
  window14,
  window15,
  balcony,
  balcony1,
  balcony2,
  balcony3,
  balcony4,
  balcony5,
  balcony6,
  balcony7,
  balcony8,
  balcony9,
  balcony10,
  balcony11,
  balcony12,
  balcony13,
} from "../../utils/images.jsx";
import 'swiper/css';
import 'swiper/css/bundle';
import "./main-page.scss";
import MainPageSlider from "./main-page-slider/main-page-slider.jsx";


const MainPage = () => {

  const windowsArray = [
    {'img': window1},
    {'img': window2},
    {'img': window3},
    {'img': window4},
    {'img': window5},
    {'img': window6},
    {'img': window7},
    {'img': window8},
    {'img': window9},
    {'img': window10},
    {'img': window11},
    {'img': window12},
    {'img': window13},
    {'img': window14},
    {'img': window15},
  ];

  const balconyArray = [
    {'img': balcony},
    {'img': balcony1},
    {'img': balcony2},
    {'img': balcony3},
    {'img': balcony4},
    {'img': balcony5},
    {'img': balcony6},
    {'img': balcony7},
    {'img': balcony8},
    {'img': balcony9},
    {'img': balcony10},
    {'img': balcony11},
    {'img': balcony12},
    {'img': balcony13},
  ]

  return (
    <div className="main-page">
      <div className="wrap">
        <h2>Доступный ассортимент</h2>
        <section className="container">
          <h3 className='window-title'>Окна</h3>
          <MainPageSlider items={windowsArray}/>

          <h3 className='balcony-title'>Остекление балконов</h3>
          <MainPageSlider items={balconyArray}/>
        </section>
        <h1>Пластиковые окна в&nbsp;Казани</h1>
        <section className="main-page__content">
          <atricle className="main-page__text">
            <p>Когда дело доходит до замены окон и дверей, вы хотите быть уверены, что получаете наилучшее качество и надежность. И здесь пластиковые окна и двери становятся идеальным выбором. Наши пластиковые окна и двери отличаются высоким качеством, долговечностью и устойчивостью к погодным условиям. Они также обладают отличными теплоизоляционными свойствами, которые позволяют снизить расходы на отопление в зимний период.</p>
            <p>Одним из главных преимуществ наших пластиковых окон и дверей является их безопасность. Мы используем только самые лучшие материалы и фурнитуру, чтобы обеспечить вашу безопасность и защитить вас от взлома. Кроме того, пластиковые окна и двери не требуют сложного ухода и легко очищаются.</p>
            <p>Мы предлагаем широкий выбор цветов и дизайнов для того, чтобы удовлетворить любой вкус и потребности. Мы также можем изготовить пластиковые окна и двери по вашим индивидуальным требованиям и размерам, чтобы они идеально подходили к вашему дому.</p>
            <p>И, конечно же, мы гарантируем высокое качество нашей продукции и предлагаем конкурентные цены. Вы можете быть уверены, что приобретая пластиковые окна и двери у нас, вы получите лучшее соотношение цены и качества.</p>
            <p>А с примерами наших работ и готовых проектов вы можете ознакомиться ниже. Не ждите больше и обратитесь к нам прямо сейчас для получения бесплатной консультации и расчета стоимости вашего проекта.</p>
          </atricle>
          <figure className="main-page__image">
            <img src={mainPage} alt="окно"/>
          </figure>
        </section>
      </div>
    </div>
  );
};

export default MainPage;