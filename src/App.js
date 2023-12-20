import React,{ useState} from "react"
import './App.css';
import Child from "./Child";
function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const [user,setUser]=useState("")
  const HandleLogin=(username)=>{
     setUser(username)
     setIsLoggedIn(true)
  }
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      {isLoggedIn?<h3 style={{color:"red"}}>{user} LoggedIn Successfully !</h3>:<Child HandleLogin={HandleLogin}/>}
    </div>
  );
}

export default App;
