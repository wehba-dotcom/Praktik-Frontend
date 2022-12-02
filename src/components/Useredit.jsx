import React ,{useState,useEffect} from "react";
import {useParams} from "react-router-dom"
import  {useNavigate} from "react"
import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import {Json} from 'react';
function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}




export default  function Useredit({facade}){




const [ID,setUserID]= useState(0)
const [is_admin,setIsadmin]=useState()
 const[putResult,setPutResult] = useState([])
 const[login_name,setLoginname] = useState("")
 const[password,setPassword] = useState("")
const {id} = useParams();

const baseURL="https://central.brkint.dk/api/dhcp/allusers/"


const edituserid= async()=>{
const reqdata= await fetch(`${baseURL}${id}`);
const res = await reqdata.json();
setUserID(res[0].ID)
setIsadmin(res[0].is_admin)
setPutResult(res)
setLoginname(res[0].login_name)
setPassword(res[0].password)
/*console.log(res);
console.log(putResult)
console.log(res[0].login_name)*/
}
useEffect(()=>{
edituserid();


},[]);
console.log(putResult)
/*async function putData() {
  const id = id.current.value;

  if (id) {
    const putData = {
      login_name: login_name.current.value,
      password: password.current.value,
  
    };

    try {
      const res = await fetch(`${baseURL}${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(putData),
      });

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();

      const result = {
        status: res.status + "-" + res.statusText,
        headers: { "Content-Type": res.headers.get("Content-Type") },
        data: data,
      };

      setPutResult(data);
    } catch (err) {
      setPutResult(err.message);
    }
  }


}*/
const onChange = (evt) => {
  setPutResult({ ...putResult,[evt.target.login_name]: evt.target.value })
}


/*function updateData (e)
    {
     
        const options = makeOptions("put", {setLogin_name:e.target.value,setPassword:e.target.value}); 
       fetch(`${baseURL}${id}`, options)
         
            .then((data) => setPutResult(data))
    }

const makeOptions= (method,body) =>{
   var opts = {
     method: method,
     headers: {
       "Content-type": "application/json",
       'Accept': 'application/json',
     }
   }
   
   if (body) {
     opts.body = JSON.stringify(body);
   }
  
 }*/


 const updateUser = (evt) =>
 {
  evt.preventDefault();
  facade.updateData(putResult.login_name, putResult.password)
      }


      const   updateUsers = (e) =>
      {
                console.log("updateData")
                e.preventDefault()
                const item = {id,login_name, password,is_admin}
                console.log(login_name,password,is_admin)
           fetch(`${baseURL}${id}`,{
                method: "PUT",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(item)
                }).then(()=>{
                
                }).catch((err)=>{
                      console.log(err.message)
                })
      }


  
     
  
  


    return(

        <React.Fragment >

            <Container className = "content" >
       
                <div className = "row">
                    <div className = "col-sm-12">
                    
                    <form  ><h2 className = "mt-4 mb-4 fw-bold" >UpDate User</h2>
                
                 
                <input onChange ={(e)=>{setLoginname(e.target.value)}} className="login-input" defaultValue={login_name}  id="login_name" /> <br /><br />
                <input onChange ={(e)=>{setPassword(e.target.value)}} className="password" defaultValue={password}  id="password" /> <br /><br />
                <input onChange ={(e)=>{setIsadmin(e.target.value)}} className="is_admin" defaultValue={is_admin}  id="is_admin" /> <br /><br />
                <Button  variant="secondary" className="login-btn" onClick={updateUsers}>Update</Button>
         
              
                   </form>
              </div>
              
                </div>
      
              </Container>
         </React.Fragment>
           
    )
}
