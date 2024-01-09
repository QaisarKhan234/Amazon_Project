import React from "react";
import { useStateValue } from "./context/ContextProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";
const Checkout = () => {
  // here we don't need dispatch so we only use basket
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        {basket?.length === 0 ? (
          <div>
            <h2>Your amazon basket is empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your shopping basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
              <Subtotal/> 
        </div>
      )
      }
    </div>
  );
};

export default Checkout;
