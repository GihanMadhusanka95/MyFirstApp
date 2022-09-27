import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'

export default function UserProfile() {
    const[Users,setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/users/').then(res=> {
            setUsers(res.data);
            console.log(res.data);

        },[])
            .catch(err => {
                console.log(err);
            })
    })

  return (
    <div>

    <div>
            
            <br />
                <br/>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-8">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">User Name </th>
                                    <th scope="col">Contact Number </th>
                                    
                                 <th className="text-center" scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Users.map(Users=><tr key={Users.Name}>
                                    <td>{Users.Name}</td>
                                    <td>{Users.ContactNumber}</td>
                                    <td className="text-center">
    
                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    
    
    
    
    
    
    
    
    
        </div>
    )
     
    }
    
    