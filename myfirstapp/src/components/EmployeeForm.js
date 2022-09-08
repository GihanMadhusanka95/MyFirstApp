import React from 'react'
import './css files/createNotice.css'
import Header from './Header'
import Footer from './Footer'
import './css files/EmployeeForm.css'
import { Link } from 'react-router-dom'

export default function EmployeeForm() {

 
  return (

     <>

   <div>
        <Header/>
     </div>      


            <div className="row ci">

                <div className="col-3"> 
                
                <div className="card">
                    
                    <div className="card-header">
                           
                           <h3>Job Title</h3>
                           
                    </div>

                    <div className="card-body">
                       
                    <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis dicta molestias velit eum voluptas ipsam voluptate enim quibusdam, commodi explicabo laboriosam recusandae provident eveniet, deserunt doloribus officia reiciendis. Quos.
                          </div>

                    </div>
                    <div className="card-footer">

                       <button class="btn btn-primary"> <Link to="/empApplication" className='jkl'> Apply  </Link> </button>

                    </div>


                    
                </div>
                
                
                </div>


                <div className="col-3"> 
                
                <div className="card">
                    
                    <div className="card-header">
 
                    <h3>Job Title</h3>
                    </div>

                    <div className="card-body">
                        
                    <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis dicta molestias velit eum voluptas ipsam voluptate enim quibusdam, commodi explicabo laboriosam recusandae provident eveniet, deserunt doloribus officia reiciendis. Quos.
                          </div>

                    </div>
                    <div className="card-footer">

                    <button class="btn btn-primary"> <Link to="/empApplication" className='jkl'> Apply  </Link> </button>


                    </div>


                    
                </div>
               
                
                </div>


                <div className="col-3"> 
                
                
                <div className="card">
                    
                    <div className="card-header">
                         
                    <h3>Job Title</h3>

                    </div>

                    <div className="card-body">
                         
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis dicta molestias velit eum voluptas ipsam voluptate enim quibusdam, commodi explicabo laboriosam recusandae provident eveniet, deserunt doloribus officia reiciendis. Quos.
                          </div>

                    </div>
                    <div className="card-footer">

                    <button class="btn btn-primary"> <Link to="/empApplication" className='jkl'> Apply  </Link> </button>


                    </div>


                    
                </div>
                
                </div>

                 
          </div>  


       <div className='fo'>
          <Footer/>   
       </div>

       </>
  )
}
