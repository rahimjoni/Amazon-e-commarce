import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import {useStateValue} from "./StateProvider";
import { user} from "firebase";
import {auth} from "../firebase";

function Header(props) {
    const [{basket,user}, dispatch] = useStateValue();
    const userauth =()=>{
        if (user){
            auth.signOut()
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo"/>
            </Link>
            <div className="header-search">
                <input type="text" className="search-input"></input>
                <SearchIcon className="search-icon"></SearchIcon>
            </div>
            <div className="header-nav">
                <Link to={!user && '/login'}>
                    <div className="header-option" onClick={userauth}>
                    <span className="header-option-lineOne">Hello Guest</span>
                    <span className="header-option-lineTwo">{user?'Sign Out':'Sign In'}</span>
                    </div>
                </Link>
                <div className="header-option">
                    <span className="header-option-lineOne">Return</span>
                    <span className="header-option-lineTwo">Order</span>
                </div>
                <div className="header-option">
                    <span className="header-option-lineOne">Your</span>
                    <span className="header-option-lineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <ShoppingBasketIcon className="shopping-basket"></ShoppingBasketIcon>
                    <span className="basket-item-count">{basket?.length}</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;