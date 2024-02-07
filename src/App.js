import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from "./Navbar";
import Register from './Register'
import Home from './Home'
import Login from './Login'
import Footer from './Footer';
import Oneday from './Oneday';
import About from './About';
import Customized from './Customized';
import Daytrip from './Daytrip';
import Tour1 from './Tour1'
import Calendar from './Calendar';
import Reviewall from './Reviewall';
// import Pay from './Pay';
import Return from './Return';
import CheckoutForm from './Checkout';
import Review1 from './Review1';
import Re from './re'
import Profile from './Profile';
import Cheack from './cheack';
import Editpro from './Editpro';
import Forgot from './Forgot';
import Reset from './Reset';

function App() {
  return (
        <div className="App">
          <BrowserRouter>
          <NavbarComponent fixed="top" />
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="/" element={<Re/>}/> */}
                <Route path="Register" element={<Register/>} />
                <Route path="Login" element={<Login/>} />
                <Route path="Footer" element={<Footer/>} />
                
                <Route path="Oneday" element={<Oneday/>} />
                <Route path="About" element={<About/>} />
                <Route path="Customized" element={<Customized/>} />
                <Route path="Daytrip" element={<Daytrip/>} />
                {/* <Route path="Tour1" element={<Tour1/>} /> */}
                <Route path="/:tour_name" element={<Tour1/>}/>
                {/* <Route path="Calendar/:_id" element={<Calendar/>}/> */}
                <Route path="/Calendar" element={<Calendar/>} />
                <Route path="Reviewall" element={<Reviewall/>} />
                {/* <Route path="Pay" element={<Pay/>} /> */}
                <Route path="/checkout" element={<CheckoutForm />} />
                <Route path="/return" element={<Return />} />
                <Route path="Review1/:tour_name" element={<Review1 />} />
                <Route path="Re" element={<Re />} />
                <Route path="Profile" element={<Profile />} />
                <Route path="Cheack" element={<Cheack />} />
                <Route path="Editpro" element={<Editpro />} />
                <Route path="Forgot" element={<Forgot />} />
                <Route path="Reset/:token" element={<Reset />} />
            </Routes>
          </BrowserRouter>
          
          
        </div>
      );
}

export default App