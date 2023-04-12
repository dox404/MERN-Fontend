import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate=useNavigate()
    const PrfileRegister=()=>{

        navigate('/join')
    }
    const data=JSON.parse(localStorage.getItem('user'))
    console.log(data)
  return (
    <>
    {
        data ? <div>
      
      <h1>This is profile page</h1>
      <h1>This is profile page</h1>
      <h1>Name:{data.name}</h1>
      <h1>Email:{data.email}</h1>
    </div>:<div>
        <h1>It seems like you have not registered yet</h1>
        <h1>It seems like you have not registered yet</h1>
        <button onClick={PrfileRegister}>Register?</button>
    </div>
    }
    
    </>
  )
}

export default Profile
