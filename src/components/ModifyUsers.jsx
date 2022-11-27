import {Modal} from 'react-bootstrap'
import React, { useRef, useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import Edit from './Edit';
import SignUp from './SignUp';
import Useredit from './Useredit';

function ModifyUsers({facade,onEditUser,user}){

  const [getResult, setGetResult] = useState([]);
  const [showModal, setShowModal] = useState(false)



  const handleClose = () => setShowModal(false)
  const handleOpen = () => {
      setShowModal(true)
  } 
    const baseURL = "https://central.brkint.dk/api/dhcp/allusers/";
    const Id = useRef(null);
    const Name = useRef(null);
    
    const fortmatResponse = (res) => {
      return JSON.stringify(res, null, 2);
    }

    var options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Host': 'central.brkint.dk',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoid2Voa28iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9oYXNoIjoiZmVmMzA5NDYtZmZhYy00YmRlLThhMTktYWI5ZmQyMGJhNzBiIiwic3ViIjoiUG93ZXJTaGVsbFVuaXZlcnNhbCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJXZWJ0b29sc19Vc2VyIiwiUmVhZGVyIiwiT3BlcmF0b3IiXSwibmJmIjoxNjYwODEzNDIxLCJleHAiOjE2OTIzNDk0MjEsImlzcyI6Iklyb25tYW5Tb2Z0d2FyZSIsImF1ZCI6IlBvd2VyU2hlbGxVbml2ZXJzYWwifQ.e-wPmHX19HBQdmbEXesQ8JOZI56qKnhjzPw7VdxY0k8',
      }
    }


  
    async function getAllData(e) {
     
        const res = await fetch(baseURL,options);
        const data = await res.json();
        setGetResult(data)
    }
  

    async function getDataById(e) {
      const id = Id.current.value;
      e.preventDefault();
          const res = await fetch(`${baseURL}${id}`);
          const data = await res.json();
          setGetResult(data);
       
    }

  
    async function getDataByTitle(e) {
        const title = Name.current.value;
          e.preventDefault();
            let url = new URL(`https://central.brkint.dk/api/dhcp/scopes/?name=${title}`);
            const res = await fetch(url);
          const data = await res.json();
          setGetResult(data);
       
    }

  
    const clearGetOutput = () => {
      setGetResult(null);
    }
  
function deleteuser1 (id){
fetch(`https://central.brkint.dk/api/dhcp/allusers/:id${id}`,{
    method:"DELETE"
})
.then((res)=>{
    res.json()
.then((response)=>{
        console.log(response)
    })
})
}
function getAllUsers(){
    fetch(`${baseURL}`)
.then((res)=>{
    res.json()
.then((response)=>{
        setGetResult(response)
        console.log(response)
    })
})
}
 function deleteuser(id) {
    facade.deleteUser(id)
    getAllUsers()
        
    
  }

   /* async function edituser(e) {
    
      const id = Id.current.value;
      e.preventDefault();
          const res = await fetch(`${baseURL}${id}`);
          const data = await res.json();
          console.log(data)
          setResult(data);
          console.log(data)
    setShowModal(true)
    onEditUser()
  }*/
  function onEditUserClick()
  {
  

  }

  useEffect(() => {
    getAllUsers()
  },[]);


    return (
      <div className="tablediv">
      <div className=" text-center text-light rounded bg-secondary ">
         <h1>Bornholm Regional Municipality IT-DEPARMENT</h1>
</div>
     <table style={{ widtd: 750 }} className="table table-striped">
 <thead>
 <tr
           style={{ backgroundColor: "darkgray" }}
           className="myGoalTableContent"
         >
            <th> User-ID   </th>
            <th>Name       </th>
            <th>Password   </th>
            <th>Is-Admin   </th>
             <th>Oprations </th>
        </tr>
    </thead> <tbody>
    {getResult.map((usr) => (<tr>
        <td>{usr.ID}        </td>
        <td>{usr.login_name}</td>
        <td>{usr.password}  </td>
        <td>{usr.is_name}   </td>
        <td>
         <Link to={`/useredit/${usr.ID}`}  className="btn btn-success">Edit</Link>
          <button className="btn btn-primary" onClick={()=>deleteuser(usr.ID)}>DELETE</button>
        </td>
        </tr>))}
        </tbody>
</table>
</div>


  );
}



  



export default ModifyUsers;