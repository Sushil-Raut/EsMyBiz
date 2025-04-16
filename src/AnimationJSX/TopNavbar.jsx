import React from 'react'

import { FaWhatsapp, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

import '../AnimationSCSS/TopNavbar.scss';

const TopNavbar = () => {
  return (
    <div>
        {/* Upper Header - Contact & Social Media */}
      <div className="TopHeader">
        <div className="left">
          <Link to ="" className="contact-item">
            <FaWhatsapp className="icon whatsapp" />
          </Link>
          
          <Link to ="tel:+919354543989" className="contact-item">
            <MdPhone className="icon phone" /> +91 9958081770
          </Link>
          <Link to ="esmybis@gmail.com" className="contact-item">
            <MdEmail className="icon email" /> esmybiz@gmail.com
          </Link>
        </div>

        <div className="right social-icons">
          <Link to ="https://www.facebook.com/sushil.chaursiya.5"target='_black' className="icon facebook"><FaFacebookF /></Link>
          <Link to ="https://x.com/SushilRautk" className="icon twitter"target='_black'><FaTwitter /></Link>
          <Link to ="https://www.youtube.com/@codewithsushil" className="icon youtube"><FaYoutube /></Link>
          <Link to ="https://www.linkedin.com/in/mcasushil/" className="icon linkedin" target='_black'><FaLinkedinIn /></Link>
          <Link to ="https://www.instagram.com/er_sushil_chaurasia/?hl=en" className="icon instagram"target='_black'><FaInstagram /></Link>
        </div>
      </div>
        
    </div>
  )
}

export default TopNavbar