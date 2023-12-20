import React,{useState} from 'react'

const Child = ({HandleLogin}) => {
  const [userName,setUserName]=useState("")
  const [password,setPassword]=useState("")
  return (
    <div className='child'>
        <form>
          <label htmlFor='username'>Username :</label>
          <input type="text" id='username' value={userName} onChange={(e)=>setUserName(e.target.value)}/><br></br>
          <label htmlFor='password'>Password :</label>
          <input type="text" id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>
          <button type="submit" onClick={()=>HandleLogin(userName)}>Login</button>
        </form>
        </div>
  )
}

export default Child