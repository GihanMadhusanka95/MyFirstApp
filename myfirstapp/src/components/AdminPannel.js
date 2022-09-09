import React from 'react'
import Header from './Header'
import './css files/Admin.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'



export default function AdminPannel() {
  return (
        <>

        <Header/>

        
        <div className="row">

             <div className="columnUp col-3">

                  <div className="row  ht ">
                    
                    12 <br />  AUG  <br /> 2022
                      
                  </div>

                     <br /> <br />

                  <div className="row ht">
                   
                   10 <br /> 30 <br /> A.M
                   

                  </div>
              
                       

             </div>

             <div className="col-4">
              <img className='hhj' src= "./images/LOGO.png" alt="logo" />
             </div>

           <div className="col-3 columnDo">
               
           <button type="button" class="btn btn-secondary btn-lg mt"> <Link to = "/notice" className='tt'> Notice</Link> </button>

           <br />
           <br />

           <button type="button" class="btn btn-secondary btn-lg mt"> <Link to = "/trainDetails" className='tt'> Train Details </Link>  </button>

           <br />
           <br />

           <button type="button" class="btn btn-secondary btn-lg mt"> <Link to = "/employeeManage" className='tt'> Employee Management </Link> </button>

           <br />
           <br />

           <button type="button" class="btn btn-secondary btn-lg mt"> <Link to = "/bookings" className='tt'> Bookings </Link>  </button>

           <br />
           <br />

           <button type="button" class="btn btn-secondary btn-lg mt"> <Link to = "/galery" className='tt'> Galery </Link>  </button>


           </div>



      </div> 
      
      <div className='forFooter'> 
      
      <Footer/>
       </div>
     

      
        </>
  )
}
