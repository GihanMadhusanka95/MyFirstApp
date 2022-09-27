import React from 'react'
import './css files/Feedback.css'
import Footer from './Footer'
import Header from './Header'
//import axios, { Axios } from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function UserProfile() {
 
     const [Users , setUsers] = useState([])

     useEffect(() => {
      axios.get('http://localhost:8000/users')
      .then(Response => {
         console.log(Response)
         setUsers(Response.data)
        })
     })
     .catch(Error =>{
      console.log(Error)
     })

   


  return (
      <>
         <div>
            <Header/>
         </div>
             
      <div className="row bba"> 
      
      <div className="col-3 bbb">

      <div>
     <ul class="list-group vn">
  <li class="list-group-item vm">Profile Information</li>
  <li class="list-group-item vm"> My Bookings</li>
  <li class="list-group-item vm"> My canselations</li>
  <li class="list-group-item vm">My payment Option </li>
  <li class="list-group-item vm"> Add Feedback </li>
</ul>
     </div>

      </div>

      <div className="col-7 bbc">

         <div className="container bbd">
                
                <h3>Profile Information</h3>
               

                <div className='dg'>
                    
               <h4>Full Name :</h4>  <h5> </h5>      <br />

               <h4> Contact Number : </h4>:  <h5> </h5>

                <h4> Email : </h4>  <h5> </h5>

                 <div>

                  
                 </div>

                </div>

         </div>


      </div>
      
      </div>
      
      
      
      <div className='jjk'>
        <Footer/>
      </div>
      
      </>
  )
}
