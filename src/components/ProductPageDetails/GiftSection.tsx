import book from '../../assets/img/product-page/book.svg';
import phoneHolder from '../../assets/img/product-page/phone-holder.svg';

export const ProductGiftSection: React.FC = () => {
  return (
    <>
      <div className="product-info__section gift-section">
        <div className="gift-section__header">
          <div className="gift-section__title">Подарочная упаковка</div>
          <div className="gift-section__right-block">
            До конца акции <span>06:34:23:02</span>
          </div>
        </div>
        <div className="gift-section__body">
          <div className="gift-section__gift-box gift-box">
            <div className="gift-box__title">2 подарка при покупке</div>
            <div className="gift-box__row">
              <div className="gift-box__block gift-block">
                <img src={book} />
                Книга «6 вопросов об электротранспорте, на которые должны знать
                ответ».
              </div>
              <div className="gift-box__block gift-block">
                <img src={phoneHolder} />
                Универсальный держатель для телефона
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
