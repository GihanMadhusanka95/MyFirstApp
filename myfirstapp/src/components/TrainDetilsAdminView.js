import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './css files/TrainDetailsAdmin.css'

export default function TrainDetilsAdminView() {
  return (
      

    <>

    <div>
       
        <Header/>
       
    
    </div>
    
    <div><table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Train Name </th>
      <th scope="col">Startup Point</th>
      <th scope="col">End Point</th>
      <th scope="col">Startup Time</th>
      <th scope="col">Train Type</th>
      <th scope="col">Available </th>
      <th scope="col">Icons  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Udarata Manike </td>
      <td>Colombo</td>
      <td>Badulla</td>
      <td>8.30 A.M </td>
      <td>Express</td>
      <td>Available</td>
    </tr>
    <tr>
      
    </tr>

    <tr>
      
    </tr>

    <tr>
     
    </tr>
    <tr>
     
    </tr>
  </tbody>
</table></div>
    
    
    
    {/* <div className='kkn'>
        <Footer/>
    </div> */}
    
    </>
 

  )
}
