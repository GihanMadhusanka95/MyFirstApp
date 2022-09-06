import React from 'react'
import './css files/Feedback.css'
import './css files/Register.css'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'


export default function Register() {
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

                      <label className='jj'> Full Name  </label>
                      <input className='ip form-control bn' type="text" /> 

                      <br />

                      <label className='jj'> Contact Number  </label>
                      <input className='ip form-control bn ' type="text" />

                      <br />

                      <label className='jj'> Email </label>
                      <input className='ip form-control bn ' type="text" />

                      <br />

                      <label className='jj'> Password </label>
                      <input className='ip form-control bn ' type="text" />

                      <br />

                     

                      <input className='hh' type="Register" />

                      <br />

                     

                      


                    </form>
                </div>

         </div>


      </div>
      
      </div>
      
      
      
      <div className='llk'>
        <Footer/>
      </div>
      
      </>
  )
}
