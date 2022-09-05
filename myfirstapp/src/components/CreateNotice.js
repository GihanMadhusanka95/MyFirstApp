import React from 'react'
import './css files/createNotice.css'
import Header from './Header'
import Footer from './Footer'

export default function CreateNotice() {

 
  return (

     <>

   <div>
        <Header/>
     </div>      
                              
              
                   <div className="formdiv">

                   <h2> Create Notice </h2>

                   <form action="">

                              
<label for="date">Date:</label>  <br /><input type="date" />
   
    <br />
    <br />
    <br />


<label for="notice">Notice:</label>  <br /> <textarea name="" id="" cols="60" rows="10"></textarea>
<br />
<input className='in' type="submit" />


</form>
</div>                  

       <div className='fo'>
          <Footer/>   
       </div>

       </>
  )
}
