import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import grand1 from './Pic/grandtour/grand1.jpg'
import grand2 from './Pic/grandtour/grand5jpg.jpg'
import grand3 from './Pic/grandtour/-86SWmN5.jpeg'
import grand4 from './Pic/grandtour/1AqWo8m6.jpeg'
import grand5 from './Pic/grandtour/C78X-Lc-.jpeg'
import unseen1 from './Pic/unseentour/8kF2b78O.jpeg'
import unseen2 from './Pic/unseentour/FY0eBCKH.jpeg'
import unseen3 from './Pic/unseentour/InD1O0dN.jpeg'
import unseen4 from './Pic/unseentour/RSYJH54h.jpeg'
import unseen5 from './Pic/unseentour/b4iW97E7.jpeg'
import ig1 from './Pic/tiktoktour/1Kc_vTa5.jpeg'
import ig2 from './Pic/tiktoktour/7KL1FVGE.jpeg'
import ig3 from './Pic/tiktoktour/hoQ4SNgr.jpeg'
import ig4 from './Pic/tiktoktour/ky638y2X.jpeg'
import ig5 from './Pic/tiktoktour/dyiZsG7c.jpeg'
import tattoo1 from './Pic/tattoo/501329.jpg'
import tattoo2 from './Pic/tattoo/496118.jpg'
import tattoo3 from './Pic/tattoo/501326.jpg'
import tattoo4 from './Pic/tattoo/501328.jpg'
import tattoo5 from './Pic/tattoo/488467.jpg'
import Button from 'react-bootstrap/Button';
import Tour1 from './Tour1'
import Footer from './Footer';
import { Hidden } from '@mui/material';
export default function Oneday() {
  return (
<>
    <div>
<h1 className='fonthead'>1 Day Bangkok city tour</h1>
<Container>
      <Row >
        <Col sm={8} >  <img
               className='grand1'
                src={grand1}
                alt="First slide"
              /></Col>
        <Col sm={3}>
            <div className='head1day'>
<h3>Bangkok Grand Tour
</h3>
            </div>
            <div className='detail1day'>
    <h2 style={{textAlign:'left'}}>Tour Price for Private tour (THAI BAHT)</h2>
    <h4 style={{textAlign:'left'}}>- for 2 people (if you have more people in your group or you are on your own, please contact us to check for the price)
</h4>
<h2 style={{textAlign:'left',color:'red'}}>Cancellation Policy</h2>
<h4 style={{textAlign:'left'}}>- Plans are subject to change, and sometimes unexpectedly, so you can cancel your event free of charge within 7 days before the tour starts.
</h4>
<h2 style={{color:"#063d8c",fontSize:'30px',marginTop:'30px'}}>-8,820 BHT</h2>
<Button href="Tour1" style={{marginTop:'10px'}} variant="primary" size="lg" active>
        See More
      </Button>{' '}
    </div>
        </Col>
      </Row>
     
    </Container>

      <Row md={4} >
        <Col >  <img
        className='imgall'
                src={grand5}
                alt="First slide"
              /></Col>
        <Col ><img
        className='imgall'
                src={grand2}
                alt="First slide"
              /></Col>
        <Col><img
        className='imgall'
                src={grand3}
                alt="First slide"
              /></Col>
        <Col><img
        className='imgall'
                src={grand4}
                alt="First slide"
              /></Col>
      </Row>

    </div>
    {/* -------------------------------------------------------------------------------------------------------- */}
     <div className='bgoneday'>
     <Container>
           <Row >
             <Col sm={8} >  <img
                     style={{ width: "100%", height: "60vh" }}
                     src={unseen2}
                     alt="First slide"
                   /></Col>
             <Col sm={3}>
                 <div className='head1day'>
     <h3>Bangkok unseen Tour
     </h3>
                 </div>
                 <div className='detail1day'>
         <h2 style={{textAlign:'left'}}>Tour Price for Private tour (THAI BAHT)</h2>
         <h4 style={{textAlign:'left'}}>- for 2 people (if you have more people in your group or you are on your own, please contact us to check for the price)

     </h4>
     <h2 style={{textAlign:'left',color:'red'}}>Cancellation Policy</h2>
     <h4 style={{textAlign:'left'}}>- Plans are subject to change, and sometimes unexpectedly, so you can cancel your event free of charge within 7 days before the tour starts.

     </h4>
     <h2 style={{color:"#063d8c",fontSize:'30px',marginTop:'30px'}}>-6,832 BHT</h2>
     <Button href="Grandtour" style={{marginTop:'10px'}} variant="primary" size="lg" active>
             See More
           </Button>{' '}
         </div>
             </Col>
           </Row>
          
         </Container>
     
           <Row md={4} >
             <Col >  <img
             className='imgall'
                     src={unseen1}
                     alt="First slide"
                   /></Col>
             <Col ><img
             className='imgall'
                     src={unseen3}
                     alt="First slide"
                   /></Col>
             <Col><img
             className='imgall'
                     src={unseen4}
                     alt="First slide"
                   /></Col>
             <Col><img
             className='imgall'
                     src={unseen5}
                     alt="First slide"
                   /></Col>
           </Row>
     
         </div>
          {/* -------------------------------------------------------------------------------------------------------- */}
     <div style={{marginTop:'30px'}}>
     <Container>
           <Row >
             <Col sm={8} >  <img
                     style={{ width: "100%", height: "60vh" }}
                     src={ig3}
                     alt="First slide"
                   /></Col>
             <Col sm={3}>
                 <div className='head1day'>
     <h3>BKK Instargram/Tiktok

     </h3>
                 </div>
                 <div className='detail1day'>
         <h2 style={{textAlign:'left'}}>Tour Price for Private tour (THAI BAHT)</h2>
         <h4 style={{textAlign:'left'}}>- for 2 people (if you have more people in your group or you are on your own, please contact us to check for the price)
     </h4>
     <h2 style={{textAlign:'left',color:'red'}}>Cancellation Policy</h2>
     <h4 style={{textAlign:'left'}}>- Plans are subject to change, and sometimes unexpectedly, so you can cancel your event free of charge within 7 days before the tour starts.

     </h4>
     <h2 style={{color:"#063d8c",fontSize:'30px',marginTop:'30px'}}>-8,100 BHT</h2>
     <Button href="Grandtour" style={{marginTop:'10px'}} variant="primary" size="lg" active>
             See More
           </Button>{' '}
         </div>
             </Col>
           </Row>
          
         </Container>
     
           <Row md={4} >
             <Col >  <img
             className='imgall'
                     src={ig2}
                     alt="First slide"
                   /></Col>
             <Col ><img
             className='imgall'
                     src={ig1}
                     alt="First slide"
                   /></Col>
             <Col><img
             className='imgall'
                     src={ig4}
                     alt="First slide"
                   /></Col>
             <Col><img
             className='imgall'
                     src={ig5}
                     alt="First slide"
                   /></Col>
           </Row>
     
         </div>
           {/* -------------------------------------------------------------------------------------------------------- */}
     <div className='bgoneday'>
     <Container>
           <Row >
             <Col sm={8} >  <img
                     style={{ width: "100%", height: "60vh" }}
                     src={tattoo1}
                     alt="First slide"
                   /></Col>
             <Col sm={3}>
                 <div className='head1day'>
     <h3>The sacred tattoo tour

     </h3>
                 </div>
                 <div className='detail1day'>
         <h2 style={{textAlign:'left'}}>Tour Price for Private tour (THAI BAHT)</h2>
         <h4 style={{textAlign:'left'}}>- for 2 people (if you have more people in your group or you are on your own, please contact us to check for the price)
     </h4>
     <h4 style={{textAlign:'left'}}> - Please note that The price of this tour is not included with the Sak Yant tattoo that you will receive. The price of Sakyant starts from 3,500 BHT depends on the pattern that we choose
</h4>
     <h2 style={{textAlign:'left',color:'red'}}>Cancellation Policy</h2>
     <h4 style={{textAlign:'left'}}>- Plans are subject to change, and sometimes unexpectedly, so you can cancel your event free of charge within 7 days before the tour starts.

     </h4>
     <h2 style={{color:"#063d8c",fontSize:'30px',marginTop:'-15px'}}>-4,000 BHT</h2>
     <Button href="Grandtour" style={{marginTop:'5px'}} variant="primary" size="lg" active>
             See More
           </Button>{' '}
         </div>
             </Col>
           </Row>
          
         </Container>
     
           <Row md={4} >
             <Col style={{overflow:'Hidden',marginTop:'30px',height:'200px'}}>  <img
             className='imgall'
                     src={tattoo2}
                     style={{marginTop:'-70px',height:'300px'}}
                     alt="First slide"
                   /></Col>
             <Col style={{overflow:'Hidden',marginTop:'30px',height:'200px'}}><img
             className='imgall'
                     src={tattoo3}
                     alt="First slide"
                     style={{marginTop:'-70px',height:'370px'}}
                   /></Col>
             <Col><img
             className='imgall'
                     src={tattoo4}
                     alt="First slide"
                   /></Col>
             <Col><img
             className='imgall'
                     src={tattoo5}
                     alt="First slide"
                   /></Col>
           </Row>
     
         </div>
         <Footer/>
         </>

  )
}
