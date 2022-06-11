import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from "../assets/images/not-found.svg"

const Error = () => {
  return (
    <Wrapper className='full-page'>
    <div>
        <img src={img} alt="error" />
        <h3>Oh! Page not found</h3>
        <p>We can't find the page you're looking for</p>
        <Link to = "/">Back home</Link>
    </div>
    </Wrapper>
  )
}

export default Error