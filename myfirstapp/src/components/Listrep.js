import React from 'react'
import Header from './Header'
import './css files/Admin.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'



export default function Listrep() {
  return (
        <>

        <Header/>

        <div>

 

<Link to = "/Au" > <button className='btn btn-primary btn-lg  ggh'> User Report </button></Link>

<Link to = "/AT" > <button className='btn btn-primary btn-lg  ggh'> Employee Report </button></Link>

<Link to = "/AE" > <button className='btn btn-primary btn-lg  ggh'> Notice report </button></Link>

<Link to = "/AN" > <button className='btn btn-primary btn-lg  ggh'> Train Details Report </button></Link>


        </div>
   
      
      <div className='forFooter'> 
      
      <Footer/>
       </div>
     

      
        </>
  )
}
