import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let total  = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total/100 * 10).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart-content'>
            <h3 className='summary-title'>Order Summary</h3>
            <p className='selected-items'>Selected Items: {cart.length}</p>
            <p className='total-price'>Total Price: $ {total}</p>
            <p className='shipping-charge'>Total Shipping Charge: $ {shipping}</p>
            <p className='total-tax'>Tax: $ {tax}</p>
            <h4 className='grand-total'>Grand Total: $ {grandTotal}</h4>
            <button className='clear-cart-btn'>
                <p className='clear-cart-text'>Clear Cart</p>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>
                <button className='review-order-btn'>
                <p className='review-order-text'>Review Order</p>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cart;