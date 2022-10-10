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
    <li> <Link to = "/galery" className='tt' >Galery</Link> </li>
    <li> <Link to = "/ContactUs" className='tt'>Contact Us</Link> </li>
    <li> <Link to = "/About" className='tt'>About Us</Link> </li>
    <li> <Link to = "/login" className='tt'>Login</Link> </li>
    <li> <Link to = "/profile" className='tt'> Profile </Link> </li>
  </ul>
</nav>



</div>







  
  )
}
