
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from "react-bootstrap/Container";
import ImageGallery from "react-image-gallery";
import pic1 from "./Pic/grandtour/grand1.jpg";
import pic2 from "./Pic/grandtour/-86SWmN5.jpeg";
import pic3 from "./Pic/grandtour/1AqWo8m6.jpeg";
import pic4 from "./Pic/grandtour/C78X-Lc-.jpeg";
import pic5 from "./Pic/grandtour/Do0thfI0.jpeg";
import pic6 from "./Pic/grandtour/Poe2v9Q5.jpeg";
import pic9 from "./Pic/grandtour/apwv1J-2.jpeg";
import pic10 from "./Pic/grandtour/wat1.jpeg";
import "./App.css";
import { Navbar } from 'react-bootstrap';
import Footer from './Footer';
import Calendar from './Calendar'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { Carousel } from 'react-carousel-minimal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';

import Carousel from 'react-bootstrap/Carousel';

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
function Tour1() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    let { tour_name } = useParams(); 
    const [tourData, setTourData] = useState({}); // Initialize as an empty object
    const [userID, setUserID] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userFname, setUserFname] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [tourID, setTourID] = useState('');
    const [tourName, setTourName] = useState('');
    const [tourImage1, setTourImage1] = useState('');
    const [tourImage2, setTourImage2] = useState('');
    const [tourImage3, setTourImage3] = useState('');
    const [tourImage4, setTourImage4] = useState('');
    const [tourImage5, setTourImage5] = useState('');
    const [tourPriceDetail, setTourPriceDetail] = useState('');
    const [tourCancellation, setTourCancellation] = useState('');
    const [tourPrice, setTourPrice] = useState('');

    const [showContactMessage, setShowContactMessage] = useState(false);

    useEffect(() => {
      const fetchTourData = async () => {
        try {
          const URL = 'https://tourapi-hazf.onrender.com/tourinfo/'+tour_name; // Assuming fetching a specific tour
          // const URL = 'https://tourapi-hazf.onrender.com/tourinfo/'+tour_name;
          // console.log(URL);
          const response = await axios.get(URL);
          const data = response.data;
  
          // Assuming the API returns a single object for the tour data
          if (data && data.tour_name && data.tour_description&& data.tour_itinerary&& data.price_detail && data.tour_cancelpolicy && data.tour_image) {
            setTourData(data);
            setTourID(data._id);
            setTourName(data.tour_name);
            setTourImage1(data.tour_image[0]);
            setTourImage2(data.tour_image[1]);
            setTourImage3(data.tour_image[2]);
            setTourImage4(data.tour_image[3]);
            setTourImage5(data.tour_image[4]);
            setTourPriceDetail(data.price_detail)
            setTourPrice(data.price)
            setTourCancellation(data.tour_cancelpolicy)
          } else {
            console.error('Invalid data received:', data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      if (token != null) {
        try {
          // Split the token into its parts
          const [, payloadBase64,] = token.split('.');
          const decodedPayload = atob(payloadBase64);
  
          // Parse the decoded payload as JSON
          const { _id,fname,email } = JSON.parse(decodedPayload);
  
          setUserID(_id);
          setUserFname(fname);
          setUserEmail(email);
          setIsLoggedIn(true);
        } catch (error) {
          console.error('Error parsing token:', error);
        }
      }else{
        setIsLoggedIn(false);
      }
      fetchTourData();
    }, []);

    const images = (tourData.tour_image || []).map((imageUrl, index) => ({
      original: imageUrl,
      thumbnail: imageUrl,
    }));

    const captionStyle = {
      fontSize: '2em',
      fontWeight: 'bold',
    }
    const slideNumberStyle = {
      fontSize: '20px',
      fontWeight: 'bold',
    }
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const TourCarousel = () => {
      const [index, setIndex] = useState(0);
    
      const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      }};
      const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

return (
    <>
  
    

 <div style={{ marginBottom: "30px" }}>
          <div
           
         className='mar' >
        {/* <div style={{width:'100%',height:'400px',position: 'relative' }}> */}
          <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={1000}
        slideOnThumbnailOver={true}
        showIndex={true}
        fullscreen
        onPlay={() => {
          alert("slideshow is now playing!");
        }}    
        //  style={{ width: '100%', height: '100px', objectFit: 'cover'}}
        />
        

          </div>
 <Tabs
defaultActiveKey="description"
id="uncontrolled-tab-example"
className="tab"
data-bs-theme="dark"
>

<Tab eventKey="description" title="description"  style={{width:'100%'}} >
  <Card.Body className="cardgrand" style={{overflow:'auto',wordWrap:'break-word',backgroundColor:'#FFFAEC',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
   
    <Card.Title ><h1 className='titletour' >{tourData.tour_name}</h1></Card.Title>
    <Card.Text>
          <p className='texttour'>{tourData.tour_description}</p>
    </Card.Text>
   
  </Card.Body>
</Tab>
<Tab eventKey="Itinerary" title="Itinerary">
  <Card.Body className="cardgrand"  style={{backgroundColor:'#FFFAEC',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
      <Card.Title><h1 className='titletour'>Itinerary</h1></Card.Title>
      <Card.Text>
      <p className='texttour'>{tourData.tour_itinerary}</p>
      </Card.Text>
     
    </Card.Body>
</Tab>
<Tab eventKey="Price" title="Price">
<Card.Body className="cardgrand " style={{backgroundColor:'#FFFAEC',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
      <Card.Title> <h1 className='titletour' style={{wordWrap:'break-word',whiteSpace:'break-spaces'}} >Tour Price for Private tour (THAI BAHT)
</h1></Card.Title>
      <Card.Text>
      <p className='texttour'>{tourData.price_detail}</p>
      <Card.Title> <h1 className='titletour' >Cancelpolicy
</h1></Card.Title>
      <p className='texttour'>{tourData.tour_cancelpolicy}</p>
      </Card.Text>
     
    </Card.Body>
</Tab>

</Tabs>
{isLoggedIn ? (
  <>
    {tour_name === "The sacred tattoo tour (Sakyant)" ? (
    //   <Button
    //   variant="dark"
    //   style={{ marginRight: '15px', fontSize: '20px', fontWeight: 'bold', fontFamily: 'rpboto', marginTop: '20px' }}
    //   onClick={() => {setShowContactMessage(true);}}>
    //   Book now
    // </Button>
       <React.Fragment>
        <Button
        variant="dark"
        style={{ marginRight: '15px', fontSize: '20px', fontWeight: 'bold', fontFamily: 'rpboto', marginTop: '20px' }}
        onClick={() => {handleClickOpen(true);}}>
         
        Book now
      </Button>
       
       <Dialog
         open={open}
         onClose={handleClose}
         PaperComponent={PaperComponent}
         aria-labelledby="draggable-dialog-title"
       > <DialogActions>
           <Button autoFocus onClick={handleClose}>
            Done
           </Button>
           {/* <Button onClick={handleClose}>Subscribe</Button> */}
         </DialogActions>
         <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
         Attention
         </DialogTitle>
         <DialogContent>
           <DialogContentText>
           To book this tour. Please contact <h1 style={{fontSize:'16px',textDecoration:'underline',display:'inline-block',marginLeft:'5px',marginRight:'5px',color:'blue'}}>Beyondthetrail2023@gmail.com </h1>
           </DialogContentText>
         </DialogContent>
        
       </Dialog>
     </React.Fragment>
    
    ) : (
      <Button
        variant="dark"
        style={{ marginRight: '15px', fontSize: '20px', fontWeight: 'bold', fontFamily: 'rpboto', marginTop: '20px' }}
        onClick={() => {
          navigate('/Calendar', {replace: true, state: { userID, tourID, tourName, tourImage1, tourImage2, tourImage3, tourImage4, tourImage5, tourPriceDetail, tourCancellation, tourPrice }});
        }}>
        Book now
      </Button>
    )}
  </>
) : (
  <>
    {tour_name === "The sacred tattoo tour (Sakyant)" ? (
      
      <React.Fragment>
      <Button
        variant="dark"
        style={{ marginRight: '15px', fontSize: '20px', fontWeight: 'bold', fontFamily: 'rpboto', marginTop: '20px' }}
        onClick={() => {handleClickOpen(true);}}>
         
        Book now
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
   Attention
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          To book this tour please contact
         <h1 style={{fontSize:'16px',textDecoration:'underline',display:'inline-block',marginLeft:'5px',marginRight:'5px',color:'blue'}}>Beyondthetrail2023@gmail.com </h1> 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
          Done
          </Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
    ) : (
      <Button
        variant="dark"
        style={{ marginRight: '15px', fontSize: '20px', fontWeight: 'bold', fontFamily: 'rpboto', marginTop: '20px' }}
        onClick={() => {
          navigate('/Login');
        }}>
        Book now
      </Button>
    )}
    {/* <Link to="/login" class="btn btn-outline-dark" style={{ marginRight: '15px' , fontSize:'20px',fontWeight:'bold',fontFamily: "rpboto"}}>
      Book now
    </Link> */}
  </>
)}
<div>
 <p style={{fontSize: '25px', fontWeight: 'bold', fontFamily: 'rpboto', marginTop: '20px' , color:'white' , backgroundColor:'#063d8c'}}>
              {showContactMessage
                ? 'To book this tour please contact Beyondthetrail2023@gmail.com.'
                : null}
            </p>
</div>
</div>  
<Footer/>


</>
)}

export default Tour1;
