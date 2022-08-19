import operator from '../../assets/img/sidebar/operator.png';

export const SideBarQuestion: React.FC = () => {
  return (
    <div className="product__question sidebar-question">
      <div className="sidebar-question__container">
        <div className="sidebar-question__image">
          <img src={operator} alt="Manager" />
        </div>
        <div className="sidebar-question__body">Задать вопрос менеджеру</div>
      </div>
    </div>
  );
};
