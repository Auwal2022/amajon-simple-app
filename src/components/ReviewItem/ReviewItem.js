import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {product, handleRemoveProduct} = props;
    const {name, img, quantity, price, shipping, tax} = props.product;
    return (
        <div className='review-item'>
            <div className="review-images">
                <img src={img} alt="" />
            </div>
            <div className="review-item-container">
                <div className="review-item-detail">
                    <p className='product-name' title={name}>
                        { name.length > 20 ? name.slice(0, 25) + '...': name }
                    </p>
                    <p><span className='orange-color'>Price: ${price}</span></p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="review-item-delete">
                    <button onClick={ () => handleRemoveProduct(product)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
