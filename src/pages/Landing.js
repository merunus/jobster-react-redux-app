import React from 'react'
import logo from "../assets/images/logo.svg"
import main from "../assets/images/main.svg"
import styled from "styled-components"
import Wrapper from "../assets/wrappers/LandingPage"
import { Logo } from "../components"
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>Job <span>tracking</span> app</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nam cum nihil tempore veritatis totam, consequuntur vel velit eum animi!</p>
                    <Link to = "/register" className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={main} alt="main" className='img main-img' />
            </div>
        </Wrapper>
    );
};




export default Landing;