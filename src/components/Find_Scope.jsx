
import React, { useRef, useState } from "react";
function Find_Scope(){

  
    const baseURL = "https://central.brkint.dk/api/scopes?scopeid=";
  
    const ScopeId = useRef(null);
    const Name = useRef(null);
  
    const [getResult, setGetResult] = useState(null);
  
    const fortmatResponse = (res) => {
      return JSON.stringify(res, null, 2);
    }
  
    async function getAllData() {
      
        const res = await fetch(`${baseURL}`);
  
  
        const data = await res.json();
  
       
  
        setGetResult(data);
      
    }
  
    async function getDataById() {
      const id = ScopeId.current.value;
  
    
          const res = await fetch(`${baseURL}${id}`);
  
  
          const data = await res.json();
  
        
        
  
          setGetResult(data);
       
    }
  
    async function getDataByTitle() {
      const title = Name.current.value;
  
    
          // const res = await fetch(`${baseURL}/tutorials?title=${title}`);
  
          let url = new URL(`https://central.brkint.dk/api/scopes?name=${title}`);
          
  
          const res = await fetch(url);
  
       
  
          const data = await res.json();
  
         
  
          setGetResult(data);
       
    }
  
    const clearGetOutput = () => {
      setGetResult(null);
    }
  
    return (
      <div className="card">
        <div className="card-header">Scopes-search-by-scopeid-name</div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-primary" onClick={getAllData}>Get All</button>
  
            <input type="text" ref={ScopeId} className="form-control ml-2" placeholder="id" />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={getDataById}>Get by Id</button>
            </div>
  
            <input type="text" ref={Name} className="form-control ml-2" placeholder="Name" />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={getDataByTitle}>Find By Name</button>
            </div>
  
            <button className="btn btn-sm btn-warning ml-2" onClick={clearGetOutput}>Clear</button>
          </div>   
          
          { getResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{ <div className="tablediv">
        <p style={{ textAlign: "center" }}> Scope</p>
        <table style={{ widtd: 750 }} className="table table-striped">
    <thead>
    <tr
              style={{ backgroundColor: "darkgray" }}
              className="myGoalTableContent"
            >
      <th>ScopeId_In</th>
      <th>ScopeId</th>
      <th>SubnetMask</th>
        <th>SubnetMask_int</th>
      <th>StartRange</th>
      <th>StartRange_int</th>
        <th>EndRange</th>
      <th>EndRange_int</th>
        <th>Description</th>
      <th>LeaseDuration</th>
        <th>MaxBootpClient</th>
        <th>Name</th>
        <th>NapEnable</th>
        <th>NapProfile</th>
        <th>State</th>
        <th>SuperscopeName</th>
        <th>Type</th>
        <th>PSComputerName</th>
        <th>ToBeDeleted</th>
        <th>ScopeNetId</th>
        <th>ScopeId_bin</th>
        <th>SubnetMask_bin</th>
        <th>StartRange_bin</th>
        <th>EndRange_bin</th>
        <th>ScopeNetId_bin</th>
      <th>Activ_leases_refresh</th>
    
      
    
        </tr>
    </thead> <tbody  >
{getResult.map((sc) => (<tr>
  <td>{sc.ScopeId_Int}</td>
      <td>{sc.ScopeId}</td>
      <td>{sc.SubnetMask}</td>
        <td>{sc.SubnetMask_int}</td>
      <td>{sc.StartRange}</td>
      <td>{sc.StartRange_int}</td>
        <td>{sc.EndRange}</td>
      <td>{sc.EndRange_int}</td>
        <td>{sc.Description}</td>
      <td>{sc.LeaseDuration}</td>
        <td>{sc.MaxBootpClient}</td>
        <td>{sc.Name}</td>
        <td>{sc.NapEnable}</td>
        <td>{sc.NapProfile}</td>
        <td>{sc.State}</td>
        <td>{sc.SuperscopeName}</td>
        <td>{sc.Type}</td>
        <td>{sc.PSComputerName}</td>
        <td>{sc.ToBeDeleted}</td>
        <td>{sc.ScopeNetId}</td>
        <td>{sc.ScopeId_bin}</td>
        <td>{sc.SubnetMask_bin}</td>
        <td>{sc.StartRange_bin}</td>
        <td>{sc.EndRange_bin}</td>
        <td>{sc.ScopeNetId_bin}</td>
      <td>{sc.Activ_leases_refresh}</td>
      
    
    </tr>))}
    </tbody></table></div>}</pre></div> }
        </div>
      </div>
    );
  }
  
  

export default Find_Scope;