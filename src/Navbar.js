import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import App from "./App";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useEffect,useState } from "react";
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Profile from "./Profile";
import { MDBBtn } from 'mdb-react-ui-kit';
import { Margin } from "@mui/icons-material";
function NavbarComponent() {

  const [userID, setUserID] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userFname, setUserFname] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        // Split the token into its parts
        const [, payloadBase64,] = token.split('.');
        const decodedPayload = atob(payloadBase64);

        // Parse the decoded payload as JSON
        const { _id,fname,email,exp,expiresIn } = JSON.parse(decodedPayload);
        console.log(_id,fname,email,exp,expiresIn )
        document.cookie = `token=${token}; path=/; max-age=${expiresIn}; HttpOnly`;
        if (token) {
          try {
            const { exp } = JSON.parse(atob(token.split('.')[1]));
        
            if (exp * 1000 < Date.now()) {
              // Token expired, remove from localStorage
              localStorage.removeItem('token');
            }
          } catch (error) {
            console.error('Error parsing token:', error);
          }
        }

        setUserID(_id);
        setUserFname(fname.charAt(0).toUpperCase() + fname.slice(1));
        setUserEmail(email);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Error parsing token:', error);
      }
    }
  }, []);

  const handleLogout = async () => {
    try {
      // Clear the token and update the state
      localStorage.removeItem('token');
      setUserEmail('');
      setIsLoggedIn(false);
  
      // Call the server-side logout endpoint
      // const response = await axios.get('https://tourapi-hazf.onrender.com/logout');
      const response = await axios.get('http://localhost:3001/logout');
      
      // Handle response if needed (e.g., redirect to login page)
      console.log(response.data);  // Log the response data
  
      // Redirect to the homepage or another route
      
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle errors as needed
    }
    window.location.href = '/';
  };

  return (
    <div style={{ textAlign:"center"}}>
    

 <header class=" lh-1 py-3">
          <div class="justify-content-between align-items-center">
       <div className="namebeyornd">
       <a
                class="blog-header-logo text-body-emphasis text-decoration-none"
                href="#"
              >
              <h1 className="beyorn">BEYOND THE TRAILS</h1>  
              </a>
              </div>
            </div>
        </header>
          <Navbar expand="lg" class="row flex-nowrap justify-content-between align-items-center" collapseOnSelect style={{backgroundColor:"#063d8c"}}>
    
          <div class="col-3 "></div>
          <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto margin" >
             <Nav.Item id='first'>
                <Nav.Link id="fontnav" className='link' href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link id="fontnav" className='link' href="/About">About Us</Nav.Link>
              </Nav.Item>
      
   
              <NavDropdown  className='fontnav' title="Day Trips" id="fontnav" >
                <NavDropdown.Item eventKey="4.1" href="/Bangkok%20Grand%20Tour">Bangkok grand tour</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2" href="/Bangkok%20unseen%20Tour">bangkok unseen tour</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3" href="/Bkk%20Instagram%20TikTok%20Tour%20(For%20whose%20who%20love%20photos)">bkk Instargram/Tiktok</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4" href="/The%20ultimate%20of%20the%20floating%20market%20tour">The ultimate of the floating market</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4" href="/Half%20day%20floating%20market%20tour">Half day floating market</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4" href="/The%20sacred%20tattoo%20tour%20(Sakyant)">The sacred tattoo tour</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4" href="/Ayutthaya%20highlight%20tour">Ayutthaya highlight tour</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4" href="/The%20Scenic%20farm%20tour">The scenic farm tour</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4" href="/Cooking%20class">Cooking class</NavDropdown.Item>
              </NavDropdown>

              <Nav.Item>
                <Nav.Link id="fontnav" className='link' href="/Customized">Customized tour</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  id="fontnav" className='link'href="/Reviewall">
                  Review
                </Nav.Link>
              </Nav.Item>
              <NavDropdown  id="fontnav" className='fontnav' title="Language">
                <NavDropdown.Item eventKey="4.1">English 🇬🇧</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Zhōngguó 🇨🇳</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Deutsch 🇩🇪</NavDropdown.Item>
                
                <NavDropdown.Divider />
              
              </NavDropdown>
              
              {isLoggedIn ? (
              <><Nav.Item id="profilebtn">
                <MDBBtn outline href="Profile" color='secondary' style={{width:'120px',height:'40px',textAlign:'left',color:'white',backgroundColor:'black',textAlign:'center',marginRight:'15px',marginLeft:'15px',marginTop:'6px'}}>
                  <AccountCircleIcon style={{color:'white',fontSize:'20px'}}/>My Profile
                </MDBBtn>
                </Nav.Item>
                <Nav.Item>
                <Button
                  variant="danger"
                  className="logout"
                  style={{fontSize:'20px',fontWeight:'bold',fontFamily: "rpboto",marginTop:'5px' }}
                  onClick={handleLogout}
                >Logout</Button>
                </Nav.Item>
              </>
            ) : (
              <>
              <Nav.Item >
                <Link to="/register" class="btn btn-dark regis" >
                  Register
                </Link>
                <Link to="/login" class="btn btn-outline-dark login" >
                  Login
                </Link>
                </Nav.Item>
              </>
            )}
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      
          </div>
       
     
  );

}
export default NavbarComponent;

