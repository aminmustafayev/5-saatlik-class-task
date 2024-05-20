import React from 'react'
import './leadership.scss'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Leadership = () => {
  return (
  <>
  <div className="container">
    <div className="team-text">
        <p>TEAM</p>
        <span>Leadership</span>
    </div>
    <div className="row">
<div className="col-lg-4 col-md-12 col-sm-12 col-12">
   <div className="lead">
   <div className="lead-img">
        <img width={300} height={250} src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
    </div>
    <div className="lead-title">
        <p>John Rooster</p>
        <p>CO-FOUNDER, PRESIDENT</p>
        <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
    </div>
    <div className="icons-lead">
    <FaFacebookF />
    <FaTwitter />
    <FaInstagram />
    <FaLinkedinIn />
    </div>
   </div>
</div>
<div className="col-lg-4 col-md-12 col-sm-12 col-12">
   <div className="lead">
   <div className="lead-img">
        <img width={300} height={250} src="https://preview.colorlib.com/theme/selling/images/person_3.jpg" alt="" />
    </div>
    <div className="lead-title">
        <p>John Rooster</p>
        <p>CO-FOUNDER, PRESIDENT</p>
        <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
    </div>
    <div className="icons-lead">
    <FaFacebookF />
    <FaTwitter />
    <FaInstagram />
    <FaLinkedinIn />
    </div>
   </div>
</div>
<div className="col-lg-4 col-md-12 col-sm-12 col-12">
   <div className="lead">
   <div className="lead-img">
        <img width={300} height={250} src="https://preview.colorlib.com/theme/selling/images/person_4.jpg" alt="" />
    </div>
    <div className="lead-title">
        <p>John Rooster</p>
        <p>CO-FOUNDER, PRESIDENT</p>
        <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
    </div>
    <div className="icons-lead">
    <FaFacebookF />
    <FaTwitter />
    <FaInstagram />
    <FaLinkedinIn />
    </div>
   </div>
</div>
    </div>
  </div>
  </>
  )
}

export default Leadership