import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import notFound from '../assets/img/404/404.svg';

export const NotFound: React.FC = () => {
  return (
    <>
      <Header />
      <section className="page__notfound page-notfound">
        <div className="container1">
          <div className="page-notfound__wrapper">
            <div className="page-notfound__info">
              <h1 className="page-notfound__title">
                Страница <br /> не найдена
              </h1>
              <p className="page-notfound__text">
                Кажется, что-то пошло не так! Запрашиваемая страница не
                существует. Возможно, она устарела или была удалена.
              </p>
              <button className="page-notfound__cta btn">
                Перейти в Instagram
              </button>
              <p className="page-notfound__subtext">
                или позвоните нам, чтобы сообщить
                <br />
                об ошибке +7 (800) 505-54-61
              </p>
            </div>
            <img
              src={notFound}
              className="page-notfound__bg"
              alt="Page not found"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
