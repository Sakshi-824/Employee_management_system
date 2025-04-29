import React, { useState } from 'react'
const Login=({handleLogin})=>{

   
    const [email,setEmail]=useState('')
    const [password,setpassword]=useState('')

    const submitHandler =(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setpassword("")
                          
    }

    return(
        <div className=' flex  h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
             <form 
             onSubmit={(e)=>{
              submitHandler(e)
             }}
             className=' flex flex-col items-center justify-center'>
                <input
                value={email} 
                onChange={(e)=>{
                    setEmail(e.target.value)
                    
                }}
                 required className='text-white outline-none bg-transparent  border-2 border-emerald-600 py-4 px-4 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your Email ' 
                 />
                <input 
                value={password} 
                onChange={(e)=>{
                    setpassword(e.target.value)
                }}
                 required className='text-white outline-none bg-transparent  border-2 border-emerald-600 py-4 px-4 text-xl rounded-full placeholder:text-gray-400'type="password" placeholder='enter your password ' />
                <button className='mt-5 text-white outline-none bg-emerald-600  border-2 border-emerald-600 py-4 px-4 text-xl rounded-full placeholder:text-white'>Login</button>
                
             </form>
            </div>

            
          
            </div>
    )
}


export default Login 