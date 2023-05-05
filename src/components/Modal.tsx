import React from 'react';
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
            <h3 className="modal__title">Спасибо за заказ</h3>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
