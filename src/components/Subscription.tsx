import React from 'react';

export const Subscription: React.FC = () => {
  return (
    <section className="product__subscription product-subscription">
      <div className="wrappper">
        <div className="container subscription-container">
          <div className="product-subscription__column subscription-label">
            Оставьте свою почту и станьте первым, кто получит скидку на новые
            самокаты
          </div>
          <div className="product-subscription__column subscription-form">
            <form action="#" className="subscription-form__form">
              <input
                type="text"
                className="subscription-form__input"
                value=""
                placeholder="Введите Ваш email"
              />
              <input
                type="вsubmit"
                className="subscription-form__submit"
                value="Подписаться"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
