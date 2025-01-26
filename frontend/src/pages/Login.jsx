import React, { useState } from 'react'

const login = () => {

  const [currentState, setCurrentState] = useState('Daftar');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'></hr>
      </div>
      {currentState === 'Masuk' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Username' required></input>}
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required></input>
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required></input>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Lupa kata sandi?</p>
        {
          currentState === 'Masuk'
          ? <p onClick={()=>setCurrentState('Daftar')} className='cursor-pointer'>Buat Akun</p> : <p onClick={()=>setCurrentState('Masuk')} className='cursor-pointer'>Masuk</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer'>{currentState === 'Masuk' ? 'Masuk' : 'Daftar'}</button>
    </form>
  )
}

export default login
