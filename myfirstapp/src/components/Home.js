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
 
     <div className="image"> <img src="https://lp-cms-production.imgix.net/image_browser/Train_crossing_bridge_sri_lanka_s.jpg?auto=format&fit=crop&q=40&sharp=10&vib=20&ixlib=react-8.6.4" alt="" /> </div>

     <br />

     <div className="facilities">

     <div className="row">


     <div className="col-3">

<div className="card">

  <div className="card-body">
  <img src="https://alliedassociates.ca/wp-content/uploads/personal.png" alt="" />
  </div>

  <div className="card-footer"> 100% Succesfull  <br /> live Booking</div>

</div>

</div>


 <div className="col-3">

<div className="card">

  <div className="card-body">
    <img src="https://th.bing.com/th/id/OIP.9ospYbVwHHQSZmvH_-ZuXQHaHa?pid=ImgDet&w=512&h=512&rs=1" alt="" />
  </div>

  <div className="card-footer"> 100% Succesfull  <br /> live Booking</div>

</div>

</div>



<div className="col-3">

      <div className="card">
        <div className="card-body">
        <img src="https://th.bing.com/th/id/OIP.k5asR_dRJ_RGIYhHQe4k_QHaHa?pid=ImgDet&w=512&h=512&rs=1" alt="" />
        </div>

        <div className="card-footer"> Payment <br /> Security</div>
      </div>

      </div>




      <div className="col-3">

      <div className="card">
        <div className="card-body">
              <img src="https://th.bing.com/th/id/R.6c477282d0c2d085ca8232658f80d78f?rik=UYsOaZ%2fvL42b6g&pid=ImgRaw&r=0" alt="" />
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

