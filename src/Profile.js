import React from 'react';
import { useEffect,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Editpro from './Editpro';
// import { Button } from 'react-bootstrap';
import Button from '@mui/joy/Button';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';

import { CardActionArea} from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import CardActions from '@mui/joy/CardActions';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Switch from '@mui/joy/Switch';
import {
  MDBTypography,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  p,
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
export default function Profile() {
 
  const navigate = useNavigate();
  
   
  const [profileDetail, setprofileDetail] = useState({
    p_title: '',
    p_firstname: '',
    p_lastname: '',
    p_phone: '',
    p_nation: '',
    p_birth: '',
    p_passport: '',
    p_passport_exp: '',
    p_food_allergy: '',
    p_special: ''
  });
  const [pastorders, setPastOrders] = useState({});
  const [futureorders, setFutureOrders] = useState({});

  const [formatorderdate, setformatorderdate] = useState('');
  const [formattourdate, setformattourdate] = useState('');

  const token = localStorage.getItem('token');
  if (!token) {
    // Redirect to the /page or another route
    window.location.href = '/login';
  }

  useEffect(() => {
    
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

        axios.get('https://tourapi-hazf.onrender.com/profile/'+_id)
        .then(response => {
          const data = response.data;
          const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          const BirthDate = new Date(data.birthdate);
          const PassportExpDate = new Date(data.passport_exp);
          const formattedBirthDate = BirthDate.toLocaleDateString('en-US', options);
          const formattedPassportExpDate = PassportExpDate.toLocaleDateString('en-US', options);
  
          setprofileDetail({
            p_id:data._id,
            p_email:data.email,
            p_title:data.title,
            p_firstname:data.fname.charAt(0).toUpperCase() + data.fname.slice(1),
            p_lastname: data.lname.charAt(0).toUpperCase() + data.lname.slice(1),
            p_phone: data.phone,
            p_nation: data.nationality,
            p_birth: formattedBirthDate,
            p_passport: data.passport_no,
            p_passport_exp: formattedPassportExpDate,
            p_food_allergy: data.food_allergy,
            p_special: data.special_req
          })
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

        const fetchOrder = async () => {
          try {
            const pastordersResponse = await axios.get(`https://tourapi-hazf.onrender.com/getuserpastorder/${_id}`);
            // const pastordersResponse = await axios.get(`http://localhost:3001/getuserpastorder/${_id}`);

            // Check if pastOrders property exists and is an array
            if (!pastordersResponse.data || !Array.isArray(pastordersResponse.data.pastOrders)) {
              console.error('Error fetching past orders: Response data is not as expected');
              return;
            }

            const pastordersData = await Promise.all(
              pastordersResponse.data.pastOrders.map(async (order) => {
                // Fetch additional information related to the tour
                const tourResponse = await axios.get(`https://tourapi-hazf.onrender.com/tourinfoid/${order.tour_id}`);
                const tourData = tourResponse.data;

                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

                // Format tour_date
                const tourDate = new Date(order.tour_date);
                const formattedTourDate = tourDate.toLocaleDateString('en-US', options);

                // Format createdAt
                const createdAtDate = new Date(order.createdAt);
                const formattedCreatedAt = createdAtDate.toLocaleDateString('en-US', options);

                return {
                  ...order,
                  tour_image: tourData.tour_image, // Assuming tour_image is a field in the Tour model
                  formattedTourDate,
                  formattedCreatedAt,
                };
              })
            );

            // const futureordersResponse = await axios.get(`http://localhost:3001/getuserfutureorder/${_id}`);
            const futureordersResponse = await axios.get(`https://tourapi-hazf.onrender.com/getuserfutureorder/${_id}`);
            
            if (!futureordersResponse.data || !Array.isArray(futureordersResponse.data.futureOrders)) {
              console.error('Error fetching past orders: Response data is not as expected');
              return;
            }

            const futureordersData = await Promise.all(
              futureordersResponse.data.futureOrders.map(async (order) => {
                // Fetch additional information related to the tour
                const tourResponse = await axios.get(`https://tourapi-hazf.onrender.com/tourinfoid/${order.tour_id}`);
                const tourData = tourResponse.data;
        
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
                // Format tour_date
                const tourDate = new Date(order.tour_date);
                const formattedTourDate = tourDate.toLocaleDateString('en-US', options);
        
                // Format createdAt
                const createdAtDate = new Date(order.createdAt);
                const formattedCreatedAt = createdAtDate.toLocaleDateString('en-US', options);
        
                return {
                  ...order,
                  tour_image: tourData.tour_image, // Assuming tour_image is a field in the Tour model
                  formattedTourDate,
                  formattedCreatedAt,
                };
              })
            );
        
            setPastOrders(pastordersData);
            setFutureOrders(futureordersData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

          fetchOrder();
      } catch (error) {
        console.error('Error parsing token:', error);
      }
    }
  }, []);

      
  

  return (<section style={{ backgroundColor: '#eee' }}>
  <MDBContainer className="py-5">
    <MDBRow>
  
      <MDBCol lg="4">
        <MDBCard className="mb-4">
          <MDBCardBody className="text-center">
               <div style={{ width: '100%',textAlign:'center',marginTop:'80px'}}>
             
                           <MDBTypography tag="h1">{profileDetail.p_title} {profileDetail.p_firstname} {profileDetail.p_lastname}</MDBTypography>
                           < MDBCardText>{profileDetail.p_nation}</ MDBCardText> 
                           <Button onClick={()=> navigate('/Editpro')}>Edit profile</Button>
                            
                          </div>
          </MDBCardBody>
        </MDBCard>

        
     

      </MDBCol>
      <MDBCol lg="8">
        <MDBCard className="mb-4">
          <MDBCardBody>
            <MDBRow>
              <MDBCol sm="3">
               < MDBCardText className='prodetail'>Email :</ MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
               < MDBCardText className="text-muted prodetail3">{profileDetail.p_email}</ MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
               < MDBCardText className='prodetail'>Phone :</ MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
               < MDBCardText className="text-muted prodetail3"> {profileDetail.p_phone}</ MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
               < MDBCardText className='prodetail'>Birthdate :</ MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
               < MDBCardText className="text-muted prodetail3">{profileDetail.p_birth}</ MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
               < MDBCardText className='prodetail'>National : </ MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
               < MDBCardText className="text-muted prodetail3">{profileDetail.p_nation}</ MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
               < MDBCardText className='prodetail'>Passport Number :</ MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
               < MDBCardText className="text-muted prodetail3">{profileDetail.p_passport}</ MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
               < MDBCardText className='prodetail'>Passport Expire :</ MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
               < MDBCardText className="text-muted prodetail3">{profileDetail.p_passport_exp}</ MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
               < MDBCardText className='prodetail'>Food Allergy :</ MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
               < MDBCardText className="text-muted prodetail3">{profileDetail.p_food_allergy}</ MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
               < MDBCardText className='prodetail'>Requirement :</ MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
               < MDBCardText className="text-muted prodetail3">{profileDetail.p_special}</ MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
          </MDBCardBody>
        </MDBCard>

<>

  <Tabs
      variant="outlined"
      aria-label="Pricing plan"
      defaultValue={0}
      sx={{
      
        borderRadius: 'lg',
        boxShadow: 'sm',
        overflow: 'auto',
      }}
    >
      <TabList
        disableUnderline
        tabFlex={1}
        sx={{
          [`& .${tabClasses.root}`]: {
            fontSize: 'sm',
            fontWeight: 'lg',
            [`&[aria-selected="true"]`]: {
              color: 'primary.500',
              bgcolor: 'background.surface',
            },
            [`&.${tabClasses.focusVisible}`]: {
              outlineOffset: '-4px',
            },
          },
        }}
      >
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Current Order
        </Tab>
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
        Order History
        </Tab>
       
      </TabList>
     {Array.isArray(futureorders) && futureorders.length > 0 ? (
                         futureorders.map((order) => (
    
      <TabPanel value={0}>
        <Typography level="inherit">

        <Stack spacing={2} alignItems="center">
  
        <Card sx={{ display: 'flex' }} className='sizecard'>
       <div className='showpro1'><AspectRatio className='boximgor'>
        {/* <div > */}
                                <img src={order.tour_image} className='imgorder' alt="Tour"  />
                             {/* </div>   */}
                           
        </AspectRatio>  
      <Box sx={{ display: 'flex', flexDirection: 'column' }}> <Typography level="title-lg" component="div">
          {order.tour_name}
          </Typography>
        <CardContent sx={{ flex: '1 0 auto' }}>
       
          <Typography component="div" variant="h5">
            
          {/* <Typography level="body-md">  */}
                            < MDBCardText className="font-italic mb-1 prodetail1">Tour date: </ MDBCardText> < MDBCardText className="font-italic mb-1 prodetail2 date">{order.formattedTourDate}</ MDBCardText>
                             < MDBCardText className="font-italic mb-1 prodetail1">Tour price:</ MDBCardText> < MDBCardText className="font-italic mb-1 prodetail2">{order.tour_price}</ MDBCardText>
                             < MDBCardText className="font-italic mb-1 prodetail1">Person:</ MDBCardText> < MDBCardText className="font-italic mb-1 prodetail2"> {order.quantity}</ MDBCardText>
                            < MDBCardText className="font-italic mb-1 prodetail1">Total price: </ MDBCardText>< MDBCardText className="font-italic mb-1 prodetail2"> {order.total_price}</ MDBCardText>
                           
        
          
          {/* </Typography> */}
          <Typography level="body-xs" fontWeight={'bold'} ><div className='orderdate'>Order date:</div></Typography>
        <Typography level="body-xs" ><div className='orderdate'>{order.formattedCreatedAt}</div></Typography>
          <CardActions buttonFlex="none"className='positionbut'>
          
            <Button variant="solid" color="success"  size="sm" onClick={()=> navigate('/' + order.tour_name)}>
           Book Again
            </Button>
             
          </CardActions>
          </Typography>
        </CardContent>
    
      </Box>
      </div>
     <div className='showpro2'>
      <Card className='sizecard'>
      <CardActionArea>
      <AspectRatio className='boximgor'>
        {/* <div > */}
                                <img src={order.tour_image} className='imgorder' alt="Tour"  />
                             {/* </div>   */}
                           
        </AspectRatio>  
        <CardContent>
          
          <Typography variant="body2" color="text.secondary">
          < MDBCardText className="font-italic mb-1 prodetail1">Tour date: </ MDBCardText> < MDBCardText className="font-italic mb-1 prodetail2 date">{order.formattedTourDate}</ MDBCardText>
                             < MDBCardText className="font-italic mb-1 prodetail1">Tour price:</ MDBCardText> < MDBCardText className="font-italic mb-1 prodetail2">{order.tour_price}</ MDBCardText>
                             < MDBCardText className="font-italic mb-1 prodetail1">Person:</ MDBCardText> < MDBCardText className="font-italic mb-1 prodetail2"> {order.quantity}</ MDBCardText>
                            < MDBCardText className="font-italic mb-1 prodetail1">Total price: </ MDBCardText>< MDBCardText className="font-italic mb-1 prodetail2"> {order.total_price}</ MDBCardText>
                           
        
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography level="body-xs" fontWeight={'bold'} ><div className='orderdate'>Order date:</div></Typography>
        <Typography level="body-xs" ><div className='orderdate'>{order.formattedCreatedAt}</div></Typography>
      <CardActions buttonFlex="none"className='positionbut'>
          
          <Button variant="solid" color="success"  size="sm" onClick={()=> navigate('/' + order.tour_name)}>
         Book Again
          </Button>
           
        </CardActions>
      </CardActions>
    </Card>
</div>
  
    </Card>
     
    </Stack>
        </Typography>
        
      </TabPanel>
        ))
        ) : (
         < MDBCardText className="font-italic mb-0">{futureorders.message}</ MDBCardText>
        )}

{Array.isArray(pastorders) && pastorders.length > 0 ? (
                         pastorders.map((order) => (
      <TabPanel value={1}>
      
        <Typography level="inherit">

        <Stack spacing={2} alignItems="center">
      
        <Card sx={{ display: 'flex' }} className='sizecard'>
       <div className='showpro1'> 
        <AspectRatio className='boximgor'>
        {/* <div  */}
                                <img src={order.tour_image} alt="Tour" className='imgorder' />
                             {/* </div>   */}
                           
        </AspectRatio>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>  <Typography level="title-lg" component="div">
          {order.tour_name}
          </Typography>
        <CardContent sx={{ flex: '1 0 auto' }}>
      
          <Typography component="div" variant="h5">
            
                            < MDBCardText className="font-italic mb-1 prodetail1">Tour date: </ MDBCardText> < MDBCardText className="font-italic mb-1 prodetail2 date">{order.formattedTourDate}</ MDBCardText>
                             < MDBCardText className="font-italic mb-1 prodetail1">Tour price:</ MDBCardText> < MDBCardText className="font-italic mb-1 prodetail2">{order.tour_price}</ MDBCardText>
                             < MDBCardText className="font-italic mb-1 prodetail1">Person:</ MDBCardText> < MDBCardText className="font-italic mb-1 prodetail2"> {order.quantity}</ MDBCardText>
                            < MDBCardText className="font-italic mb-1 prodetail1">Total price: </ MDBCardText>< MDBCardText className="font-italic mb-1 prodetail2"> {order.total_price}</ MDBCardText>
                           
        
          
          </Typography>
       
          <Typography level="body-xs" fontWeight={'bold'} ><div className='orderdate'>Order date:</div></Typography>
        <Typography level="body-xs" >{order.formattedCreatedAt}</Typography>
        <CardActions buttonFlex="none"className='positionbut'>
            <Button variant="solid"  color="success" size="sm" onClick={()=> navigate('/' + order.tour_name)}>
              Book Again
            </Button>
             
          </CardActions>
        </CardContent>
    
      </Box>
   </div>

      <div className='showpro2'>
      <Card className='sizecard'>
      <CardActionArea>
      <AspectRatio className='boximgor'>
        {/* <div > */}
        <img src={order.tour_image} alt="Tour" className='imgorder' />
                             {/* </div>   */}
                           
        </AspectRatio>  
        <CardContent>
          
          <Typography variant="body2" color="text.secondary">
          < MDBCardText className="font-italic mb-1 prodetail1">Tour date: </ MDBCardText> < MDBCardText className="font-italic mb-1 prodetail2 date">{order.formattedTourDate}</ MDBCardText>
                             < MDBCardText className="font-italic mb-1 prodetail1">Tour price:</ MDBCardText> < MDBCardText className="font-italic mb-1 prodetail2">{order.tour_price}</ MDBCardText>
                             < MDBCardText className="font-italic mb-1 prodetail1">Person:</ MDBCardText> < MDBCardText className="font-italic mb-1 prodetail2"> {order.quantity}</ MDBCardText>
                            < MDBCardText className="font-italic mb-1 prodetail1">Total price: </ MDBCardText>< MDBCardText className="font-italic mb-1 prodetail2"> {order.total_price}</ MDBCardText>
                           
        
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography level="body-xs" fontWeight={'bold'} ><div className='orderdate'>Order date:</div></Typography>
        <Typography level="body-xs" ><div className='orderdate'>{order.formattedCreatedAt}</div></Typography>
      <CardActions buttonFlex="none" className='positionbut'>
    
          <Button variant="solid" color="success"  size="sm" onClick={()=>navigate('/' + order.tour_name)}>
         Book Again
          </Button>
           
        </CardActions>
      </CardActions>
    </Card>
</div>
    </Card>
    
    </Stack>
        </Typography>
      
      </TabPanel>
      ))
      ) : (
       < MDBCardText className="font-italic mb-0">{pastorders.message}</ MDBCardText>
      )}
      
    </Tabs>

  </>
  
    </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
  );
}