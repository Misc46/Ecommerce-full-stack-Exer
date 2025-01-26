import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
        alert('Terima kasih telah berlangganan newsletter kami');
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Dapatkan Promo & Berita Terbaru</p>
        <p className='text-gray-400 mt-3'>Langganan newsletter kami untuk mendapatkan promo dan berita terbaru</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Masukkan email anda' className='sm:flex-1 outline-none w-full' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Langganan</button>
        </form>
      
    </div>
  )
}

export default NewsletterBox
