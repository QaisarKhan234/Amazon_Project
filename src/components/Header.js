import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from './context/ContextProvider';
const Header = () => {
// const [{state=[]}, dispatch] = useStateValue();
// the below works like the above and basket is destructure which is the current state.
  const [{basket}, dispatch] = useStateValue();
  console.log(basket); 
  return (
    <nav className="header">
      <Link to="/" className="hoverBorder">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="header_SearchBar hoverBorder">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__SearchIcon" />
      </div>
      <div className="header_Nav">
        <Link to="/login" className="header_Link hoverBorder">
          <div className="header_Option">
            <span className="header_opt1">Hello Qaisar</span>
            <span className="header_opt2">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header_Link hoverBorder">
          <div className="header_Option">
            <span className="header_opt1">Returns</span>
            <span className="header_opt2">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header_Link hoverBorder">
          <div className="header_Option">
            <span className="header_opt1">Your</span>
            <span className="header_opt2">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header_Link hoverBorder">
          <div className="header_basket">
            <ShoppingBasketIcon />
            <span className="header_opt2 header_basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header