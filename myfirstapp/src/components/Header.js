import React from 'react'
import './css files/header.css';
import { Link } from 'react-router-dom';



export default function Header() {
  return (
    <div>
<nav>
  <ul>
    <li> <Link to = "/" className='tt'> Home </Link> </li>
    <li> <Link to = "/Note" className='tt'> Notice</Link> </li>
    <li> <Link to = "/Galery" className='tt' >Gallery</Link> </li>
    <li> <Link to = "/ContactUs" className='tt'>Contact Us</Link> </li>
    <li> <Link to = "/About" className='tt'>About Us</Link> </li>
    <li> <Link to = "/login" className='tt'>Log In</Link> </li>
    <li> <Link to = "/signUp" className='tt'> Sign Up</Link> </li>
  </ul>
</nav>



</div>







  
  )
}
