import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './css files/trainDforms.css'

export default function TrainDetailsForm() {
  return (
    <>
    
    <div> <Header/> </div>
    
    <div className='td'> </div>
         
    <form  className='frm' action="">  <br />

     <label className='lab'> Train Name :</label>
     <input className='ip form-control'  type="text" />

     <label className='lab'> Train Type : </label>
     <input className='ip form-control' type="text" />

     <label className='lab'> Day : </label>
     <input  className='ip form-control' type="text" />

     <label className='lab'> Start Point :</label>
     <input className='ip form-control' type="text" />


     <label className='lab'> End Point : </label>
     <input className='ip form-control' type="text" />


     <label className='lab'> Startup Time : </label>
     <input className='ip form-control' type="text" />


     </form>
     
    <div className='fu'> 
        <Footer/>
    </div>
    
    </>
  )
}
