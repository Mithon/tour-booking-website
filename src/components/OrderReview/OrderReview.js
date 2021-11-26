import React from 'react';
import useServices from '../../hooks/useProducts';
import './OrderReview.css';
import useCart from '../../hooks/useCart';


const OrderReview = () => {
    const [services] = useServices();
    const [cart] = useCart(services);
    return (
        <div>
            <h1>{services.length} </h1>
            <h3>{cart.length}</h3>
            <h1>This is OrderReview</h1>
        </div>
    );
};

export default OrderReview;