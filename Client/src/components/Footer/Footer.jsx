import React from 'react'
import './footer.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";



const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer">
    <div className="container">
      <div className="row">
         <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="footer-text">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="footer-text">
            <h4>Newsletter</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua</p>
            
          </div>
        </div>
        <div className="col-lg-3  col-md-4 col-sm-6 col-12">
          <div className="footer-text">
            <h4>Instragram Feed</h4>
           <div className="row">
           <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="footer-img">
                <img width={55} height={55} src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="" />
              </div>
              
            </div>
           <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="footer-img">
                <img width={55} height={55} src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="" />
              </div>
              
            </div>
           <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="footer-img">
                <img width={55} height={55} src="https://preview.colorlib.com/theme/shop/img/i3.jpg" alt="" />
              </div>
              
            </div>
           <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="footer-img">
                <img width={55} height={55} src="https://preview.colorlib.com/theme/shop/img/i4.jpg" alt="" />
              </div>
              
            </div>
           <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="footer-img">
                <img width={55} height={55} src="https://preview.colorlib.com/theme/shop/img/i5.jpg" alt="" />
              </div>
              
            </div>
           <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="footer-img">
                <img width={55} height={55} src="https://preview.colorlib.com/theme/shop/img/i6.jpg" alt="" />
              </div>
              
            </div>
           <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="footer-img">
                <img width={55} height={55} src="https://preview.colorlib.com/theme/shop/img/i7.jpg" alt="" />
              </div>
              
            </div>
           <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="footer-img">
                <img width={55} height={55} src="https://preview.colorlib.com/theme/shop/img/i8.jpg" alt="" />
              </div>
              
            </div>
           </div>
           
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="footer-text">
            <h4>Follow Us</h4>
            <p>Let us be social</p>
            <div className="icons-div">
            <FaFacebookF />
            <FaTwitter />
            <FaDribbble />
            <FaBehance />
            </div>
          </div>
        </div>
      </div>
      <div className="end-footer">
        <p>Copyright ©2024 All rights reserved | This template is made with <CiHeart style={{color:"red"}}/>  by Colorlib</p>
      </div>
    </div>
      </div>
    </footer>
    </>
  )
}

export default Footer