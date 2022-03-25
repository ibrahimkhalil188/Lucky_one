import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Cars.css'

const Cars = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch("fakedata.json")
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className='container'>
            <div className='card'>
                {
                    cars.map(singleCar => <Car key={singleCar.id} singleCar={singleCar}></Car>)
                }
            </div>

        </div>
    );
};

export default Cars;