/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';

interface iSubscriptionForm {
  email: string;
}

export const Subscription: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSubscriptionFormData] = useState<iSubscriptionForm>();

  const handleFormSubmit = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setSubscriptionFormData({ email: evt.target.value });
  };
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
                value={``}
                placeholder="Введите Ваш email"
                onChange={() => {}}
              />
              <input
                type="submit"
                className="subscription-form__submit"
                value="Подписаться"
                onSubmit={handleFormSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
