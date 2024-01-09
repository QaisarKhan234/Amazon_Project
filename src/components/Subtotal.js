import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './context/ContextProvider';

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  const calculateTotal = () => {
    // Calculate your total here based on basket items
    // For example:
    const total = basket?.reduce((amount, item) => item.price + amount, 0);
    return total;
  };

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={calculateTotal()} // Pass the total value here
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
