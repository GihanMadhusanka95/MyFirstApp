import React from 'react'
import './css files/Home.css'
import Header from './Header'
import Footer from './Footer'

export default function Home() {
  return (
    <>

    <Header/>
<div className='rootDiv row'>

    <div className="leftdiv col-3 ">
    
     <div>
     <ul class="list-group">
  <li class="list-group-item">View Shedule</li>
  <li class="list-group-item"> Ticket Booking</li>
  <li class="list-group-item">Cansel Ticket</li>
  <li class="list-group-item">Pay Online</li>
  <li class="list-group-item">Job Vacancy</li>
</ul>
     </div>


    </div>




    <div className="rightdiv col-9">
 
     <div className="image"> <img  className='ggs' src="https://lp-cms-production.imgix.net/image_browser/Train_crossing_bridge_sri_lanka_s.jpg?auto=format&fit=crop&q=40&sharp=10&vib=20&ixlib=react-8.6.4" alt="" /> </div>

     <br />

     <div className="facilities">

     <div className="row">


     <div className="col-3">

<div className="card">

  <div className="card-body">
  <img src="./images/Vector1.svg"  alt="" />
  </div>

  <div className="card-footer"> 100% Succesfull  <br /> live Booking</div>

</div>

</div>


 <div className="col-3">

<div className="card">

  <div className="card-body">
    <img src="./images/vector2.svg" alt="" />
  </div>

  <div className="card-footer"> 100% Succesfull  <br /> live Booking</div>

</div>

</div>



<div className="col-3">

      <div className="card">
        <div className="card-body">
        <img src="./images/vector3.svg" alt="" />
        </div>

        <div className="card-footer"> Payment <br /> Security</div>
      </div>

      </div>




      <div className="col-3">

      <div className="card">
        <div className="card-body">
              <img src="./images/vector4.svg" alt="" />
        </div>

        <div className="card-footer"> 24 Hours <br /> customer care </div>
      </div>

      </div>
     </div>
     </div>
    </div>
</div>
    
    
 <Footer/> 
    
    </>
  )
}

