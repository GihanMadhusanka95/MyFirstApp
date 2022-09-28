// import React, { useState }  from "react";
import React, {useState} from "react";
import axios from "axios";
//import swal from 'sweetalert'
import { Link} from 'react-router-dom';
//import '../Components/Notice.css';
//import SideNavBar from "./SideNavBar";


class GetTrainDetails extends React.Component{

    constructor(props) {
        super (props);

        this.state={
            TrainDetails:[]
        };
    }


    componentDidMount(){
        this.retrieveTrainDetails();
    }


    retrieveTrainDetails(){
        
        axios.get("http://localhost:8000/users").then(res =>{
            if(res.data){
                this.setState({
                    TrainDetails:res.data
                });

                console.log(this.state.TrainDetails)
            }
        });

    }

    onDelete = (id) =>{
        axios.delete(`http://localhost:8090/users/delete/${id}`).then((res)=>{
            // swal({
            //     title: "Success!",
            //     text: "Notice Deleted Successfully",
            //     icon: 'success',
            //     timer: 2000,
            //     button: false,
            //   }); 
             alert("Delete successfully");
            this.retrieveTrainDetails();
        });
      
        
};

handleTextSearch =(e)=>{
    const searchTerm = e.currentTarget.value;
    axios.get("http://localhost:8090/users").then(res => {
        if(res.data){ 
            this.filterContent(res.data, searchTerm)
        }
    });
}; 
filterContent(TrainDetails, searchTerm){
    const result = TrainDetails.filter(
        (TrainDetails) => 
        TrainDetails.subject.toLowerCase().includes(searchTerm)||
        TrainDetails.select.toLowerCase().includes(searchTerm)
    );
    this.setState({ TrainDetails: result });
}


    render(){
        return(
            <div>
              


            
            <div>

                <div className="headAll">
                
                <h1>All Notice Page</h1>

                <p>Lorem ipsum is a placeholder text commonly !</p> 
                <div className="addBHutton">
                    <button className="btn noticeAdd"><a href="/CreateNotice" style={{textDecoration:'none', color:'white'}}>Create Notice</a></button>
                    </div>
                   
                {/* <button type="button" class="btn btn-outline-dark" href="#AllNotice">View All Notice</button> */}
                </div>


                <div className="constainerAllNotice">
                    



                <div className="constainerAllNotice container-fluid" id="AllNotice">
                    <div className="all-notice">
                    <h3 className="h3 mb-3 fonr-weight-normal">All Notice</h3>

                    <div className="col-lg-3 mt-2 mb-2">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="search"
                            name="searchTerm"
                            onChange={this.handleTextSearch}
                        ></input>
                    </div>

                <table className="tableNotice table-hover">

                <thead>
                    <tr>
                    
                    <th scope="col">Train Name</th>
                    <th scope="col">Day</th>
                    <th scope="col">Start Point</th>
                    <th scope="col">End Point </th>
                    <th scope="col">StartUpTime </th>
                    <th scope="col"> TrainType </th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.TrainDetails.map((TrainDetails,index)=>(

                        <tr key={index}> 
                        

                        
                        
                        <td><strong>{TrainDetails.select}</strong></td>
                        <td>
                        <Link to={`/TrainDetails/${TrainDetails._id}`} style={{textDecoration:'none'}}>

                            {TrainDetails.subject}
                        </Link>
                            
                        </td>

                        <td>{TrainDetails.TrainName}</td>
                        <td>{TrainDetails.Day}</td>
                        <td>{TrainDetails.StartPoint}</td>
                        <td>{TrainDetails.EndPoint}</td>
                        <td>{TrainDetails.StartUpTime}</td>
                        <td>{TrainDetails.TrainType}</td>

                         <td>
                             <a href={`/update/${TrainDetails._id}`}>
                            <button className="btn-ed btn-warning-notice" >
                                <i className="fas fa-edit"></i>&nbsp;Edit
                            </button>
                            </a>
                        </td>
                        
                        <td>
                            <a className="btn btn-danger-notice" href="/Notice" onClick={() => this.onDelete(TrainDetails._id)} style={{textDecoration:'none'}}>
                                <i className="far fa-trash-alt"></i>&nbsp;Delete
                            </a>
                        </td>


                        </tr>

                    ))}
                    
                    
                    
                    
                </tbody>
                </table>
                <button type="button" className="btn noticeAdd" ><a href="/reportnotice" style={{textDecoration:'none', color:'white'}}>Genarate Report</a></button>

                    </div>
                


                </div>
                
            </div>
        </div>
        </div>
        )
    }
}

export default GetTrainDetails;