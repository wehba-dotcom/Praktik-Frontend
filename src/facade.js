const URL = "https://central.brkint.dk/api/dhcp/user";
function handleHttpErrors(res) {
 if (!res.ok) {
   return Promise.reject({ status: res.status, fullError: res.json() })
 }
 return res.json();
}
 
function apiFacade() {

   

const login = (login_name, password) => {

    const options = makeOptions("POST",{login_name: login_name, password: password });
    return fetch(URL + "/login", options)

  

}

const createUser= (login_name,password) => {
  const options = makeOptions("POST", {login_name: login_name, password: password });
  return fetch(URL , options)

}


const fetchData = (endpoint, updateAction) =>
    {
        const options = makeOptions("GET", true); //True add's the token
        return fetch(URL + "/api/" + endpoint, options)
            .then(handleHttpErrors)
            .then((data) => updateAction(data))
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
   return opts;
 }

 

  

 return {
     makeOptions,
     createUser,
     login,
     fetchData,
 }
}
const facade = apiFacade();
export default facade;