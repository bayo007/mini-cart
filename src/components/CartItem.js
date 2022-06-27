import { ChevronDown, ChevronUp } from '../icons';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, img, title, price, amount }) => { // these props were returned or destructured as {...item} from line 28 of line container
  //they are the data fetched from the API ,line 66 of the cartSlice;
  //they are teh props of each data for each cartItem which is the same as cartitem.js
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button
          className='remove-btn'
          onClick={() => {
            dispatch(removeItem(id));  //culd have been action.removeItem if it was not destructured out
          }}
        >
          <h4>Delete item</h4>
        </button>
      </div>
      <div>
        <button
          className='amount-btn'
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>  
        <button
          className='amount-btn'
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id)); //if it decreases below 1, it automatically removes the id from the list
              return;
            }
            dispatch(decrease({ id })); //id here is the payload
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
