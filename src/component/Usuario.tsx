import React, { useState } from 'react'

interface User  {
    uid: string;
    name: string;     
}

const Usuario = () => {

const [user, setUser] = useState<User>();

const login = () =>{
    setUser({
        uid: "ABD-123",
        name: "Libia"
    })
}

  return (
    <div className='mt-5'>
        <h3>usuario: useState</h3>
        <button 
        onClick={login}
        className='btn btn-outline-primary'>
            Login
        </button>
        <hr/>
        {
            (!user)
            ?<pre>No hay usuario</pre>
            :<pre>{JSON.stringify( user )}</pre>   
        }   
    </div>
  )
}

export default Usuario