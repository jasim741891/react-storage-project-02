import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shope.css';

const Shope = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        // console.log(product.name)
        // console.log('click')
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <h1>Product:{products.length}</h1>
                {
                    products.map(product => <Product product={product} key={product.key} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                < Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shope;