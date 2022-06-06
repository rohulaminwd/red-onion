
import { Link } from "react-router-dom";
import "./foodcatagori.css"
import {BsCartPlusFill} from 'react-icons/bs'

const FoodItem = ({ foods, handleFood, handleCount }) => {
    const {img, name, title, price} = foods
    

    return (
        <div className='cart text-muted' data-aos="zoom-in-up" data-aos-duration="800">
            <div className="img mx-auto text-center">
                <img src={img} className='img-fluid' alt="" />
            </div>
            <div className="text-cart">
                <h4>{name}</h4>
                <p className="">{title}</p>
            </div>
            <div className="d-flex justify-content-between card-f">
                <h3 className="text-danger">${price}</h3>
                <div className="d-flex align-items-center ">
                    <button onClick={() => handleCount(foods)} className='btn fw-bold text-info ms-3'><BsCartPlusFill></BsCartPlusFill></button>
                    <Link to='/fooddetail' onClick={() => handleFood(foods)} className='text-decoration-none fw-bold fs-6 text-success'>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;