import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Cars.css'

const Cars = () => {
    const [cars, setCars] = useState([])

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch("fakedata.json")
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const addToCart = (selectedCar) => {
        let newCart = [...cart, selectedCar]
        setCart(newCart)
    }


    return (
        <div className='container'>
            <div className='card'>
                {
                    cars.map(singleCar => <Car
                        key={singleCar.id}
                        singleCar={singleCar}
                        addToCart={addToCart}
                    ></Car>)
                }
            </div>
            <div className='cart'>
                <h2>Your Selected Car</h2>
                {
                    cart.map(car => <Cart
                        car={car}
                    ></Cart>)
                }

            </div>

        </div>
    );
};

export default Cars;