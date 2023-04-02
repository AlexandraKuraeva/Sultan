import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../../img/header/logo_b.svg';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
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

  const preventScroll = (event) => {
    event.preventDefault();
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
                    <img
                      src="../../img/header/point.svg"
                      alt="адрес"
                      className="contact-info__location"
                    />
                    <p className="contact-info__content">
                      <b>г. Кокчетав, ул. Ж. Ташенова 129Б</b>
                      <br />
                      <span>(Рынок Восточный)</span>
                    </p>
                  </li>
                  <li className="contact-info__item">
                    <img
                      src="../../img/header/mail.svg"
                      alt="адрес"
                      className="contact-info__location"
                    />
                    <p className="contact-info__content">
                      <b>
                        <a href="!#">opt.sultan@mail.ru</a>
                      </b>
                      <br />
                      <span> На связи в любое время</span>
                    </p>
                  </li>
                  <li className="contact-info__item-phone">
                    <img
                      src="../../img/header/phone.svg"
                      alt="адрес"
                      className="contact-info__location"
                    />
                    <p className="contact-info__content">
                      <b>Отдел продаж </b>
                      <a href="!#">+7 (777) 490-00-91</a>
                      <span>время работы: 9:00-20:00</span>
                    </p>
                  </li>
                  <li className="contact-info__item-call">
                    <img
                      src="../../img/header/Frame 124.svg"
                      alt="заказать звонок"
                      className="contact-info__location"
                    />
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
                  <img src="../../img/header/cart.svg" alt="корзина" />
                </span>
                <div className="cart__count">3</div>
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
                    <img src="../../img/header/logo_b.svg" alt="logo" />
                  </a>
                </div>
                <Link to="/" className="header__center-btn-catalog btn">
                  Каталог
                  <span>
                    <img src="../../img/header/Frame.svg" alt="каталог" />
                  </span>
                </Link>
                <form className=" header__center-search search-box">
                  <div className="search-box__wrapper">
                    <input type="search" className="search-box__input " placeholder="Поиск..." />
                    <button type="button" className="search-box__btn">
                      <img src="../../img/header/search.svg" alt="поиск" />
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
                  <img
                    src="../../img/header/call_img.svg"
                    alt="контентное изображение"
                    className="call__img"
                  />
                </div>

                <button className="header__center-btn-price btn">
                  Прайс-лист
                  <span>
                    <img src="../../img/header/price.svg" alt="прайс-лист" />
                  </span>
                </button>
                <Link to="/cart" className="header__cart-box">
                  <div className="cart__link cart">
                    <span className="cart__icon">
                      <img src="../../img/header/cart.svg" alt="корзина" />
                    </span>
                    <div className="cart__count">3</div>
                  </div>
                  <div className="cart__wrap">
                    <p className="cart__title">Корзина</p>
                    <p className="cart__sum">
                      <b>12 478 ₸ </b>
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
                <img src="../../img/header/catalog.svg" alt="иконка" />
                <p>Каталог</p>
              </Link>
              <div className="wrap__divider"></div>
              <div className="wrap__item">
                <img src="../../img/header/earch_b.svg" alt="иконка" />
                <p>Поиск</p>
              </div>
            </div>
          </div>
        </div>
        <div className="header-nav__js" data-open={showMenu}>
          <div className="header-nav__wrapper">
            <ul className="contact-info">
              <li className="contact-info__item">
                <img
                  src="../../img/header/point.svg"
                  alt="адрес"
                  className="contact-info__location"
                />
                <p className="contact-info__content">
                  <b>г. Кокчетав, ул. Ж. Ташенова 129Б</b>
                  <br />
                  <span>(Рынок Восточный)</span>
                </p>
              </li>
              <li className="contact-info__item">
                <img
                  src="../../img/header/mail.svg"
                  alt="почтовый адрес"
                  className="contact-info__location"
                />
                <p className="contact-info__content">
                  <b>
                    <a href="!#">opt.sultan@mail.ru</a>
                  </b>
                  <br />
                  <span> На связи в любое время</span>
                </p>
              </li>
              <li className="contact-info__item-phone">
                <img
                  src="../../img/header/phone.svg"
                  alt="номер телефона"
                  className="contact-info__location"
                />
                <p className="contact-info__content">
                  <b>Отдел продаж </b> <br />
                  <a href="!#">+7 (777) 490-00-91</a> <br />
                  <span>время работы: 9:00-20:00</span>
                </p>
              </li>
              <li className="contact-info__item-call">
                <img
                  src="../../img/header/Frame 124.svg"
                  alt="заказать звонок"
                  className="contact-info__location"
                />
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
                  <img src="../../img/header/price.svg" alt="прайс-лист" />
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
