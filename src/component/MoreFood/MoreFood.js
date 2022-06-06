import React, { useEffect, useState } from 'react';
import useBreakfast from '../../hooks/useBreakfast';
import FoodItem from '../FoodCatagori/FoodItem';
import './Morefood.css'

const MoreFood = ({handleFood, handleCount}) => {
    const [breakfast, setBreakfast,  breackFast, lunch, dinner] = useBreakfast()
    
    useEffect(() => {
        setFood(breackFast)
    }, [breakfast])

    const [foods, setFood] = useState(breackFast);

    return (
        <div>
            <div className="foodItem my-3">
                <div className="d-flex align-items-center justify-content-center my-5">
                <button onClick={() => setFood(breackFast) } className={(foods[0]?.type === 'breakfast') ? 'active-link' : 'link'}>Breakfast</button> 
                <button onClick={() => setFood(lunch) } className={(foods[0]?.type === 'lunch') ? 'active-link' : 'link'}>Lunch</button>
                <button onClick={() => setFood(dinner) } className={(foods[0]?.type === 'dinner') ? 'active-link' : 'link'}>Dinner</button> 
                </div>
                <div className="food-container container my-5">
                {
                        foods.map(food => <FoodItem
                            key={food.id}
                            foods={food}
                            handleFood={handleFood}
                            handleCount={handleCount}
                        ></FoodItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MoreFood;