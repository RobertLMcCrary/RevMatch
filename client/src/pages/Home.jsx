import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './pages.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {

    const navigate = useNavigate()

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="call-to-action">
                <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" className="cta-header">
                    <h1>Connect With Car Enthusiasts</h1>
                    <h4>Get in the fast lane of social networking for car guys!</h4>
                    <button onClick={() => { navigate('/register') }}>Join Now </button>
                </div>
                <img data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" src="./HomePageGT3.png" />
            </div>
        </div>
    )
}

export default Home