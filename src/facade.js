const URL = "https://central.brkint.dk/api/dhcp/user";

 
function handleHttpErrors(res) {
 if (!res.ok) {
   return Promise.reject({ status: res.status, fullError: res.json() })
 }
 return res.json();
}
 
function apiFacade() {

    const setToken = (token) => {
        localStorage.setItem('jwtToken', token)
      }
    const getToken = () => {
      return localStorage.getItem('jwtToken')
    }
    const loggedIn = () => {
      const loggedIn = getToken() != null;
      return loggedIn;
    }
    const logout = () => {
      localStorage.removeItem("jwtToken");
    }
    

const login = (login_name, password) => {

    const options = makeOptions("POST", true,{login_name: login_name, password: password });
    return fetch(URL + "/api/login", options)
  
  }


const createUser= (login_name,password) => {
  const options = makeOptions("POST",{login_name: login_name, password: password });
  return fetch(URL, options)
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

 const getUserRoles = () =>
    {
        const token = getToken()
        if (token != null)
        {
            const payloadBase64 = getToken().split('.')[1]
            const decodedClaims = JSON.parse(window.atob(payloadBase64))
            const roles = decodedClaims.roles
            return roles
        } else return ""
    }

    const hasUserAccess = (neededRole, loggedIn) =>
    {
        const roles = getUserRoles().split(',')
        return loggedIn && roles.includes(neededRole)
    }


 return {
     makeOptions,
     setToken,
     getToken,
     getUserRoles,
     hasUserAccess,
     createUser,
     loggedIn,
     login,
     logout,
     fetchData,
 }
}
const facade = apiFacade();
export default facade;