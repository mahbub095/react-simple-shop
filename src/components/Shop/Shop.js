import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products] = useState(first10);

    return (
        <div className="twin-container">
            <div className="product-container">
                <ui>
                    {
                        products.map(product => <Product>{product.name}</Product>)
                    }
                </ui>
            </div>
            <div className="cart-container">
                <h3>This is cart</h3>
            </div>
        </div>
    );
};
export default Shop;