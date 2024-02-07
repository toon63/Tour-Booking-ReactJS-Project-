import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

import grand1 from "./Pic/firstpage/grand1.jpg";
import grand2 from "./Pic/firstpage/grand2.jpg";
import grand5 from "./Pic/firstpage/grand5jpg.jpg";
import customized from "./Pic/firstpage/Customized.jpg";
import "./App.css";
import Customized from "./Pic/firstpage/Customized.jpg";
import outside1 from "./Pic/firstpage/outside1.jpg";
import outside2 from "./Pic/firstpage/outside2.jpg";
import outside3 from "./Pic/firstpage/outside3.jpg";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Footer from "./Footer";
import video from "./Video/Home.mp4";
import best from "./Pic/icon/best.svg";
import icon2 from "./Pic/icon/2.svg";
import icon3 from "./Pic/icon/3.svg";
import icon4 from "./Pic/icon/4.svg";
import Oneday from "./Oneday";
import logo from"./public/logo_1.png"

function Home() {
  const handleClick = event => {
    <Oneday/>
  };
  return (
    <div >
      <div
      className="fillterhome"
      >
        <video
          style={{width: "100%", objectFit: 'contain', objectPosition: 'bottom'}}
          src={video}
          autoPlay
          loop
          muted
        />
         {/* ------------------------------- layer 2 --------------------------- */}
         <div  className="layer2"
        >
          
          <img className='logo' style={{
            
          }}
            src={logo}>
          </img>
          <span className="expolre">
            Explore The Amazing
          </span>
          <span className='experiences'>
            experiences in Thailand<br />
          </span>

          
         
          <br />
   
      
      </div>
      </div>
      <div
        class=" lh-1 py-3 bgwhy"
        
      >
        <Container style={{ marginBottom: "25px" }}>
          <Row>
            <Col>
              <p
                className="why"
              >
                Why customers choose us
              </p>
            </Col>
          </Row>
          <Row md={4}>
            <Col style={{ textAlign: "center" }}>
              
              <FontAwesomeIcon icon={faStar} className='sizeicon' style={{color: "#fecb3e"}} />
              <p className="detailwhy">
                Best Private tour
              </p>
            </Col>
            <Col style={{ textAlign: "center" }}>
              
              <FontAwesomeIcon icon={faHeart} className='sizeicon' style={{color: "#ED5252"}} />
              <p className="detailwhy">
                Passionate service
              </p>{" "}
            </Col>
            <Col style={{ textAlign: "center" }}>
              
              <FontAwesomeIcon icon={faUser} className='sizeicon'style={{color: "#88D261"}} />
              <p className="detailwhy">
                {" "}
                Respect the locals culture & support localsr
              </p>{" "}
            </Col>

            <Col style={{ textAlign: "center" }}>
              
              <FontAwesomeIcon icon={faEarthAmericas} className='sizeicon' style={{color: "#3a88fe"}} />
              <p className="detailwhy">
                {" "}
                Multi languages tours
              </p>{" "}
            </Col>
          </Row>
        </Container>
      </div>

      <div className="ourtour">
        <Container>
          <div class="lh-1 py-3">
            <Row>
              <Col>
                <h1
                  className="our"
                >
                  Our Tours
                </h1>
              </Col>
            </Row>
            {/* ---------------------------------------------------------------------------------------------- */}
            <div className="carous1">
            <Stack direction="horizontal" gap={5} className="carousel">
              <a href="Oneday">
            <Carousel
                data-bs-theme="dark"
                className="menu1 carouselsize"
                
                 onClick={handleClick}
                 
              > 
                <Carousel.Item className="carouselitem">
                  <img 
                  style={{backgroundposition: 'bottom'}}
                    className="d-block w-100"
                    src={grand1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5
                       className="margintext"
                    >
                      1 DAT BKK CITY TOURS
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>
               
                <Carousel.Item className="carouselitem">
                  <img
                 style={{backgroundposition: 'bottom'}}
                    className="d-block w-100"
                    src={grand2}
                    alt="First slide"
                  />
                   <Carousel.Caption>
                    <h5
                       className="margintext"
                    >
                      1 DAT BKK CITY TOURS
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carouselitem">
                  <img
                   style={{backgroundposition: 'bottom'}}
                    className="d-block w-100"
                    src={grand5}
                    alt="First slide"
                  />
                    <Carousel.Caption>
                    <h5
                     className="margintext"
                    >
                      1 DAT BKK CITY TOURS
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              </a>
              <a href="Daytrip">
              <Carousel
                data-bs-theme="dark"
                className="menu1 carouselsize"
              
              >
                <Carousel.Item className="carouselitem">
                  <img
                   style={{backgroundposition: 'bottom'}}
                    className="d-block w-100 dayimg"
                    src={outside2}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5
                  className="marginh1 margintext1"
                    >
                      DAY TRIPS OUTSIDE BKK
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carouselitem">
                  <img
                   style={{backgroundposition: 'bottom'}}
                    className="d-block w-100 "
                    src={outside1}
                    alt="First slide"
                  />
                   <Carousel.Caption>
                    <h5
                      className="marginh2 margintext1"
                    >
                      DAY TRIPS OUTSIDE BKK
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carouselitem">
                  <img
                   style={{backgroundposition: 'bottom'}}
                    className="d-block w-100"
                    src={outside3}
                    alt="First slide"
                  />
                   <Carousel.Caption>
                    <h5
                      className="marginh3 margintext1"
                  
                    >
                      DAY TRIPS OUTSIDE BKK
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              </a>
              <a href="Customized">
              <Carousel
                data-bs-theme="dark"
                className="menu1 carouselsize"
               
              >
                <Carousel.Item className="carouselitem">
                  <img
                   style={{backgroundposition: 'bottom'}}
                    className="d-block w-100"
                    src={customized}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5
                      className="margintext1"
                  
                    >
                      CUSTOMIZED TOUR
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              </a>
            </Stack>
          </div>
        <div className="carous2">
        <Carousel>
        <Carousel.Item className="carouselitem">
                  <img 
                  style={{backgroundposition: 'bottom'}}
                    className="d-block w-100"
                    src={grand1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5
                      //  className="margintext"
                    >
                      1 DAT BKK CITY TOURS
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>
               
                <Carousel.Item className="carouselitem">
                  <img
                   style={{backgroundposition: 'bottom'}}
                    className="d-block w-100 dayimg"
                    src={outside2}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5
                  // className="marginh1 margintext1"
                    >
                      DAY TRIPS OUTSIDE BKK
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carouselitem">
                  <img
                   style={{backgroundposition: 'bottom',objectFit:'cover'}}
                    className="d-block w-100"
                    src={customized}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5
                      className="margintext1"
                  
                    >
                      CUSTOMIZED TOUR
                    </h5>
                  </Carousel.Caption>
                </Carousel.Item>
             
    </Carousel>
          </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
