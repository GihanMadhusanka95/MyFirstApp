import React from 'react'
import Header from './Header'
import './css files/Galery.css';


export default function EditImage() {
  return (
    

    <div>

     <div>
        <Header/>
     </div>
      
      <div className="row">
        <div className="col-4">
           
            <div className="card">
                <div className="card-body">
                   
                <img src="./images/1.jpg"  alt="" />

                </div>

                <div className="card-footer">

                  
                    <button className='btn btn-danger jop'>Delete</button>          
          
                </div>
            </div>

        </div>

        <div className="col-4">
           
            <div className="card">
                <div className="card-body">

                <img src="./images/2.jpg"  alt="" />

                </div>
             
                <div className="card-footer">


 <button className='btn btn-danger jop'>Delete</button>          

</div>


            </div>

        </div>

        <div className="col-4">
           
            <div className="card">
                <div className="card-body">
               
                <img src="./images/3.webp"  alt="" />
                    
                </div>

                <div className="card-footer">

              
             <button className='btn btn-danger jop'>Delete</button>          

              </div>


            </div>

        </div>
      </div>
    


      <div className="row">
        <div className="col-4">
           
            <div className="card">
                <div className="card-body">
                 
                <img src="./images/4.jpg"  alt="" />

                </div>

                <div className="card-footer">


 <button className='btn btn-danger jop'>Delete</button>          

</div>


            </div>

        </div>

        <div className="col-4">
           
            <div className="card">
                <div className="card-body">
                
                <img src="./images/1.jpg"  alt="" />
                    
                </div>

                <div className="card-footer">


 <button className='btn btn-danger jop'>Delete</button>          

</div>

            </div>

        </div>

        <div className="col-4">
           
            <div className="card">
                <div className="card-body">
                 
                <img src="./images/1.jpg"  alt="" />
                    
                </div>

                <div className="card-footer">


 <button className='btn btn-danger jop'>Delete</button>          

</div>


            </div>

        </div>
      </div>


      <div className="row">
        <div className="col-4">
           
            <div className="card">
                <div className="card-body">
                     

                <img src="./images/1.jpg"  alt="" />

                </div>
                   
                <div className="card-footer">


 <button className='btn btn-danger jop'>Delete</button>          

</div>


            </div>

        </div>

        <div className="col-4">
           
            <div className="card">
                <div className="card-body">
                   
                <img src="./images/4.jpg"  alt="" />
                    
                </div>

                <div className="card-footer">

       
                 <button className='btn btn-danger jop'>Delete</button>          

</div>

            </div>

        </div>

        <div className="col-4">
           
            <div className="card">
                <div className="card-body">
              
                <img src="./images/4.jpg"  alt="" />
                    
                </div>

                <div className="card-footer">

<button className='btn btn-success jop'>Add</button>
 <button className='btn btn-danger jop'>Change</button>          

</div>


            </div>

        </div>
      </div>












    </div>
  )
}
