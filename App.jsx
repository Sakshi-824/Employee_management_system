import React, {   useContext, useEffect, useState } from "react";
import Login from "./Login";
import AdminDashboard from "./dashboards/Admin";
import Employee from "./dashboards/Employee";
import { AuthContext } from "./context/AuthProvider";
import CreateTask from "./dashboards/Others/CreateTask";




// import Employee from "./dashboards/Employee";
// import AdminDashboard from "./dashboards/Admin";
// import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
// import Header from "./dashboards/Others/Header";
const App=()=>{

const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] =useState(null)
const authData = useContext(AuthContext)

// useEffect (()=>{
//   const loggedInUser = localStorage.getItem('loggedInUser')

//  if(loggedInUser){
//  const userData = JSON.parse(loggedInUser)
//  setUser(userData.role)
//  setLoggedInUserData(userData.data)
//  }
// },[])


    const handleLogin = (email,password)=>{
      if(email == 'admin@me.com' && password == '123'){
        setUser('admin')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      }else if(authData){
        const employee = authData.employees.find((e)=>email == e.email && e.password == password)
        if(employee){
          setUser('employee')
          setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
        }
        
      }
           
      else{
        alert("invalid credentials ")
      }
   
    
    }


    return(
        <> 
      {!user ? <Login handleLogin={handleLogin}/>:''}
      {user == 'admin' ? <AdminDashboard  changeUser={setUser}/> : (user == 'employee'? <Employee  changeUser={setUser} data={loggedInUserData}/>:null)}
        <CreateTask />
        </>
    )
  
  
}

export default App
        