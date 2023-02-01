import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footerDiv'>
      <div className='footerImage'></div>
      <div className='footerDiv2'>
         <div className='divv1'>
           <img className='footerLego' src='https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/Realmaya_logo_greenRed-1.png' alt=''/>
           <p className='p-4'>Euismod mus taciti aenean praesent consectetuer platea ullamcorper consectetur.</p>
           <h3 className='h3-4'>Get News & Updates</h3>
           <div className='diiv'>
              <input className='input1' type='text' placeholder='Your email'/>
              <button className='btn-2'>SUBMIT</button>
           </div>
         </div>
         <div className='divv2'>
           <h2 className='h2-4'>More Info</h2>
           <h4 className='h4-4'>About Us</h4>
           <h4 className='h4-4'>Team</h4>
           <h4 className='h4-4'>Developer</h4>
           <h4 className='h4-4'>Our Store</h4>
         </div>
         <div className='divv3'>
           <h2 className='h2-4'>Support</h2>
           <h4 className='h4-4'>FAQs</h4>
           <h4 className='h4-4'>Shipping & Returns</h4>
           <h4 className='h4-4'>Contact Us</h4>
           <h4 className='h4-4'>Our Partners</h4>
         </div>
         <div className='divv4'>
           <h2 className='h2-4'>Reach Us</h2>
           <h4 className='h4-4'><i className="icon4 fa-solid fa-location-arrow"></i>Jln Cempaka Wangi No 22, Jakarta - Indonesia</h4>
           <h4 className='h4-4'><i className="icon4 fa-solid fa-phone-volume"></i>+6221.2002.2012</h4>
           <h4 className='h4-4'><i className="icon4 fa-solid fa-envelope"></i>hello@yourdomain.tld</h4>
         </div>
      </div>
      <div className='diiv2'>
        <a className='a-1'>Copyright © 2022 <em className='em-1'>Realmaya</em>, All rights reserved. Present by <em className='em-1'>MoxCreative</em></a>
        <div className='iconsDiv'>
          <i className="icon5 fa-brands fa-square-facebook"></i>
          <i className="icon5 fa-brands fa-square-twitter"></i>
          <i className="icon5 fa-brands fa-youtube"></i>
          <i className="icon5 fa-brands fa-twitch"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer