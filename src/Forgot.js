import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Image } from "react-bootstrap";
import trip_outside from "./Pic/firstpage/trip_outside.jpg";
import button from "react-bootstrap";
import Register from "./Register.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import bg from './Pic/bg.jpg'
import axios from "axios";
import { useEffect } from "react";

export const Forgot = () => {
  const [email, setEmail] = useState("");

  const handleSendEmail = async () => {
    try {
      const response = await axios.post(
        "https://tourapi-hazf.onrender.com/forget_password",
        { email }
      );

      if (response.data.message === "Password reset email sent") {
        // Handle success, for example, show a success message or redirect
        console.log("Password reset email sent successfully");
      } else {
        // Handle any other response from the server
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      // Handle network errors or other unexpected errors
      console.error("Error:", error.message);
    }
  };

  return (
   

    <div class="bgregis" style={{backgroundImage:`url(${bg})`}}>
      {/* <Container style={{ marginBottom: "20px" }}> */}
  
        
            <div className="bgblur" style={{height:"500px"}} >
       
              <div class="row flex-nowrap justify-content-between align-items-center">
                <div
                  class="col-12 text-center"
                  style={{
                   
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <p style={{color:'white',fontWeight:'bold',fontSize:'45px'}}>Reset Password</p>
                </div>
              </div>

       
       
    
                <Form >
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="email"
                  >
                   
                      <Form.Label  style={{float:'left',color:'black'}}>
                      <p style={{color:'white',fontWeight:'bold',fontSize:'20px', marginBottom:'-1px'}}>Email</p>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    
                  </Form.Group>

               
                  <Button className='button'  size="sm" style={{marginBottom:'-10px',width:'35%',fontSize:'20px',marginTop:'30px' ,fontFamily: 'Roboto Slab',fontWeight:'bold',backgroundColor:'#FDB000',borderColor:"black"}} onClick={handleSendEmail}>Send Email</Button>
                </Form>
        

          
  <div className=" buttonlog" >
  

    <Button href="/Login" className='button2' variant="secondary" size="sm" style={{fontSize:'20px', fontFamily: 'Roboto Slab',fontWeight:'bold'}}>
  Login
    </Button>
  </div></div>
          


      {/* </Container> */}
    </div>


  );
};
export default Forgot;