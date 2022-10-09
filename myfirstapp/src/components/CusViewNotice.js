import React, { useEffect, useState } from 'react'
import './css files/CusViewNotice.css'
import Header from './Header'
import Footer from './Footer'
import { Link } from "react-router-dom";
import axios from'axios'

export default function CusViewNotice() {
   

  const[Ndetails,setNdetails] = useState([]);

  useEffect(() => {
      axios.get(`http://localhost:8000/Notice`).then(res=> {
          setNdetails(res.data.existingNotice);
          console.log(res.data.existingNotice);
       

      })
          .catch(err => {
              console.log(err);
          })
  },[])

 const deleteMyEmployee =((id)=>{


 axios.delete(`http://localhost:8000/Notice/delete/${id}`).then((res)=>{
 alert("delete succesfull")
 });




 })

  return (

    <>

    {/* <div> <Header/> </div>
    
    <div className=" row "> 
    
    <div className="col-3 not">
      
    <div className='not'>

  <ul class="list-group">

  <li class="list-group-item lii"> Job Vacancy</li>
 
  <li class="list-group-item"> Other Notice </li>
  <br />

    </ul>
     </div>
       
    

    </div>



   <div className="col-7 gg">

      <h4>  Other Notices  </h4>

         
         <div className="row cc">
        
          <div className="col-2 co "> Date</div> 
          <div className="col-8 co cd ">  Select Correct Train To  Your Jurny </div>

         </div>




         <div className="row cc">
        
        <div className="col-2 co "> Date</div> 
        <div className="col-8 co cd ">  Select Correct Train To  Your Jurny </div>

       </div>

        


       <div className="row cc">
        
        <div className="col-2 co "> Date</div> 
        <div className="col-8 co cd ">  Select Correct Train To  Your Jurny </div>

       </div>
        
      


       <div className="row cc">
        
        <div className="col-2 co "> Date</div> 
        <div className="col-8 co cd ">  Select Correct Train To  Your Jurny </div>

       </div>


       <div className="row cc">
        
        <div className="col-2 co "> Date</div> 
        <div className="col-8 co cd ">  Select Correct Train To  Your Jurny </div>

       </div>



       <div className="row cc">
        
        <div className="col-2 co "> Date</div> 
        <div className="col-8 co cd ">  Select Correct Train To  Your Jurny </div>

       </div>

   </div>
    
    </div>

     <div className='doo'>
         <Footer/>
     </div> */}

<div> <Header/> </div>     

<div className='row'>   

<div className='col-2'>  
 
<ul class="list-group">

<li class="list-group-item lii"> Job Vacancy</li>

<li class="list-group-item"> Other Notice </li>
<br />

  </ul>

</div>


<div className='col-9'>

<div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8">


                    <table className=" table table-striped ">
                        <thead className="thead-dark">
                            <tr>
                                 <th scope="col">Date</th>
                                <th scope="col">Notice</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            { 


                          Ndetails.map ( (bk) => { 
                             return <tr>


                                <td><h5> {bk.Date} </h5></td>
                                <td> <h5> {bk.Notice} </h5></td> 
                             

                            
                            </tr>
                            
                           }
                            
                            )
                            }
                        </tbody>
                    </table>
                    <br />
                    

                </div>
            </div>

            </div>

            </div>  

            <div>  <Footer/> </div>
    </>
    
  )
}
