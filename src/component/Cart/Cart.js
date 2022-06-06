import React, { useState } from 'react';
import './cart.css'
import {FiDelete} from 'react-icons/fi'
import { Link } from 'react-router-dom';

const Cart = ({count, handleDelete}) => {

    let [quantity, setQuantity] = useState(1)
    // let [subTotal, setSubTotal] = useState(0)
    
    let deliveryFee = 0;
    let subTotal = 0
    
    for(const p of count) {
        subTotal = subTotal + p.price;
        deliveryFee = deliveryFee + 2;
    }
    const tax = parseFloat((subTotal * 0.1).toFixed(2));
    const total = subTotal + tax + deliveryFee;

    const handleDecrese = (p) => {
        if(quantity > 1){
            quantity = quantity - 1;
            subTotal = subTotal + p.price;
        }
        setQuantity(quantity);
        
    }
    const handleIncrese = (p) => {
        if(quantity < 10){
            quantity = quantity + 1;
            subTotal = subTotal + p.price;
        } 
        setQuantity(quantity);
        // setSubTotal(subTotal);
    }

    return (
        <div className='my-5 container'>
            <div className="row d-flex justify-content-evenly">
                <div className="col-md-5" data-aos="zoom-in-right" data-aos-duration="800">
                    <div className="p-3 text-start">
                        <div className="border-bottom border-2 mb-4">
                            <h5>Edit Delivery Details</h5>
                        </div>
                        <form action="">
                            <input type="text" name='address' className='form-control mb-3' placeholder='Your address' required />
                            <input type="text" name='address' className='form-control mb-3' placeholder='Your road no' required/>
                            <input type="text" name='address' className='form-control mb-3' placeholder='Your address' required/>
                            <input type="text" name='address' className='form-control mb-3' placeholder='Business name' required/>
                            <textarea name="sms" className='form-control mb-3' placeholder='Your delivery instruction' id="" cols="10" rows="2 required"></textarea>
                            <input type="submit" className='btn btn-danger w-100'/>
                        </form>
                    </div>
                </div>
                <div className="col-md-4" data-aos="zoom-in-left" data-aos-duration="1000">
                    <div className="text-start">
                        <div className="text-card mb-1">
                            <p className="my-0">from Gulistan plaza Restaura GPR</p>
                            <p className="my-0 text-muted">Arriving in 20-30 min</p>
                            <p className="my-0 text-muted">107 Road no-8</p>
                        </div>
                        <div className="add-card">
                            {
                                count.map(p => <div key={p.id} className="cart-item">
                                    <div className="d-flex align-items-center">
                                        <div className="img">
                                            <img src={p.img} className='img-fluid' alt="" />
                                        </div>
                                        <div className="ms-3">
                                            <h6 className='fw-bold m-0'>{p.name}</h6>
                                            <h5 className='text-danger mt-2 mb-0 fw-bold'>${p.price}</h5>
                                            <small className='text-muted m-0'>delivery fee</small>
                                        </div>
                                    </div>
                                    <div className="fw-bold d-flex align-items-center bg-light rounded-pill border p-2">
                                        <span onClick={() => handleDecrese(p)} className='mx-2 cursor'>-</span>
                                        <span className='mx-2'>{quantity}</span>
                                        <span onClick={() => handleIncrese(p)} className='mx-2 cursor'>+</span>
                                    </div>
                                    <div onClick={() => handleDelete(p)} className="delete-btn"><FiDelete /></div>
                                </div> )
                            }
                        </div>
                        <div className="fs-6 fw-bold my-3">
                            <div className="d-flex justify-content-between">
                                <span>Subtotal</span>
                                <span>${subTotal * quantity}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Tax</span>
                                <span>${tax}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Delivery Fee</span>
                                <span>${deliveryFee}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Total</span>
                                <span>${total}</span>
                            </div>
                        </div>
                        <Link to='/delivery' className='btn btn-danger w-100'>Place order</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;