import React from "react";
import "./App.css";
import Footer from "./Footer";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Oneday from "./Oneday";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import unseen3 from "./Pic/unseentour/InD1O0dN.jpeg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
function Calendar() {

  const token = localStorage.getItem('token');
  if (!token) {
    // Redirect to the homepage or another route
    window.location.href = '/login';
  }

  const location = useLocation();
  const navigate = useNavigate();

  const [order_title, setorder_title] = useState('');
  const [order_userID, setorder_userID] = useState('');
  const [order_user_firstname, setorder_user_firstname] = useState('');
  const [order_user_lastname, setorder_user_lastname] = useState('');
  const [order_user_email, setorder_user_email] = useState('');
  const [order_tourID, setorder_tourID] = useState('');
  const [order_tour_name, setorder_tour_name] = useState('');
  const [order_tourprice, setorder_tourprice] = useState('');
  const [order_tourDate, setorder_tourDate] = useState('');
  const [order_quantity, setorder_quantity] = useState();
  const [order_totalprice, setorder_totalprice] = useState('');

  const userID = location.state.userID;
  const tourID = location.state.tourID;
  const price = order_tourprice;
  const tour_img = location.state.tourImage1;

  const [disabledDates, setDisabledDates] = useState([]);
  const [date, setDate] = useState(new Date());
  const [formattedorderdate, setformattedorderdate] = useState([]);

  useEffect(() => {
    const formattedSelectDate = dayjs(date).format('YYYY-MM-DD');
    setformattedorderdate(formattedSelectDate);
  }, [date]);

  useEffect(() => {
    const fetchClosedDates = async () => {
      try {
        // Fetch closed dates from the server
        // const response = await axios.post('http://localhost:3001/getclosedates',{tour_name:location.state.tourName});

        const response = await axios.post('https://tourapi-hazf.onrender.com/getclosedates',{tour_name:location.state.tourName});
        const closedDates = response.data.map((item) => dayjs(item.closed_date).format('YYYY-MM-DD'));

        // Set the array of disabled dates
        setDisabledDates(closedDates);
      } catch (error) {
        console.error('Error fetching closed dates:', error);
        // Handle error, e.g., set disabledDates to an empty array
        setDisabledDates([]);
      }
    };

    fetchClosedDates();
  }, []);

  const disableSpecificDates = (day) => {
    // Format the date to 'YYYY-MM-DD' string
    const formattedDate = dayjs(day).format('YYYY-MM-DD');

    // Get the current date
    const currentDate = dayjs().format('YYYY-MM-DD');
  
    // Check if the formatted date is before or equal to the current date
    return dayjs(day).isBefore(currentDate, 'day') || disabledDates.includes(formattedDate);
  };

  const [numberValue, setNumberValue] = useState(0);

const handleInputChange = (e) => {
    setNumberValue(e.target.value);
  };
 
  useEffect(() => { 
    const orderData ={
      user_id:userID,
      tour_id:tourID,
      quantity:numberValue,
      tour_date:formattedorderdate
    }
    axios
    // .post("http://localhost:3001/ordercalculate", orderData)
    .post("https://tourapi-hazf.onrender.com/ordercalculate", orderData)
    .then((response) => {
      setorder_title(response.data.title);
      setorder_userID(response.data.user_id);
      setorder_user_firstname(response.data.user_firstname);
      setorder_user_lastname(response.data.user_lastname);
      setorder_user_email(response.data.user_email);
      setorder_tourID(response.data.tour_id); 
      setorder_tour_name(response.data.tour_name);
      setorder_quantity(response.data.quantity); 
      setorder_tourDate(response.data.tour_date); 
      setorder_totalprice(response.data.total_price);
      setorder_tourprice(response.data.tour_price);
    })
    .catch((error) => console.error("Error fetching data:", error));
    console.log(orderData);
  }, [userID,tourID,formattedorderdate,numberValue, price]);
  
  const handleSubmit = async () => {
      navigate('/checkout', {
        state: {
          order_title,
          order_userID,
          order_user_firstname,
          order_user_lastname,
          order_user_email,
          order_tourID,
          order_tour_name,
          order_quantity,
          order_tourDate,
          order_totalprice,
          order_tourprice,
          tour_img
        }
      });
  };
  

  return (
    <>
      <div  className="bgcalen">
        
         
          <Container>
          <p
            style={{ fontSize: "25px", fontWeight: "bold", textAlign: "left" }}
          >
            {location.state.tourName}
          </p> 
        
          <Row>
            <Col >
              <div
               className="picright"
              >
                <img
          src={location.state.tourImage1}
          style={{ width: "100%", height: "100%" , objectFit: 'cover'}}
          alt="First slide"
        />
              </div>
            </Col>
            <Col>
            <Row>
             
              <div  className="picdown">
              <img
          src={location.state.tourImage2}
          style={{ width: "100%", height: "100%", objectFit: 'cover' }}
          alt="First slide"
        />
        </div>

<div  className="picdown">
<img
          src={location.state.tourImage3}
          style={{ width: "100%", height: "100%", objectFit: 'cover' }}
          alt="First slide"
        /></div>
        
            </Row>
            <Row>
             
              <div  className="pictop">
              <img
          src={location.state.tourImage4}
          style={{ width: "100%", height: "100%", objectFit: 'cover' }}
          alt="First slide"
        /></div>

<div  className="pictop">
          <img
          src={location.state.tourImage5}
          style={{ width: "100%", height: "100%", objectFit: 'cover' }}
          alt="First slide"
        /></div>
        
            </Row>
            </Col>
          </Row>

          <div
            style={{
              paddingTop: "50px",
            }}
            className="show1"
          >
            {/* <Row>
            
              <Col sm={8}> */}
                <div
                  className="filltercalen tourprice"
                  
                >
                  <h1
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    Tour Price for Private tour (THAI BAHT)

                  </h1>{" "}
            
                    <p class="pt-2 mt-2 border-top"
                      style={{
                        fontSize: "18px",
                        textAlign: "left",
                        overflow: "auto",
                        wordWrap: "break-word",
                      }}
                    >
                  {location.state.tourPriceDetail}
                    </p>
                 
                </div>
              <div >
{/*                 
              </Col>
              <Col sm={4}> */}
                <div
                  className="filltercalen1 book"
            
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Select Tour Date"
                    value={null}
                    shouldDisableDate={disableSpecificDates}
                    onChange={(newValue) => setDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  </LocalizationProvider>
                  <p  style={{ marginTop: '20px',fontWeight:'bold',textAlign:"left"}}>GUESTS<br></br>
        <input  type="number"
   
        value={numberValue}
        onChange={handleInputChange}
        className="input"
        min={'1'}
        max={'8'}
       /></p>
        <p style={{textAlign:'left',float:'left',fontWeight:'bold'}}>Price: <br></br>Total:</p>
        <p style={{textAlign:'left',float:'left',marginLeft:'35px'}}>{price}<br></br>{order_totalprice}</p>
          
        <Button type="submit"  value={numberValue} onClick={handleSubmit}  className="submitbook">RESERVE</Button>
                 
                
                </div>
              {/* </Col>
            </Row> */}
          </div> 
          <div
                  className="filltercalen tourprice1"
                  
                >
                  <h1
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    Cancellation Policy
                  </h1>{" "}
                 
                    <p class="pt-2 mt-2 border-top"
                      style={{
                        fontSize: "18px",
                        textAlign: "left",
                        overflow: "auto",
                        wordWrap: "break-word",
                      }}
                    >
                  {location.state.tourCancellation}
                    </p>
                  </div>
</div>
          <div
            style={{
              paddingTop: "50px",
            }}
            className="show2"
          >
            {/* <Row>
            
              <Col sm={8}> */}
                <div
                  className="filltercalen tourprice"
                  
                >
                  <h1
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    Tour Price for Private tour (THAI BAHT)

                  </h1>{" "}
            
                    <p class="pt-2 mt-2 border-top"
                      style={{
                        fontSize: "18px",
                        textAlign: "left",
                        overflow: "auto",
                        wordWrap: "break-word",
                      }}
                    >
                  {location.state.tourPriceDetail}
                    </p>
                 
                </div>
              

          
          <div
                  className="filltercalen tourprice1"
                  
                >
                  <h1
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    Cancellation Policy
                  </h1>{" "}
                 
                    <p class="pt-2 mt-2 border-top"
                      style={{
                        fontSize: "18px",
                        textAlign: "left",
                        overflow: "auto",
                        wordWrap: "break-word",
                      }}
                    >
                  {location.state.tourCancellation}
                    </p>
                  </div> 
                  <div
                  className="filltercalen1 book"
            
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Select Tour Date"
                    value={null}
                    shouldDisableDate={disableSpecificDates}
                    onChange={(newValue) => setDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  </LocalizationProvider>
                  <p  style={{ marginTop: '20px',fontWeight:'bold',textAlign:"left"}}>GUESTS<br></br>
        <input  type="number"
        value={numberValue}
        onChange={handleInputChange}
        className="input"
        min={'1'}
        max={'8'}
       /></p>

        <p style={{textAlign:'left',float:'left',fontWeight:'bold'}}>Price: <br></br>Total:</p>
        <p style={{textAlign:'right',float:'right'}}>{price}<br></br>{order_totalprice}</p>

        <Button type="submit"  value={numberValue} onClick={handleSubmit} className="submitbook" >RESERVE</Button>
               
                
                </div>
                  </div>
                
        </Container>


      </div>        <Footer />
    </>
  );
}

export default Calendar;
