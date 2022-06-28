import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>remove items from your cart?</h4>
        <div className='btn-container'>
          <button
            type='button'
            className='btn confirm-btn'
            onClick={() => { // confirm removes the modal page and clears all the items
              dispatch(clearCart()); //removes the cart i.e cartItems becomes empty
              dispatch(closeModal()); //the isOpen state becomes false so teh modal component removes or is not rendered on the App.js page
            }}
          > 
            confirm 
          </button>
          <button
            type='button'
            className='btn clear-btn'
            onClick={() => {
              dispatch(closeModal()); //cancel only removes teh modal page
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
