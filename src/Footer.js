import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container"; 
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import tripadvisor from "./Pic/footer/tripadvisor.jpg";
import './App.css';
import Image from "react-bootstrap/Image";
function Footer() {
  return (
    <Form style={{ backgroundColor: "black", paddingTop: "25px" }}>
      <Container>
        <Row style={{ color: "white", textAlign: "left", fontSize: "20px", }}>
            
            <h1 className="beyond">
              Beyond the trails is operated by Tourism Authority of Thailand
              licensed No. 14/03750
            </h1>
            
          <Col >
            {/* <Form.Control placeholder="First name" /> */}
            
            <p style={{textAlign:'center',fontWeight:'bold'}}> Contact US :</p>
            <p className="textcontact"> Email: beyondthetrail2023@gmail.com</p>
            <p  className="textcontact"> Tel/whats App: +66897759912 +660909675287</p>
            <p className="textcontact"> Line ID : olyoil536982</p>
          </Col>
          <Col className="showfoot1">
            <p style={{textAlign:'center',fontWeight:'bold',marginBottom:'50px'}}>Follower US :</p>
           <a className="contact"> <FontAwesomeIcon icon={faInstagram} className="iconsize" style={{color: "#d357fe",float:'left'}} />
          </a>
          <a className="contact">
            <FontAwesomeIcon icon={faTiktok} className="iconsize" style={{color: "#e63b7a",float:'left'}} />
           </a>
           <a className="contact"> <FontAwesomeIcon icon={faFacebook} className="iconsize"  style={{color: "#0061ff",float:'left'}} />
             <Image
               className="iconsize2"
              src={tripadvisor}
              fluid
            /></a>
            {/* <p style={{float:'left',marginLeft:'80px',fontWeight:'bold',fontSize:'18px'}}>Instagram</p>
            <p style={{float:'left',marginLeft:'70px',fontWeight:'bold',fontSize:'18px'}}>Tiktok</p>
            <p style={{float:'left',marginLeft:'80px',fontWeight:'bold',fontSize:'18px'}}>Facebook</p>
            <p style={{float:'left',marginLeft:'60px',fontWeight:'bold',fontSize:'18px'}}>Tripadvisor</p> */}
          </Col>
        </Row>
       
        <Row>
        <Col className="showfoot2">
            <p style={{textAlign:'center',fontWeight:'bold',marginBottom:'50px'}}>Follower US :</p>
           <a className="contact"> <FontAwesomeIcon icon={faInstagram} className="iconsize" style={{color: "#d357fe",float:'left'}} />
          </a>
          <a className="contact">
            <FontAwesomeIcon icon={faTiktok} className="iconsize" style={{color: "#e63b7a",float:'left'}} />
           </a>
           <a className="contact"> <FontAwesomeIcon icon={faFacebook} className="iconsize"  style={{color: "#0061ff",float:'left'}} />
             <Image
               className="iconsize2"
              src={tripadvisor}
              fluid
            /></a>
           </Col>
          <footer class="pt-3 mt-4 border-top" style={{color:'white',marginBottom:'15px'}}>
            ©copyright 2023-all rights reserved
          </footer>
        </Row>
      </Container>
    </Form>
  );
}

export default Footer;
