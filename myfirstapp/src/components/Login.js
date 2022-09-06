import React from 'react'
import './css files/Feedback.css'
import './css files/Login.css'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'


export default function Login() {
  return (
      <>
         <div>
            <Header/>
         </div>
             
      <div className="row bba"> 
      
      <div className="col-3 bbb">

        <img src="./images/raf.svg" alt="" />
          

      </div>

      <div className="col-7 bbc">

         <div className="container bbd">
                
                <h3> Login </h3>
                

                <div className='dg'>
                    <form action="">

                      <label className='jj'> Email  </label>
                      <input className='ip form-control bn' type="text" /> 

                      <br />

                      <label className='jj'> Password </label>
                      <input className='ip form-control bn ' type="text" />

                      <input className='hh' type="submit" />

                      <br />

                      <h5> Don't have an eccount ?  <Link to = "/register"> Register </Link> </h5>

                      


                    </form>
                </div>

         </div>


      </div>
      
      </div>
      
      
      
      <div className='kkl'>
        <Footer/>
      </div>
      
      </>
  )
}
