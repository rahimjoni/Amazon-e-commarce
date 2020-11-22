import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "./StateProvider";

function Checkout(props) {
    const [{basket,user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout-left">
                <h5 className="email-heading">Hello, {user?.email}</h5>
                {basket.map(item =>(
                    <CheckoutProduct
                        id={item.id}
                        info = {item.info}
                        images = {item.images}
                        price = {item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
            <div className="checkout-right">
                <Subtotal/>
            </div>
        </div>
    );
}

export default Checkout;