import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../../img/header/logo_b.svg';
import point from '../../img/header/point.svg';
import mail from '../../img/header/mail.svg';
import callImg from '../../img/header/call_img.svg';
import frame from '../../img/header/Frame.svg';
import price from '../../img/header/price.svg';
import cart from '../../img/header/cart.svg';
import search from '../../img/header/search.svg';
import earchB from '../../img/header/earch_b.svg';
import phone from '../../img/header/phone.svg';
import Frame2 from '../../img/header/Frame 124.svg';

import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal } from '../redax/CartSlice';
import { CartData } from '../types';

const Header = () => {
  const { items, totalQuantity, totalPrice } = useSelector(
    (state: { cartSlice: CartData }) => state.cartSlice,
  );
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState<boolean>(false);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);
  function handleBurgerClick() {
    setShowMenu(!showMenu);
  }
  //Отменить скролл при открытом меню
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('scroll', preventScroll);
    } else {
      document.body.style.overflow = 'visible';
      window.removeEventListener('scroll', preventScroll);
    }
    return () => {
      window.removeEventListener('scroll', preventScroll);
    };
  }, [showMenu]);

  const preventScroll = (event: Event): void => {
    console.log(event);
    event.preventDefault();
  };
 useEffect(() => {
   window.addEventListener('scroll', handleScroll);
   return () => {
     window.removeEventListener('scroll', handleScroll);
   };
 }, []);

 const handleScroll = (): void => {
	 const header: HTMLElement | null = document.querySelector('.header');
   const headerCenter: HTMLElement | null = document.querySelector('.header__center');
   const headerTop: HTMLElement | null = document.querySelector('.header__top');

   if (window.innerWidth > 1190) {
     if (header !== null && window.pageYOffset >80) {
       header.classList.add('fixed-header');
     } else if (header !== null) {
       header.classList.remove('fixed-header');
     }
   } else {
     if (headerTop !== null && window.pageYOffset > 80) {
       headerTop.classList.add('fixed-header');
     } else if (headerTop !== null) {
       headerTop.classList.remove('fixed-header');
     }
   }
 };
  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="header__top-inner">
              <button className="header__burger" onClick={handleBurgerClick} data-open={showMenu}>
                <span className="toggler"></span>
              </button>
              <div className="header__left">
                <ul className="header__left contact-info">
                  <li className="contact-info__item">
                    <img src={point} alt="адрес" className="contact-info__location" />
                    <p className="contact-info__content">
                      <b>г. Кокчетав, ул. Ж. Ташенова 129Б</b>
                      <br />
                      <span>(Рынок Восточный)</span>
                    </p>
                  </li>
                  <li className="contact-info__item">
                    <img src={mail} alt="адрес" className="contact-info__location" />
                    <p className="contact-info__content">
                      <b>
                        <a href="!#">opt.sultan@mail.ru</a>
                      </b>
                      <br />
                      <span> На связи в любое время</span>
                    </p>
                  </li>
                  <li className="contact-info__item-phone">
                    <img src={phone} alt="адрес" className="contact-info__location" />
                    <p className="contact-info__content">
                      <b>Отдел продаж </b>
                      <a href="!#">+7 (777) 490-00-91</a>
                      <span>время работы: 9:00-20:00</span>
                    </p>
                  </li>
                  <li className="contact-info__item-call">
                    <img src={frame} alt="заказать звонок" className="contact-info__location" />
                    <p>
                      <a href="!#">
                        <u>Заказать звонок</u>
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="header__top-logo logo">
                <a href="!#">
                  <img src={logoSvg} alt="logo" />
                </a>
              </div>
              <div className="header__right">
                <nav className="header__nav">
                  <h5 className="header-nav__title">Меню сайта:</h5>
                  <ul className="menu header__menu">
                    <li className="menu__item">
                      <a href="#" className="menu__link">
                        О компании
                      </a>
                    </li>
                    <li className="menu__item">
                      <a href="#" className="menu__link">
                        Доставка и оплата
                      </a>
                    </li>
                    <li className="menu__item">
                      <a href="#" className="menu__link">
                        Возврат
                      </a>
                    </li>
                    <li className="menu__item">
                      <a href="#" className="menu__link">
                        Контакты
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <Link to="/cart" className="cart__link cart">
                <span className="cart__icon">
                  <img src={cart} alt="корзина" />
                </span>
                <div className="cart__count">{totalQuantity}</div>
              </Link>
            </div>
          </div>
        </div>
        <hr className="header__top-line" />
        <div className="header__center">
          <div className="container">
            <div className="header__center-inner">
              <div className="header__center-content">
                <div className="header__center-logo logo">
                  <a href="#">
                    <img src={logoSvg} alt="logo" />
                  </a>
                </div>
                <Link to="/" className="header__center-btn-catalog btn">
                  Каталог
                  <span>
                    <img src={frame} alt="каталог" />
                  </span>
                </Link>
                <form className=" header__center-search search-box">
                  <div className="search-box__wrapper">
                    <input type="search" className="search-box__input " placeholder="Поиск..." />
                    <button type="button" className="search-box__btn">
                      <img src={search} alt="поиск" />
                    </button>
                  </div>
                </form>
                <div className="header__center-call call">
                  <div className="call__content">
                    <a href="tel:+77774900091" className="call__phone">
                      <b>+7 (777) 490-00-91</b>
                    </a>
                    <p className="call__text">время работы: 9:00-20:00</p>
                    <p>
                      <a className="call__phone_a" href="!#">
                        <u>Заказать звонок</u>
                      </a>
                    </p>
                  </div>
                  <img src={callImg} alt="контентное изображение" className="call__img" />
                </div>

                <button className="header__center-btn-price btn">
                  Прайс-лист
                  <span>
                    <img src={price} />
                  </span>
                </button>
                <Link to="/cart" className="header__cart-box">
                  <div className="cart__link cart">
                    <span className="cart__icon">
                      <img src={cart} alt="корзина" />
                    </span>
                    <div className="cart__count">{totalQuantity}</div>
                  </div>
                  <div className="cart__wrap">
                    <p className="cart__title">Корзина</p>
                    <p className="cart__sum">
                      <b>{totalPrice} ₽</b>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="header__center-line" />
        <div className="header__buttom">
          <div className="container">
            <div className="header__buttom-inner wrap">
              <Link to="/" className="wrap__item">
                <img src={frame} alt="иконка" />
                <p>Каталог</p>
              </Link>
              <div className="wrap__divider"></div>
              <div className="wrap__item">
                <img src={earchB} alt="иконка" />
                <p>Поиск</p>
              </div>
            </div>
          </div>
        </div>
        <div className="header-nav__js" data-open={showMenu}>
          <div className="header-nav__wrapper">
            <ul className="contact-info">
              <li className="contact-info__item">
                <img src={point} alt="адрес" className="contact-info__location" />
                <p className="contact-info__content">
                  <b>г. Кокчетав, ул. Ж. Ташенова 129Б</b>
                  <br />
                  <span>(Рынок Восточный)</span>
                </p>
              </li>
              <li className="contact-info__item">
                <img src={mail} alt="почтовый адрес" className="contact-info__location" />
                <p className="contact-info__content">
                  <b>
                    <a href="!#">opt.sultan@mail.ru</a>
                  </b>
                  <br />
                  <span> На связи в любое время</span>
                </p>
              </li>
              <li className="contact-info__item-phone">
                <img src={phone} alt="номер телефона" className="contact-info__location" />
                <p className="contact-info__content">
                  <b>Отдел продаж </b> <br />
                  <a href="!#">+7 (777) 490-00-91</a> <br />
                  <span>время работы: 9:00-20:00</span>
                </p>
              </li>
              <li className="contact-info__item-call">
                <img src={Frame2} alt="заказать звонок" className="contact-info__location" />
                <p>
                  <a href="!#">
                    <u>Заказать звонок</u>
                  </a>
                </p>
              </li>
            </ul>

            <nav className="header__nav">
              <h5 className="header-nav__title">Меню сайта:</h5>
              <ul className="menu header__menu">
                <li className="menu__item">
                  <a href="!#" className="menu__link">
                    О компании
                  </a>
                </li>
                <li className="menu__item">
                  <a href="!#" className="menu__link">
                    Доставка и оплата
                  </a>
                </li>
                <li className="menu__item">
                  <a href="!#" className="menu__link">
                    Возврат
                  </a>
                </li>
                <li className="menu__item">
                  <a href="!#" className="menu__link">
                    Контакты
                  </a>
                </li>
              </ul>
              <button className="header__center-btn-price btn">
                Прайс-лист
                <span>
                  <img src={price} alt="прайс-лист" />
                </span>
              </button>
            </nav>
          </div>
        </div>
        <hr className="header__button-line" />
      </header>
    </>
  );
};
export default Header;
