import cartEmpty from '../assets/img/main/shopping-cart/cart-empty.svg';

export const ShoppingCart: React.FC = () => {
  return (
    <main className="shopping-cart">
      <div className="container">			
        <div className="shopping-cart__breadcrumb">
          <ol className="breadscrumb__list">
            <li className="breadscrumb__item">Главная</li>
            <li className="breadscrumb__item">Каталог</li>
            <li className="breadscrumb__item active">Моя карзина</li>
          </ol>
        </div>
        <div className="shopping-cart__header shopping-cart-header">
          <h1 className="shopping-cart__title">Моя корзина</h1>
        </div>
        <div className="shopping-cart__body shopping-cart-body">
          <div className="shopping-cart__container">
            <div className="shopping-cart__column">
              <div className="shopping-cart-body__image"><img src={cartEmpty} alt="" /></div>
              <div className="shopping-cart-body__label">Ваша корзина пуста</div>
              <div className="shopping-cart-body__sublabel">Добавьте в нее товары из каталога</div>
              <a href="/index.html" className="shopping-cart-body__btn-catalog btn">Перейти в каталог</a>
            </div>
          </div>
        </div>
      </div>
	</main>);
}
