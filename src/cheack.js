import React from 'react'
import  correct from './Pic/correct.png'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Col } from 'react-bootstrap';
import Row from "react-bootstrap/Row";

function cheack() {
  return (
   <>
        <div class="text-center filltercheack" >  
        <img className='logo' src={correct} style={{width:'20%',height:'20%',marginBottom:'20px'}}/>
          
            <p class="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
            <p class="text-gray-600 my-2"> Have a great day!  </p>
             <p className='detailcheack'>Name :</p><p className='detailcheack1'>Kannatthanan Biyaem</p>
            <p className='detailcheack'>Date :</p><p className='detailcheack1'>12/02/66</p>
            <p className='detailcheack'>Date :</p><p className='detailcheack1'>12/02/66</p>
            <p className='detailcheack'>Date :</p><p className='detailcheack1'>12/02/66</p>
          
           <MDBBtn style={{width:'300px'}}>Back To Home</MDBBtn>
       

        </div>
  
  </>
  )}

export default cheack