import info from '../../assets/img/product-page/info-icon.svg';

export const ProductEquipmentSection: React.FC = () => {
  return (
    <div className="product-info__section info-section">
      <div className="info-section__title">
        Комплектация
        <img src={info} />
      </div>

      <div className="info-section__body e-type">
        <div className="info-section__row">
          <label className="e-type__label">
            <input
              type="radio"
              name="equipmentType"
              value="basic"
              className="e-type__checkbox h-checkbox"
            />
            <div className="info-section product-box basic">Базовая</div>
          </label>

          <label className="e-type__label">
            <input
              type="radio"
              name="equipmentType"
              value="max"
              className="e-type__checkbox h-checkbox"
            />
            <div className="info-section product-box max">Версия MAX</div>
          </label>
        </div>
        <div className="info-section__row">
          <label className="e-type__label">
            <input
              type="radio"
              name="equipmentType"
              value="vip"
              className="e-type__checkbox h-checkbox"
            />
            <div className="info-section product-box vip">VIP-версия</div>
          </label>
        </div>
        <div className="product-info__border-line"></div>
      </div>

      <div className="info-section__footer info-subsection">
        <div className="info-subsection__label">Покрышки</div>
        <div className="info-subsection__content subsection-content">
          <div className="subsection-content__block">
            <div className="subsection-content__main-title">
              Внедорожная шипованная
            </div>
            <div className="subsection-content__secondary-title">
              + установка (с доп.комплектом базовых покрышек)
            </div>
            <div className="subsection-content__sub">7600 руб.</div>
          </div>
          <div className="subsection-content__block settings">
            <a href="#" className="settings__link">
              Изменить
            </a>
          </div>
        </div>
        <div className="product-info__border-line"></div>
      </div>
    </div>
  );
};
