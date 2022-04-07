import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const {handleAddToCart} = props;
    const {img, name, price, seller, ratings} = props.product;
    return (
        <div className='product-container'>
            <img src={img} alt="images" />
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price: ${price}</p>
            <p className='product-manufacturer'>Manufacturer: {seller}</p>
            <p className='product-rating'>Rating: {ratings}</p>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
             <p className='add-cart-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;