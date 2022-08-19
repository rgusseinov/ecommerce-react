export const FilterByType: React.FC = () => {
  return (
    <div className="filter-block filter-type">
      <div className="filter-block__header">Тип</div>
      <div className="filter-block__body">
        <div className="filter-block__item">
          <label className="filter-checkbox">
            <input type="checkbox" className="filter-checkbox__input" />{' '}
            Внедорожный
            <div className="filter-checkbox__hidden"></div>
          </label>
        </div>
        <div className="filter-block__item">
          <label className="filter-checkbox">
            <input type="checkbox" className="filter-checkbox__input" />{' '}
            Городской
            <div className="filter-checkbox__hidden"></div>
          </label>
        </div>
        <div className="filter-block__item">
          <label className="filter-checkbox">
            <input type="checkbox" className="filter-checkbox__input" /> Зимний
            <div className="filter-checkbox__hidden"></div>
          </label>
        </div>
      </div>
    </div>
  );
};
