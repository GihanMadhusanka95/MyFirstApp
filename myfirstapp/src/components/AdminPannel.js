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


                <div className="card cc">
                     
                <div className="card-head">
                   <h2> 12 </h2>
                 </div>

                 <div className="card-body">
                   
                    <h3> AUG</h3>
                 </div>

                 <div className="card-footer">
                   <h4>2022</h4>
                 </div>
                    </div>
                       
                       <br />
                       <br />
                      


                  <div className="card cc ">
                 <div className="card-head">
                   <h2> 10 </h2>
                 </div>

                 <div className="card-body">
                   <h3> 30 </h3>
                 </div>

                 <div className="card-footer">
                   
                   <h4> A.M </h4>
                 </div>
                </div>


             </div>

             <div className="col-4">
              <img src="https://th.bing.com/th/id/R.7afaa77568df3b3270a693d6c28462e5?rik=WjpL0s8%2bPZ2oyA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-r0h1Ukb6tDA%2fU8U2XfvaS_I%2fAAAAAAAAC1E%2f6bo1gbBZYyg%2fs1600%2fLogo%2bAIA.png&ehk=h9fqd1jXyyyPRmr882w9JTaoD0UPrxLXMDPi8bCTAaQ%3d&risl=&pid=ImgRaw&r=0" alt="" />
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
