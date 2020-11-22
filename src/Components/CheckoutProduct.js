import React from 'react';
import {useStateValue} from "./StateProvider";
import './CheckoutProduct.css'

function CheckoutProduct({id, images, info, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const removeItem = ()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct-image" src={images}/>
            <div className="checkoutProduct-info">
                <p className="checkoutProduct-title">{info}</p>
                <p className="checkoutProduct-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct-rating">
                    {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
                </div>
                <button onClick={removeItem}>Remove From Basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;