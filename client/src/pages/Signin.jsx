import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Signin = () => {

  const [formData, setFormData] =useState({});
  const [loading, setLoading] = useState(false);
  const [error , setError] = useState(null);
  const navigate = useNavigate();

  const handleChange =(e)=>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    }
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signin',{
        method: "POST",
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if(data.success === false){
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      console.log(data);
      navigate('/');
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign In</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}> 
        <input className='p-3 border rounded-lg' type="email" placeholder='Email' id='email' onChange={handleChange}/>
        <input className='p-3 border rounded-lg' type="password" placeholder='Password' id='password' onChange={handleChange}/>
        <button className='p-3 bg-slate-700 text-white rounded-lg hover:opacity-95 disabled:placeholder-opacity-65'>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Didn't have a account?</p>
        <Link to={'/signup'}>
          <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
      {error && <p className='mt-5 text-red-500'>{error}</p>}
    </div>
  )
}

export default Signin