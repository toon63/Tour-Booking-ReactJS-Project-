import React from 'react'
import pic from './Pic/tiktoktour/hoQ4SNgr.jpeg'
import Footer from "./Footer";
export default function Customized() {
  return (
   <>
    <div className="wrapper" style={{paddingLeft:'10%',paddingRight:'10%'}}>
    {/* <h1 style={{padding:'20px'}}>Customized</h1> */}
    <div className="fillter" style={{width:"100%",height:'100%',padding:'20px',marginBottom:'40px',paddingTop:'100px'}}>
        <p style={{fontWeight:'bold',fontSize:'25px'}}>Bangkok Customized tour</p>
        <p style={{fontSize:'20px',textAlign:'left',display: 'flex',alignitems: "center",textAlign:' justify'}}><div className='letter' >We’re here to help you to customize your travel experiences in Bangkok and surrounding areas, tailored to your preferences and interests. For example, we can create the special tour where you can have a conversation with a monk and you can ask the monk any questions you may have about Buddhism and the monk life etc.
These tours will be designed to create a unique itinerary and offer a more intimate and authentic travel experience for you. You can let us know what your interests are and we will make it possible for you. 
</div>
</p>
<img
                style={{ width: "100%", height: "100%" }}
                src={pic}
                alt="First slide"
              /> 
              <p style={{fontWeight:'bold',color:'#1460EF',fontSize:'20px',marginTop:'50px'}}>
If you’d like us to customize the tour program for you, please send us your request through our email :</p>
<a href='Beyondthetrail2023@gmail.com'><p style={{fontWeight:'bold',color:'#1460EF',fontSize:'18px',}}>Beyondthetrail2023@gmail.com</p></a>
            
        </div>
      
        </div>
          <Footer/></>
   
  )
}
