import React from 'react';
import './Product.css'
import {useStateValue} from "./StateProvider";

function Product({id,info, price, rating, images}) {
    const [{basket},dispatch] = useStateValue();
    const addToBasket =()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                info: info,
                images: images,
                price:price,
                rating: rating,
            },
        });
    };
    return (
        <div className="product">
            <img className="product-image" src={images} alt=""/>
            <div className="product-info">{info}</div>
            <div className="product-price"><span>$</span><strong>{price}</strong></div>
            <div className="product-rating">{Array(rating).fill().map((_,i)=>(<p>⭐</p>))}</div>
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    );
}

export default Product;