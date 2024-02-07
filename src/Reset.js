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
import { useParams } from 'react-router-dom';

export const Reset = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  console.log(token)

  const handleResetPassword = async () => {
    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
  
      // Send a request to your backend to reset the password using Axios
      // const response = await axios.post('http://localhost:3001/reset_password', {
      const response = await axios.post('https://tourapi-hazf.onrender.com/reset_password', {
        token,
        password,
      });
  
      const data = response.data;
  
      if (response.status === 200) {
        // Reset successful, you might want to redirect the user to a login page or show a success message
        console.log(data.message);
      } else {
        // Reset failed, set an appropriate error message
        setError(data.message || 'Password reset failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Internal server error');
    }
  };
  return (
    <div class="bgregis" style={{backgroundImage:`url(${bg})`}}>
      {/* <Container style={{ marginBottom: "20px" }}> */}
  
        
            <div className="bgblur" style={{height:"600px"}}>
       
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
              <Form>
          <Form.Group as={Row} className="mb-3" controlId="newPassword">
            <Form.Label style={{ float: 'left', color: 'black' }}>
              <p style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', marginBottom: '-1px' }}>New password</p>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="confirmPassword">
            <Form.Label style={{ float: 'left', color: 'black' }}>
              <p style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', marginBottom: '-1px' }}>Confirm password</p>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            className="button"
            size="sm"
            style={{
              marginBottom: '-10px',
              width: '35%',
              fontSize: '20px',
              marginTop: '30px',
              fontFamily: 'Roboto Slab',
              fontWeight: 'bold',
              backgroundColor: '#FDB000',
              borderColor: 'black',
            }}
            onClick={handleResetPassword}
          >
            Done
          </Button>
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
export default Reset;