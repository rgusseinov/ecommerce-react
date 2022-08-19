export const FilterByWeight: React.FC = () => {
  return (
    <div className="filter-block filter-weight">
      <div className="filter-block__header">Вес</div>
      <div className="filter-block__body">
        <div className="filter-block__item">
          <label className="filter-checkbox">
            <input type="checkbox" className="filter-checkbox__input" /> Легкие
            (до 15 кг)
            <div className="filter-checkbox__hidden"></div>
          </label>
        </div>
        <div className="filter-block__item">
          <label className="filter-checkbox">
            <input type="checkbox" className="filter-checkbox__input" /> Средние
            (15-30 кг)
            <div className="filter-checkbox__hidden"></div>
          </label>
        </div>
        <div className="filter-block__item">
          <label className="filter-checkbox">
            <input type="checkbox" className="filter-checkbox__input" /> Тяжелые
            (свыше 30 кг)
            <div className="filter-checkbox__hidden"></div>
          </label>
        </div>
      </div>
    </div>
  );
};
