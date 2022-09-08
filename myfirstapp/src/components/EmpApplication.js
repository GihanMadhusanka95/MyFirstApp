import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './css files/EmployeeApplication.css'

export default function EmpApplication() {
  return (
      <>
        
        <div>
            <Header/>
        </div>

        <div className=' appk'>

           <h3> Employee Application </h3> <br />
             
             <form action="">


               <label> Name  </label>
               <input type="text"  class="form-control"/> 

               <label> Date Of Birth  </label>
               <input type="text"class="form-control" />

               <label> Email   </label>
               <input type="text" class="form-control" />

               <label> Position  </label>
               <input type="text"  class="form-control"/>

               <label> Contact Number  </label>
               <input type="text"  class="form-control"/>

               <label> Address  </label>
               <input type="text"  class="form-control"/>   <br />

                <button class="btn btn-info"> Submit  </button>



             </form>
          </div>
      
      <div>
        <Footer/>
      </div>
      
      
      </>
  )
}
