import React from 'react';
import final from '/img/catalog/final.svg';
import close from '/img/catalog/close.svg';
type ModalProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};
const Modal: React.FC<ModalProps> = ({ active, setActive }) => {
  return (
    <div>
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div
          className={active ? 'modal__content active' : 'modal__content'}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal__inner">
            <span onClick={() => setActive(false)}>
              <img src={close} alt="закрыть" />
            </span>

            <img src={final} alt="завершить заказ" />
            <h3 className="modal__title">Спасибо за заказ</h3>
            <p>Наш менеджер свяжется с вами в ближайшее время</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
