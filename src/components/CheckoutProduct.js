import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './context/ContextProvider'
const CheckoutProduct = ({id, title, image, price, rating}) => {

  const [{basket}, dispatch] = useStateValue()
  console.log(id, title, image, price, rating)
  const removeFromBasket = () => {
   dispatch({
    // this type name should be same to the action in the reducer
    type: "Remove_From_Basket",
    id: id,
   });
  }
  return (
    <div className='checkoutProduct'>
        <img className="checkoutProd_img" src={image} alt=''/>
        <div className='checkout_info'>
            <p className='checkout_title'>{title}</p>
            <p className='checkout_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct