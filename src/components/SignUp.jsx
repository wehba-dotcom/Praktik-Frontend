import React,{useState,useNavigat} from "react";
import { useHistory } from "react-router-dom";
import "../styles/form.css";



export default function SignUp({ facade ,getResult,editMode})
{
    let history = useHistory();
    const init = { login_name: "", password: "" };
    const [Credentials, setCredentials] = useState(init);



    const create = (evt) =>
    {
        evt.preventDefault();
        facade.createUser(Credentials.login_name, Credentials.password)
       history.push("/")


    }
    const onChange = (evt) =>
    {
        setCredentials({ ...Credentials, [evt.target.id]: evt.target.value })
    }



    return (
        <div style={{textAlign:"center"}}>
          
            <h2>Sign up</h2>
            
           
            <form onChange={onChange} >
          <input className="login-input"  placeholder="User Name" defaultValue={editMode ? getResult.login_name :""} id="login_name" /> <br /><br />
          <input className="login-input"  type="password" placeholder="Password" id="password" /> <br /><br />
          <button className="login-btn" onClick={create}>Create</button>
        </form>
            
            
        </div>
    )

}