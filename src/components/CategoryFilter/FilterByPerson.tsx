export const FilterByPerson: React.FC = () => {
  return (
    <div className="filter-block filter-person">
      <div className="filter-block__header">Для кого</div>
      <div className="filter-block__body">
        <div className="filter-block__item">
          <label className="filter-checkbox">
            <input type="checkbox" className="filter-checkbox__input" /> Для
            взрослого
            <div className="filter-checkbox__hidden"></div>
          </label>
        </div>
        <div className="filter-block__item">
          <label className="filter-checkbox">
            <input type="checkbox" className="filter-checkbox__input" /> Для
            ребенка
            <div className="filter-checkbox__hidden"></div>
          </label>
        </div>
        <div className="filter-block__item">
          <label className="filter-checkbox">
            <input type="checkbox" className="filter-checkbox__input" /> Для
            пенcионера
            <div className="filter-checkbox__hidden"></div>
          </label>
        </div>
      </div>
    </div>
  );
};
