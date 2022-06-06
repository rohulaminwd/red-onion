import React from 'react';
import './footer.css'
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className='footer-container py-4'>
            <img src={logo} className='logo' alt="" />
            <footer className='container footer text-light my-4'>
                <div className="text-start footer-item" data-aos="zoom-in-right" data-aos-duration="500">
                    <h4>About us</h4>
                    <p>This demo title description title in this section</p>
                    <p>about online food</p>
                    <p>read our blog</p>
                    <p>add your restaurant</p>
                </div>
                <div className="text-start footer-item" data-aos="zoom-in-up" data-aos-duration="800">
                    <h4>contact us</h4>
                    <p>This demo title description title in this section</p>
                    <h6>+01245234455</h6>
                    <h6>demo@gamil.com</h6>
                    <h6>Dhaka Elfen road 10012</h6>
                </div>
                <div className="text-start footer-item" data-aos="zoom-in-left" data-aos-duration="1000">
                    <h4>Quack Contact</h4>
                    <input type="email" name="" className='form-control mb-3 bg-input' placeholder='Enter your email' id="" required/>
                    <textarea name="" className='form-control mb-3 bg-input' placeholder='Enter Your massage' id="" cols="10" rows="1"></textarea>
                    <input type="submit" className='btn btn-success' value="Submit" />
                </div>
            </footer>
            <p className="text-muted text-center">copy Right &copy; 2022 online food</p>
        </div>
    );
};

export default Footer;