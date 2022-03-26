import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import { random } from '../Utilities/Utilites';
import './Cars.css'

const Cars = () => {
    const [cars, setCars] = useState([])

    const [cart, setCart] = useState([])

    const [choose, setChoose] = useState([])

    useEffect(() => {
        fetch("fakedata.json")
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])


    const addToCart = (selectedCar) => {
        let newCart = []
        const exist = cart.find(item => item.id === selectedCar.id)
        if (!exist) {
            newCart = [...cart, selectedCar]
            setCart(newCart)
        }

    }

    const chooseOne = (cart) => {
        let newArray = []
        let num = random(cart.length)
        const selected = cart.find(car => car.id === num)
        if (selected) {
            newArray = [selected]
            setChoose(newArray)
        }

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
                        key={car.id}
                        car={car}
                    ></Cart>)
                }
                <div>
                    <button onClick={() => chooseOne(cart)}>Choose one for me</button>
                </div>
                {
                    choose.map(singleChoose => <h1 key={singleChoose.id}>{singleChoose.name}</h1>)
                }
            </div>

        </div>
    );
};

export default Cars;