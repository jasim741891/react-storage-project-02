import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const { cart } = props
    // const total = cart.reduce((previous, product) => previous + product.price, 0)
    let total = 0;
    for (const product of cart) {
        total = total + product.price

    }
    const shipping = 15
    const taxt = (total + shipping) * 10;
    const grandTotal = total + shipping + taxt
    return (
        <div>
            <h3>Oder Summery</h3>
            <h5>Items Ordered : {props.cart.length}</h5>
            <br />
            <h5>total : {total.toFixed(2)}</h5>
            <p>Shipping : {shipping.toFixed(2)}</p>
            <p>taxt : {taxt.toFixed(2)}</p>
            <p>grandTotal : {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;