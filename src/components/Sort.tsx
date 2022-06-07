import arrowDownIcon from '../assets/img/main/product-item/arrow-down.svg';

export const Sort: React.FC = () => {
  return (
    <div className="product__sortby-header sortby-header">
      <div className="sortby-header__block label">Фильтр</div>
      <div className="sortby-header__block sortby-controls">
        <div className="sortby-controls__label">Сортировать:</div>
        <div className="sortby-controls__price sort-btn sortby-price">
          По цене
          <img src={arrowDownIcon} alt="По цене" />
        </div>
        <div className="sortby-controls__params sortby-params sort-btn">
          По дальности хода
          <img src={arrowDownIcon} alt="По дальности хода" />
        </div>
      </div>
    </div>);
}
