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

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Redirect to the homepage or another route
      window.location.href = '/';
    }
  }, []);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('https://tourapi-hazf.onrender.com/login', { email, password });
      // const response = await axios.post('http://localhost:3001/login', { email, password });
      const token = response.data.token;

      localStorage.setItem('token', token);

      console.log(token)

      // Redirect to the homepage or another route
      window.location.href = '/';
    } catch (error) {
      console.error('Error during login:', error.response.error);
      if (error.response && error.response.data && error.response.data.error) {
        // Set the error state with the error message from the backend
        setError(error.response.data.error);
      } else {
        setError('Internal server error');
      }
      } finally {
        setLoading(false); 
      }
    }


  return (
   

    <div class="bgregis" style={{backgroundImage:`url(${bg})`}}>
      {/* <Container style={{ marginBottom: "20px" }}> */}
  
        
            <div className="bgblur" >
       
              <div class="row flex-nowrap justify-content-between align-items-center">
                <div
                  class="col-12 text-center"
                  style={{
                   
                    marginBottom: "20px",
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <p style={{color:'white',fontWeight:'bold',fontSize:'45px'}}>LOGIN</p>
                </div>
              </div>

       
       
    
                <Form >
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="email"
                  >
                   
                      <Form.Label  style={{float:'left',color:'black'}}>
                      <p style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>Email</p>
                      </Form.Label>
                      <Form.Control type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
                    
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="password"
                  >
    
                      <Form.Label style={{float:'left',color:'black'}}>
                        <p  style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>password</p>
                      </Form.Label>
                      <Form.Control type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)}/>
                  </Form.Group>  
                  {loading ? (
            <div>Logging In...</div>
          ) : (
            <>{error && (
                          <div style={{ color: 'red', display:'inline-block',float:'left' }}>
                            {error}
                          </div>
                        )}
              <a href="forgot"><h4 style={{fontWeight:'bold',textDecoration:'underline',textAlign:"right"}} >Do you forgot password?</h4></a>
              
              <Button onClick={handleLogin} className='button'  size="sm" style={{width:'35%',fontSize:'20px',marginTop:'30px' ,fontFamily: 'Roboto Slab',fontWeight:'bold',backgroundColor:'#FDB000',borderColor:"black"}}>Sign In</Button>
            </>
          )}
                </Form>
        

          
  <div className=" buttonlog" >
  

    <Button href="/Register" className='button2' variant="secondary" size="sm" style={{fontSize:'20px', fontFamily: 'Roboto Slab',fontWeight:'bold'}}>
    Register
    </Button>
  </div></div>
          


      {/* </Container> */}
    </div>


  );
};
export default Login;