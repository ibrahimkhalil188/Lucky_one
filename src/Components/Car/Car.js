import React from 'react';
import "./Car.css"
import { BsCartCheckFill } from 'react-icons/bs'

const Car = ({ singleCar }) => {
    const { name, image, price, manufacturer } = singleCar
    return (
        <div className='car'>
            <img src={image} alt="" />
            <div className='car-info'>
                <h2>Model: {name}</h2>
                <h4>Brand: {manufacturer} </h4>
                <h3>Price: ${price}</h3>
            </div>
            <button>Add to cart <BsCartCheckFill /></button>

        </div>
    );
};

export default Car;