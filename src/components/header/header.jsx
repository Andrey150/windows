import React, {useState, useEffect, useRef} from 'react';
import {NavLink} from "react-router-dom";
import Logo from '../icon/logo/logo'
import './header.scss'
import Whatsapp from "../icon/whatsapp/whatsapp.jsx";
import Phone from "../icon/phone/phone.jsx";

const Header = () => {

  const [ show, setShow ] = useState(false);
  const [ active, setActive ] = useState(false);

  const firstCome = localStorage.getItem('firstTimeCome');
  const initialState = firstCome !== 'false';
  const isFirstTimeComeRef = useRef(initialState);

  const handleClick = (event => {
    if (innerWidth <= 980) {
      if( event.target.tagName === 'A') {
        setActive(false);
        isFirstTimeComeRef.current = false;
      }
    }
    return
  })

  const removeClass= (e) => {
    if (!e.target.closest(".contacts-btn")) {
      setShow(false)
    }
  };

  useEffect(() => {
    if (firstCome === null) {
      const timer = setTimeout(() => {
        setActive(true);
        isFirstTimeComeRef.current = false;
        localStorage.setItem('firstTimeCome', 'false');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    document.body.addEventListener("click", removeClass);
    return () => document.body.removeEventListener("click", removeClass);
  });

  useEffect(() => {
    localStorage.setItem('firstTimeCome', isFirstTimeComeRef.current.toString());
  }, []);

  return (
    <header className='header'>
      <div className="wrap">
        <div className={`header-content ${active ? 'active' : ''}`}>
          <div className="logo">
            <NavLink to='/'><Logo/></NavLink>
          </div>
          <div className="phone__nav">
            <a href="tel:+79083434722"> <span> <Phone/> </span>+7 908 343 47-22</a>
            <div className="burger-wrap" onClick={() => setActive(!active)}>
              <div className='burger-menu'>
                <span></span>
              </div>
            </div>
          </div>
          <nav className='nav' onClick={handleClick}>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/faq'>Частые вопросы</NavLink>
            <NavLink to='/promotions'>Акции</NavLink>
            <NavLink to='/advantages'>Преимущества</NavLink>
            <NavLink to='/products'>Каталог</NavLink>
            <NavLink to='/reviews'>Отзывы</NavLink>
          </nav>
          <div className="contacts">
            <button className='contacts-btn button' onClick={() => setShow(true)}>Связаться с нами</button>
            <div className={`contacts-body ${show ? 'active' : ''}`}>
                <a href="https://wa.me/79083434722?text=Здравствуйте.%20Обращаюсь%20к%20вам%20через%20сайт"><span> <Whatsapp/> </span>WhatsApp</a>
                <a href="tel:+79083434722"> <span> <Phone/> </span>+7 908 343 47-22</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;