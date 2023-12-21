import React from 'react';
import "./Product.css";
const Product = ({ id, title, image, price, rating }) => {
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
      <button className='product_button'>Add to basket</button>
    </div>
  );
};

export default Product