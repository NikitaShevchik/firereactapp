import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Toast.scss';

const Toast = () => {
  const cross = document.querySelector('.toast__close');
  const toast = document.querySelector('.toast');
  cross?.addEventListener('click', () => {
    toast?.classList.add('_close');
    console.log('go');
  });
  toast?.addEventListener('click', (event) => {
    if (event.target) {
      console.log(event.target);
    }
  });

  return (
    <div className='toast'>
      <div className='toast__body'>
        <div className='toast__content'>
          <div className='toast__header'>
            <div className='toast__title'>Toast Title</div>
            <div className='toast__close'>
              <AiOutlineClose />
            </div>
          </div>
          <div className='toast__text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laborum accusamus placeat
            modi, a quasi.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
