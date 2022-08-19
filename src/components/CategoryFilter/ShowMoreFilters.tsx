import arrowDown from '../../assets/img/main/product-item/arrow-down.svg';

export const ShowMoreFilters: React.FC = () => {
  return (
    <div className="filter-block show-more-filters">
      Показать весь фильтр
      <img src={arrowDown} alt="Вниз" />
    </div>
  );
};
