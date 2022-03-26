import React from 'react';
import { MdDelete } from 'react-icons/md'
import './Cart.css'

const Cart = ({ car }) => {
    const { name, image } = car
    return (
        <div>
            <div className='cart-info'>
                <img src={image} alt="" />
                <h3>{name}</h3>
                <span><MdDelete /></span>
            </div>
        </div>
    );
};

export default Cart;