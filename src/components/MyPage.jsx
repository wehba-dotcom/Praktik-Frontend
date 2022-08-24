import React, { useEffect, useState } from "react";

import "../styles/mypage.css";

function MyPage() {
  const [scope, setScope] = useState([]);

  var options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': '',
      'Host': 'api.producthunt.com',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoid2Voa28iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9oYXNoIjoiZmVmMzA5NDYtZmZhYy00YmRlLThhMTktYWI5ZmQyMGJhNzBiIiwic3ViIjoiUG93ZXJTaGVsbFVuaXZlcnNhbCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJXZWJ0b29sc19Vc2VyIiwiUmVhZGVyIiwiT3BlcmF0b3IiXSwibmJmIjoxNjYwODEzNDIxLCJleHAiOjE2OTIzNDk0MjEsImlzcyI6Iklyb25tYW5Tb2Z0d2FyZSIsImF1ZCI6IlBvd2VyU2hlbGxVbml2ZXJzYWwifQ.e-wPmHX19HBQdmbEXesQ8JOZI56qKnhjzPw7VdxY0k8',
    }
  }

  const fetchData = async () => {
    try{
      const response = await fetch(
        "https://central.brkint.dk/api/scopes",options
      );
      const data = await response.json();
      setScope(data);
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  });

  

  return (
    <div>
    <div className="tablediv">
        <p style={{ textAlign: "center" }}>All Scopes</p>
        <table style={{ width: 750 }} className="table table-striped">
    <thead>
    <tr
              style={{ backgroundColor: "darkgray" }}
              className="myGoalTableContent"
            >
            <th>ScopeId</th>
            <th>Description</th>
            <th>SubnetMask_int</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
{scope.map((sc) => (<tr>
    <td>{sc.ScopeId}</td>
    <td>{sc.Description}</td>
    <td>{sc.SubnetMask_int}</td>
    <td>{sc.Name}</td>
    </tr>))}
    </tbody>
</table>
</div>
</div>
  );
}

export default MyPage;
