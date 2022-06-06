import React, { useEffect, useState } from 'react';
import './delivery.css'
import delivery from '../../images/Group 1151.png'
import delivery1 from '../../images/Group 1152.png'

const Delivery = () => {
    const [map, setMap] = useState([]);
    
    useEffect(() => {
        fetch('GoogleMap.json')
        .then(res => res.json())
        .then(data => setMap(data))
    }, [])
    
    return (
        <div>
            <div className="row d-flex justify-content-center my-5">
                <div className="col-md-6" data-aos="zoom-in-right" data-aos-duration="1500">
                    <div className="location p-3">
                    {
                        map.map(i => <iframe className='google-map w-100' 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        src={i.map}></iframe>)
                    }
                    </div>
                </div>
                <div className="col-md-3 p-3" data-aos="zoom-in-left" data-aos-duration="800">
                    <div className="delevery-details text-start h-100">
                        <div className="">
                            <img src={delivery} className='delivery-img mb-2 ms-3' alt="" />
                        </div>
                        <div className="bg-light address p-3">
                            <div className="mb-3">
                                <h6 className='mb-0'>Your location</h6>
                                <p className='text-muted'>107 Road No 8</p>
                            </div>
                            <div className="">
                                <h6 className='mb-0'>Shop Address</h6>
                                <p className='text-muted mb-0'>Modutila Ekupark GPR</p>
                            </div>
                        </div>
                        <div className=" my-3">
                            <h4 className='mb-0'>09:30</h4>
                            <small className='text-muted'>Estimated Delivery</small>
                        </div>
                        <div className="address p-3 bg-light d-flex align-items-center">
                            <img src={delivery1} className='w-25' alt="" />
                            <div className="ms-3">
                                <h6 className='mb-0'>Hamim</h6>
                                <p className='text-muted mb-0'>Your Raider</p>
                            </div>
                        </div>
                        <button className='btn btn-danger w-100 fw-bold mt-3'>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;