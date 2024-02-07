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
import bg from './Pic/bg.jpg'
import { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";



function Register() {
  const [validated, setValidated] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Redirect to the homepage or another route
      window.location.href = '/';
    }

    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  const titles = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Ms', label: 'Ms' },
    { value: 'Mrs', label: 'Mrs' },
  ];
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const password = form.elements.password.value;
      const confirmPassword = form.elements.confirmPassword.value;

      if (password !== confirmPassword) {
        // If passwords do not match, set validation to false
        setValidated(false);
        return;
      }

      try {
        // Extract form data
        const formData = {
          title: selectedTitle ? selectedTitle.value : null,
          fname: form.elements.fname.value,
          lname: form.elements.lname.value,
          email: form.elements.email.value,
          phone: form.elements.phone.value,
          password: password,
          passport_no: form.elements.passport_no.value,
          passport_exp: form.elements.passport_exp.value,
          birthdate: form.elements.birthdate.value,
          food_allergy: form.elements.foodAllergy.value,
          special_req: form.elements.specialRequirement.value,
          nationality: selectedCountry ? selectedCountry.value : null,
        };
        const response = await axios.post('https://tourapi-hazf.onrender.com/register', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // Handle the response as needed
        console.log('Registration successful:', response.data);
      } catch (error) {
        // Handle registration error
        console.error('Registration error:', error.response.data);
      }
    }
    
    setValidated(true);
};

  return (
      <div  className="bgregis" style={{backgroundImage:`url(${bg})`}} >
        {/* <Container style={{ marginBottom: "20px" }}> */}

      
       
          <Row> 
            <Col> 
            
              <div className="bgblur1" >
              <div
                    class=" text-center "
                    
                  >
                    <p className="fontregis">Register</p>
                  </div>
              {" "}
              <div class="border-bottom lh-1 py-3">
                {/* <div class="row flex-nowrap justify-content-between align-items-center">
                 
                </div> */}

          <Row >
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-4">
          <Form.Group style={{color:'black'}} as={Col} md="4" controlId="title">
             <Form.Label style={{color:'white'}}>Title</Form.Label>
           <Select
              options={titles}
              value={selectedTitle}
              onChange={(selectedOption) => setSelectedTitle(selectedOption)}
            />
          </Form.Group>
            <Form.Group as={Col} md="4" controlId="fname">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
               
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid First name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="lname">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
               
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Last name.
              </Form.Control.Feedback>
            </Form.Group>
           
         
          </Row>
          <Row className="mb-4" style={{marginBottom:'5px'}}>
          <Form.Group as={Col} md="8" controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="E-mail"
               
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="phone">
              <Form.Label>phone</Form.Label>
              <Form.Control type="phone" placeholder="Phone" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid phone.
              </Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row className="mb-4" style={{marginBottom:'5px'}}>
            <Form.Group as={Col} md="4" controlId="passport_no">
              <Form.Label>Passport Number</Form.Label>
              <Form.Control type="text" placeholder="Passport Number" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid passport number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="passport_exp">
            <Form.Label>Passport Expire</Form.Label>
              <Form.Control type="date" placeholder="Passport Expire" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Passport Expire.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group style={{color:'black'}} as={Col} md="4" controlId="nationality">
             <Form.Label style={{color:'white'}}>Nationality</Form.Label>
    
           <Select
              options={countries}
              value={selectedCountry}
              onChange={(selectedOption) => setSelectedCountry(selectedOption)}
            />
             

          </Form.Group>
          </Row>
          <Row className="mb-4">
           
           
          <Form.Group as={Col} md="4" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" placeholder="Password" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Password.
              </Form.Control.Feedback>
          
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="Password" placeholder="Confirm Password" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Confirm Password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="birthdate">
              <Form.Label>Birthdate</Form.Label>
              <Form.Control type="date" placeholder="Birthdate" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Birthdate.
              </Form.Control.Feedback>
            </Form.Group>
            </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="6" controlId="foodAllergy">
              <Form.Label>food allergy</Form.Label>
              <Form.Control type="text" placeholder="food allergy"/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid food allergy.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="specialRequirement">
              <Form.Label>special requirement</Form.Label>
              <Form.Control type="text" placeholder="special requirement"/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid special_requirement.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
           {/* <div className=" buttonlog" > */}
              <Button type="submit" className="submit">
                REGISTER
              </Button>
            {/* </div> */}
                   
        </Form>
               
                </Row>   
                 </div>  
               
      <Button 
      className="loginbut"
      variant="secondary" href='Login' >
       LOGIN
      </Button>
      </div>
            </Col>
          </Row>
         
     
        {/* </Container> */}
      </div>
  );
}
export default Register;
