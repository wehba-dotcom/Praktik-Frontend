
import React, { useRef, useState } from "react";
function Find_Scope(){

  
    const baseURL = "https://central.brkint.dk/api/scopes?scopeid=";
  
    const Scopeid = useRef(null);
    const Name = useRef(null);
  
    const [getResult, setGetResult] = useState(null);
  
    const fortmatResponse = (res) => {
      return JSON.stringify(res, null, 2);
    }
  
    async function getAllData() {
      try {
        const res = await fetch(`${baseURL}`);
  
        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
  
        const data = await res.json();
  
        const result = {
          status: res.status + "-" + res.statusText,
          headers: {
            "Content-Type": res.headers.get("Content-Type"),
            "Content-Length": res.headers.get("Content-Length"),
          },
          length: res.headers.get("Content-Length"),
          data: data,
        };
  
        setGetResult(fortmatResponse(result));
      } catch (err) {
        setGetResult(err.message);
      }
    }
  
    async function getDataById() {
      const id = Scopeid.current.value;
  
      if (id) {
        try {
          const res = await fetch(`${baseURL}${id}`);
  
          if (!res.ok) {
            const message = `An error has occured: ${res.status} - ${res.statusText}`;
            throw new Error(message);
          }
  
          const data = await res.json();
  
          const result = {
            data: data,
            status: res.status,
            statusText: res.statusText,
            headers: {
              "Content-Type": res.headers.get("Content-Type"),
              "Content-Length": res.headers.get("Content-Length"),
            },
          };
  
          setGetResult(fortmatResponse(result));
        } catch (err) {
          setGetResult(err.message);
        }
      }
    }
  
    async function getDataByTitle() {
      const title = Name.current.value;
  
      if (title) {
        try {
          // const res = await fetch(`${baseURL}/tutorials?title=${title}`);
  
          let url = new URL(`https://central.brkint.dk/api/scopes?name=${title}`);
          
  
          const res = await fetch(url);
  
          if (!res.ok) {
            const message = `An error has occured: ${res.status} - ${res.statusText}`;
            throw new Error(message);
          }
  
          const data = await res.json();
  
          const result = {
            status: res.status + "-" + res.statusText,
            headers: {
              "Content-Type": res.headers.get("Content-Type"),
              "Content-Length": res.headers.get("Content-Length"),
            },
            data: data,
          };
  
          setGetResult(fortmatResponse(result));
        } catch (err) {
          setGetResult(err.message);
        }
      }
    }
  
    const clearGetOutput = () => {
      setGetResult(null);
    }
  
    return (
      <div className="card">
        <div className="card-header">React Fetch GET - BezKoder.com</div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-primary" onClick={getAllData}>Get All</button>
  
            <input type="text" ref={Scopeid} className="form-control ml-2" placeholder="id" />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={getDataById}>Get by Id</button>
            </div>
  
            <input type="text" ref={Name} className="form-control ml-2" placeholder="Name" />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={getDataByTitle}>Find By Name</button>
            </div>
  
            <button className="btn btn-sm btn-warning ml-2" onClick={clearGetOutput}>Clear</button>
          </div>   
          
          { getResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{getResult}</pre></div> }
        </div>
      </div>
    );
  }
  
  

export default Find_Scope;