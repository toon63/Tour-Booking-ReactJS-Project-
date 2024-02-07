import React from 'react';
import { useEffect,useState } from "react";
import axios from 'axios';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit'
import { Button } from 'react-bootstrap';

export default function Editpro() {
  const [editedProfile, setEditedProfile] = useState({
    title: '',
    fname: '',
    lname: '',
    email:'',
    passport_no: '',
    passport_exp: '',
    phone: '',
    birthdate: '',
    food_allergy: '',
    special: ''
  });

  const token = localStorage.getItem('token');
  if (!token) {
    // Redirect to the homepage or another route
    window.location.href = '/login';
  }

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const [, payloadBase64,] = token.split('.');
        const decodedPayload = atob(payloadBase64);
        const { _id } = JSON.parse(decodedPayload);

        const fetchUserProfile = async () => {
          try {
            // const response = await axios.get(`https://tourapi-hazf.onrender.com/profile/${_id}`);
            const response = await axios.get(`https://tourapi-hazf.onrender.com/profile/${_id}`);
            const userProfile = response.data;
            setEditedProfile(userProfile);
          } catch (error) {
            console.error('Error fetching user profile:', error);
          }
        };

        fetchUserProfile();
      } catch (error) {
        console.error('Error updating user profile:', error);
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({
      ...editedProfile,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const [, payloadBase64,] = token.split('.');
        const decodedPayload = atob(payloadBase64);
        const { _id } = JSON.parse(decodedPayload);

        // const response = await axios.put(`https://tourapi-hazf.onrender.com/editUserProfile/${_id}`, editedProfile);
        const response = await axios.put(`https://tourapi-hazf.onrender.com/editUserProfile/${_id}`, editedProfile);
        // const response = await axios.put(`http://localhost:3001/editUserProfile/${_id}`, editedProfile);

        console.log('User profile updated:', response.data);
        window.location.href = '/Profile';
        // You can handle success, e.g., show a success message or redirect the user
      } catch (error) {
        console.error('Error updating user profile:', error);
        // Handle error, e.g., show an error message
      }
    }
  };

  return (
    <section style={{ backgroundColor: '#eee'}}>
      <form onSubmit={handleFormSubmit}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  {/* Add your form input fields here */}
                  <MDBRow className="mb-3">
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        id="formControlLg"
                        type="text"
                        size="lg"
                        style={{color:'black'}}
                        name="email"  // Add the correct name attribute
                        value={editedProfile.email}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <MDBCol sm="3">
                      <MDBCardText>Title Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    <select
                      id="title"
                      name="title"
                      value={editedProfile.title}
                      onChange={handleInputChange}
                    >
                      <option value="Mr">Mr</option>
                      <option value="Ms">Ms</option>
                      <option value="Mrs">Mrs</option>
                    </select>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <MDBCol sm="3">
                      <MDBCardText>First Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        id="formControlLg"
                        type="text"
                        size="lg"
                        name="fname"  // Add the correct name attribute
                        value={editedProfile.fname}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>
                  {/* Repeat similar code for other input fields */}
                  <MDBRow className="mb-3">
                    <MDBCol sm="3">
                      <MDBCardText>Last Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        id="formControlLg"
                        type="text"
                        size="lg"
                        name="lname"  // Add the correct name attribute
                        value={editedProfile.lname}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <MDBCol sm="3">
                      <MDBCardText>Passport Number</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        id="formControlLg"
                        type="text"
                        size="lg"
                        name="passport_no"  // Add the correct name attribute
                        value={editedProfile.passport_no}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <MDBCol sm="3">
                      <MDBCardText>Passport Expire</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        id="formControlLg"
                        type="date"
                        size="lg"
                        name="passport_exp"  // Add the correct name attribute
                        value={editedProfile.passport_exp}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <MDBCol sm="3">
                      <MDBCardText>Birthdate</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        id="formControlLg"
                        type="date"
                        size="lg"
                        name="birthdate"
                        value={editedProfile.birthdate}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        id="formControlLg"
                        type="text"
                        size="lg"
                        name="phone"  // Add the correct name attribute
                        value={editedProfile.phone}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <MDBCol sm="3">
                      <MDBCardText>Food Allergy</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        id="formControlLg"
                        type="text"
                        size="lg"
                        name="food_allergy"  // Add the correct name attribute
                        value={editedProfile.food_allergy}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <MDBCol sm="3">
                      <MDBCardText>Special Requirement</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        id="formControlLg"
                        type="text"
                        size="lg"
                        name="special_req"  // Add the correct name attribute
                        value={editedProfile.special_req}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn type="submit">Confirm</MDBBtn>
                    <Button className="ms-1" variant="outline-primary" href="Profile">
                      Cancel
                    </Button>{' '}
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </form>
    </section>
  );
}