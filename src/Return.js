import React, { useState, useEffect } from "react";
import { useNavigate,useLocation} from 'react-router-dom';
import axios from "axios";
import Alert from '@mui/material/Alert';

const Return = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    // Redirect to the homepage or another route
    window.location.href = '/login';
  }

  const location = useLocation();
  // const navigate = useNavigate();

  const [orderID, setOrderID] = useState('');
  
    useEffect(() => {
      setOrderID(location.state.order_id);
      console.log({"orderID":orderID});

      // axios.get(`http://localhost:3001/session-status?session_id=${sessionId}`)
      // // .get(`https://tourapi-hazf.onrender.com/session-status?session_id=${sessionId}`)
      // .then((response) => {
      //   const data = response.data;
      //   console.log(data);
      // })
      // .catch((error) => {
      //   console.error("Error fetching data:", error);
      // });
    }, []);
      return (
        <section id="success">
          <Alert severity="success" color="info" >
          <p className="fontreturn">
            We appreciate your business! Your order id is {orderID} A confirmation email will be sent to [Email].
  
            If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
          
        
              This is a success alert — check it out!
              </p>
            </Alert>
        </section>
      
      )}
export default Return;