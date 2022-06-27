import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  
  /*Could also be
  const amount = useSelector((store) =>store.cart.amount);
  
  const Amount = useSelector((store) =>store.cart);
  const {amount} = Amount
  */
  
  
  
  return (
    <>
      <nav>
        <div className='nav-center'>
          <h3>Mini Phone Cart App</h3>
          <div className='nav-container'>
            <CartIcon />
            <div className='amount-container'>
              <p className='total-amount'>{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
