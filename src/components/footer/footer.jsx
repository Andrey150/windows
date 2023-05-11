import React from 'react';
import Logo from '../icon/logo/logo'
import './footer.scss'
import Phone from "../icon/phone/phone.jsx";
import Whatsapp from "../icon/whatsapp/whatsapp.jsx";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-wrap wrap">
        <div className="footer-wrap__col footer-wrap__col_left">
          <span className="footer-logo">
            <Logo/>
          </span>
          <span>© 2020—2023 г. Официальный&nbsp;представитель завода&nbsp;оконных&nbsp;конструкций&nbsp;"Фаворит". <br/>Все права защищены.</span>
        </div>
        <div className="footer-wrap__col footer-wrap__col_right">
          <div className="footer-wrap__col-contacts">
            <h5 className="footer-wrap__col-title footer-wrap__col-contacts__title">Контакты</h5>
            <a className="footer-wrap__col-contacts__phone" href="https://wa.me/79083434722?text=Здравствуйте.%20Обращаюсь%20к%20вам%20через%20сайт"><span> <Whatsapp/> </span>WhatsApp</a>
            <a className="footer-wrap__col-contacts__whatsapp" href="tel:+79083434722"> <span> <Phone/> </span>+7 908 343 47-22</a>
          </div>
          <div className="footer-wrap__col-schedule">
            <h5 className="footer-wrap__col-title footer-wrap__col__schedule__title">График</h5>
            <div className="footer-wrap__col__schedule__time">пн-пт: 8:00 – 22:00</div>
            <div className="footer-wrap__col__schedule__time">сб-вс 9:00 – 18:00</div>
          </div>
        </div>
      </div>
      <div className="footer-note">Информация на сайте носит информационный характер <br/> и не является публичной офертой, опредеяемой ст. 437 (2) ТК РФ.</div>
    </footer>
  );
};

export default Footer;