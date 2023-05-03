import React from 'react';
import logo from '../../img/footer/logo.svg';
import price from '../../img/header/price.svg';
import arrow1 from '../../img/footer/arrow1.svg';
import whatsapp from '../../img/footer/whatsapp.svg';
import telegram from '../../img/footer/telegram.svg';
import Visa from '../../img/footer/Visa.svg';
import Visa1 from '../../img/footer/Visa1.svg';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__description description">
              <div className="description__logo-btn ">
                <a href="!#">
                  <img src={logo} alt="logo" />
                </a>
                <button className="description__btn btn">
                  Прайс-лист
                  <span>
                    <img src={price} alt="Прайс-лист" />
                  </span>
                </button>
              </div>
              <p className="description__text">
                Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и
                Акмолинской области
              </p>
              <form className="description__form search__box">
                <div className="search-box__wrapper">
                  <label
                    htmlFor="search-box__input description__input"
                    className="search-box__label"
                  >
                    Подпишись на скидки и акции
                  </label>
                  <input
                    type="search"
                    className="search-box__input description__input "
                    placeholder="Введите ваш E-mail"
                  />
                  <button type="button" className="search-box__btn ">
                    <img src={arrow1} alt="e-mail" />
                  </button>
                </div>
              </form>
            </div>
            <div className="footer__nav-wrapper">
              <div className="footer__menu">
                <h5 className="footer__title">Меню сайта:</h5>
                <ul className="footer__menu">
                  <li className="footer__item">
                    <a href="!#">О компании</a>
                  </li>
                  <li className="footer__item">
                    <a href="!#">Доставка и оплата</a>
                  </li>
                  <li className="footer__item">
                    <a href="!#">Возврат</a>
                  </li>
                  <li className="footer__item">
                    <a href="!#">Контакты</a>
                  </li>
                </ul>
              </div>
              <div className="footer__categories">
                <div className="footer__menu">
                  <h5 className="footer__title">Меню сайта:</h5>
                  <ul className="footer__menu">
                    <li className="footer__item">
                      <a href="!#">Бытовая химия</a>
                    </li>
                    <li className="footer__item">
                      <a href="!#">Косметика и гигиена</a>
                    </li>
                    <li className="footer__item">
                      <a href="!#">Товары для дома</a>
                    </li>
                    <li className="footer__item">
                      <a href="!#">Товары для детей и мам</a>
                    </li>
                    <li className="footer__item">
                      <a href="!#">Посуда</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer__nav-wrapper">
              <div className="footer__price-contacts">
                <div className="footer-price">
                  <h5 className="footer-price__title">Скачать прайс-лист:</h5>
                  <button className="footer-price__btn btn">
                    Прайс-лист
                    <span>
                      <img src={price} alt="Прайс-лист" />
                    </span>
                  </button>
                </div>
                <div className="footer__contacts">
                  <p className="footer__contacts-title">Связь в мессенджерах:</p>
                  <div className="footer__icons">
                    <a className="footer__icon" href="!#">
                      <img src={whatsapp} alt="мессенджер" />
                    </a>
                    <a className="footer__icon" href="!#">
                      <img src={telegram} alt="мессенджер" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer__contacts">
                <h5 className="footer__title">Контакты:</h5>
                <div className="footer__contacts-phone">
                  <a href="tel:+77774900091" className="call__phone">
                    <b>+7 (777) 490-00-91</b>
                  </a>
                  <p className="call__text">время работы: 9:00-20:00</p>
                  <p>
                    <a className="call__phone_a" href="!#">
                      <u>Заказать звонок</u>
                    </a>
                  </p>
                  <p className="contacts__mail">
                    <b>
                      <a href="!#">opt.sultan@mail.ru</a>
                    </b>
                    <br />
                    <span> На связи в любое время</span>
                  </p>
                  <div className="footer__payment-method">
                    <div className="footer__icons">
                      <a className="footer__icon" href="!#">
                        <img src={Visa} alt="мессенджер" />
                      </a>
                      <a className="footer__icon" href="!#">
                        <img src={Visa1} alt="мессенджер" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
