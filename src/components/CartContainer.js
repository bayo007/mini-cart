import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';
import { getCartItems } from '../features/cart/cartSlice';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart); //STORE HERE IS JUST A PLACEHOLDER IT CAN BE CALLED STATE
//cart is the name of the reducer here and the initial states of it all are destructured 
//used in line 27
//they are the data fetched from the API ,line 66 of the cartSlice;
//the amount of the cart item for each one is 1, the amont inline 7 here is 4, it is the one used inline 45

// const handleClick=(e)=>{
// e.preventdefault;
// dispatch(getCartItems());
// }

  if (amount < 1) {
    return (
      <section>
        <header className='cart'>
          <h2>your Phone list</h2>
          <h4 className='empty-cart'>is empty</h4>
          <button className="Get-new" onClick={()=>{dispatch(getCartItems())}}> Get new order list </button>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2>Your order list</h2>
      </header>
      <div>
        {cartItems.map((item) => { //each one of the count of the cart items is mapped into the CartItem component
          return <CartItem key={item.id} {...item} />; //return all props of each iterable into each CartItem
      // so each of the CartItem has these properties({ id, img, title, price, amount }) as it is from the cartitems
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total amount <span>${total.toFixed(2)}</span> 
          </h4>
          <h4>
            total items <span>{amount}</span> 
          </h4>
        </div> 
        <button className='btn clear-btn' onClick={() => dispatch(openModal())}>  
          clear cart 
        </button>  
      </footer>
    </section>
  );
};
export default CartContainer;
//OpenModal turn the state of the isOpen to true hence the modal component can be rendered on the App.js
// the to fixed(2) turns it to 2 decimal places