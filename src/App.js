import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import { useEffect } from 'react';
import Modal from './components/Modal';
function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart); //both are destructured from the cart reducer
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals()); 
  }, [cartItems]); //everytime there is a change to the props in the cartItem the calculateTotals change

  useEffect(() => {
    dispatch(getCartItems('random'));
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading order list...</h1>
      </div>
    );
  }
//the modal doesnt originalyy display because isOpen is false to start with
  return (
    <main>
      {isOpen && <Modal />} 
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
