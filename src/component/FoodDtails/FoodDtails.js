
import { useEffect, useState } from 'react';
import useBreakfast from '../../hooks/useBreakfast';
import { FcNext } from 'react-icons/fc'
import './FoodDetails.css'


const FoodDtails = ({food, handleCount}) => {
    const [breakfast, setBreakfast,  breackFast, lunch, dinner] = useBreakfast()

    const [fooditem, setFoodItem] = useState({})
    const {img, name, title, price} = fooditem;
    const [foods, setFood] = useState(breackFast) 

    useEffect(() => {
        setFood(breackFast)
    }, [breakfast])

    useEffect(() => {
        setFoodItem(food)
    }, [])

   
    let num = 0;
    const [count, setCount] = useState(num)
    const hndelCount = () => {
        if(count < 5){
            setCount(count + 1)
        }else{
            setCount(0)
        }
        setFoodItem(foods[count])
    }

    let [quantity, setquantity] = useState(1)

    const handleIncrese = (codition) => {
        if(quantity < 10 & codition === true){
            quantity = quantity + 1;
        }else if(quantity > 1 & codition === false){
            quantity = quantity - 1;
        }
        setquantity(quantity);
    }

    return (
        <div>
            <div className="d-flex align-items-center justify-content-center my-5">
                <button onClick={() => setFood(breackFast) } className={(fooditem?.type === 'breakfast') ? 'active-link' : 'link'}>Breakfast</button> 
                <button onClick={() => setFood(lunch) } className={(fooditem?.type === 'lunch') ? 'active-link' : 'link'}>Lunch</button>
                <button onClick={() => setFood(dinner) } className={(fooditem?.type === 'dinner') ? 'active-link' : 'link'}>Dinner</button>
            </div>
            <div className="container">
            <div className='row d-flex justify-content-center my-5'>
            <div className="col-md-5 my-5 d-flex justify-content-center align-items-center">
                <div className="text-start ps-3 mx-auto" data-aos="zoom-in-right" data-aos-duration="1000">
                    <h2 className='fw-bold'>{name}</h2>
                    <p className='text-muted fw-bold'>{title}</p>
                    <div className="Pricing d-flex align-items-center my-3">
                        <h4 className='text-danger fw-bold me-3'>${price * quantity}</h4>
                        <div className="fw-bold border d-flex align-items-center rounded-pill p-2">
                            <span onClick={() => handleIncrese(false)} className='cursor mx-2'>-</span>
                            <span className='mx-2'>{quantity}</span>
                            <span onClick={() => handleIncrese(true)} className='cursor mx-2'>+</span>
                        </div>
                    </div>
                    <div onClick={() => handleCount(fooditem)} className="border cursor fw-bold text-light rounded-pill p-2 px-4 bg-danger my-4 d-inline-block">
                        <span>+</span>
                        <span> Add</span>
                    </div>
                    <div className="p-3 my-4 mx-auto d-flex justify-content-center align-items-center">
                        <img src={img} className='w-25 me-4 img-hover' alt=""/>
                        <img src={foods[count]?.img} className='w-25 me-4 img-hover2' alt="" />
                        <button onClick={hndelCount} className='fw-bold rounded-pill p-2 btn fs-5 pointer text-primary'><FcNext></FcNext></button>
                    </div>
                </div>
            </div>
            <div className="col-md-6" data-aos="zoom-in-left" data-aos-duration="1000">
                <div className="">
                    <img src={img} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default FoodDtails;