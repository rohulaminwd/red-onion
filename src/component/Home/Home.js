import React, { useEffect, useState } from 'react';
import "./Home.css"
import banner from "../../images/banner.png"
import cookis1 from '../../images/food-cook (1).png'
import cookis2 from '../../images/food-cook (2).png'
import cookis3 from '../../images/food-cook (3).png'
import service1 from '../../images/Group 204.png'
import service2 from '../../images/Group 245.png'
import service3 from '../../images/Group 1133.png'
import useBreakfast from '../../hooks/useBreakfast';
import { Link } from 'react-router-dom';
import FoodItem from '../FoodCatagori/FoodItem';

const Home = ({handleFood, handleCount}) => {
    const [breakfast, setBreakfast,  breackFast, lunch, dinner] = useBreakfast()

    useEffect(() => {
        setFood(breackFast)
    }, [breakfast])

    const [foods, setFood] = useState(breackFast);

   

     return (
        <>
            <div className='banner' style={{ backgroundImage: `url(${banner})`}}>
                <div className="text-center">
                    <h1 className='fw-bold mb-3' data-aos="zoom-in-down" data-aos-duration="800">Best Food Waiting for Your Belly</h1>
                    <div className="search-food mx-auto" data-aos="zoom-in-up" data-aos-duration="1000">
                        <input type="search" name="search" placeholder='Chose Your food' id="" />
                        <button className='btn search-btn text-light'>search</button>
                    </div>
                </div>
            </div>

            <div className="foodItem my-3">
                <div className="d-flex align-items-center justify-content-center mt-5">
                    <button onClick={() => setFood(breackFast) } className={(foods[0]?.type === 'breakfast') ? 'active-link' : 'link'}>Breakfast</button> 
                    <button onClick={() => setFood(lunch) } className={(foods[0]?.type === 'lunch') ? 'active-link' : 'link'}>Lunch</button>
                    <button onClick={() => setFood(dinner) } className={(foods[0]?.type === 'dinner') ? 'active-link' : 'link'}>Dinner</button> 
                </div>
                <div className="food-container container py-5">
                    {
                        foods?.map(food => <FoodItem
                            key={food.id}
                            foods={food}
                            handleFood={handleFood}
                            handleCount={handleCount}
                        ></FoodItem>)
                    }
                </div>
                <button className='btn btn-info fw-bold my-3'>
                    <Link className='text-decoration-none text-light' to='/chosefood'>Chose Your Food</Link>
                </button>
            </div>
                
            <div className="container text-start my-5">
                <h2>Why You chose us</h2>
                <p className='w-50 text-w'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestias mollitia, itaque ab explicabo excepturi exercitationem praesentium rem sunt necessitatibus deleniti aliquam sed pariatur velit nihil.</p>
                <div className="cookis-container">
                    <div data-aos="zoom-in-right" data-aos-duration="500">
                        <div className="cook-item">
                            <img src={cookis1} className="img-fluid" alt="" />
                            <div className="d-flex m-3 cooki-details">
                                <img src={service1} alt="" />
                                <div className="ms-4">
                                    <h5>Fast Delevery</h5>
                                    <p className='mb-0'>autem aspernatur ullam sed tempore aspernatur ullam sed tempore repudiandae.</p>
                                    <span className='text-primary mt-0'>See more</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="zoom-in-up" data-aos-duration="800">
                        <div className="cook-item">
                            <img src={cookis3} className="img-fluid" alt="" />
                            <div className="d-flex m-3 cooki-details">
                                <img src={service3} alt="" />
                                <div className="ms-4">
                                    <h5>Fast Delevery</h5>
                                    <p className='mb-0'>autem aspernatur ullam sed tempore aspernatur ullam sed tempore repudiandae.</p>
                                    <span className='text-primary mt-0'>See more</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="zoom-in-left" data-aos-duration="1000">
                        <div className="cook-item">
                            <img src={cookis2} className="img-fluid" alt="" />
                            <div className="d-flex m-3 cooki-details">
                                <img src={service2} alt="" />
                                <div className="ms-4">
                                    <h5>Fast Delevery</h5>
                                    <p className='mb-0'>autem aspernatur ullam sed tempore aspernatur ullam sed tempore repudiandae.</p>
                                    <span className='text-primary mt-0'>See more</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;