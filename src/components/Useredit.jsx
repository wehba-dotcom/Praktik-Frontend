import React ,{useState,useEffect,useRef} from "react";
import {useHistory,useParams} from "react-router-dom"
import {Container} from 'react-bootstrap'

export default  function Useredit(){
/*  const[editUser,setEdituser] = useState({login_name:"", password:""})*/

  const login_name = useRef(null);
  const password = useRef(null);
  

  const [putResult, setPutResult] = useState({login_name: "",password: ""});
const history= useHistory()
const {id} = useParams();
const baseURL="https://central.brkint.dk/api/dhcp/allusers/"

useEffect(()=>{
const edituserid= async()=>{
const reqdata= await fetch(`${baseURL}${id}`);
const res = await reqdata.json();
//setPutResult( { ...putResult, [evt.target.id]: evt.target.value });
setPutResult(res)
/*console.log(res);
console.log(putResult)
console.log(res[0].login_name)*/
}

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
const handeledit=((e)=>{
setPutResult({ ...putResult, [e.target.login_name]: e.target.value })
console.log(putResult)
})

/*const updateData = (put,true) =>
    {
     
        const options = makeOptions("put", true); //True add's the token
        return fetch(baseURL + id , options)
         
            .then((data) => setPutResult(data))
    }*/

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
   return opts;
 }


 const updateData = (login_name,password,e) => {
  e.preventDefult()
  const options = makeOptions("PUT", {login_name: login_name, password: password });
 fetch(`${baseURL}${id}` , options)
setTimeout=(()=>{
  history.push("/modifyusers")
},2000)
}

    return(

       
        <React.Fragment >

            <Container className = "content" >
        <div className = "row">
            <div className = "col-sm-12">
            <h2 className = "mt-4 mb-4 fw-bold" >Up Date User</h2>
          <form  onSubmit={updateData} className = "row g-3" >
            <div className = "col-md-3" >
            <label className = "form-label" > Name </label>
            <input 
            type = "text"
            name = "ligin_name"
            className = "form-control p-2" 
      value = {putResult.login_name}
      onChange={(e)=>handeledit}
            />
            </div><br/>
            <div className = "col-md-3" >
            <label className = "form-label"> Password </label>
            <input 
            type = "text"
            name = "user_password"
            className = "form-control p-2" 
             value = {putResult.password}
          onChange={(e)=>handeledit}
            />
            </div>
            <div className = "col-md-3">
            <button type = "submit" className = "btn btn-primary mt-4"> Update </button> 
            </div>
            </form>
       </div>
        </div>
        </Container>
            </React.Fragment>
  
    )
}
