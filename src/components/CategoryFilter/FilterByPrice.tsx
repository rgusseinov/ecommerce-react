import rangePrice from '../../assets/img/main/product-item/price-range.svg';
import rangeDash from '../../assets/img/main/product-item/price-dash.svg';

export const FilterByPrice: React.FC = () => {
  return (
    <div className="filter-block filter-price">
      <div className="filter-block__header">Цена</div>
      <div className="filter-block__body">
        <div className="filter-block__price-range price-range">
          <img src={rangePrice} alt="price-range" />
        </div>
        <div className="filter-block__price-input price-input">
          <input type="text" className="price-input__from" />
          <img src={rangeDash} alt="price-dash" />
          <input type="text" className="price-input__to" />
        </div>
      </div>
    </div>
  );
};
