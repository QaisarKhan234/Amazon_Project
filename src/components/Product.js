import React from 'react';
import "./Product.css";
import { useStateValue } from './context/ContextProvider';
const Product = ({ id, title, image, price, rating }) => {
  const [{basket}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: 'Add_To_Basket',
      // if key and value is the same then we would write it once 
      // like {id, title..} 
      payload:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => {
              <p>🌟</p>;
            })}
        </div>
      </div>

      <img src={image} />
      <button className='product_button' onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product