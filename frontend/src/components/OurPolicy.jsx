import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="policy" />
            <p className='font-semibold'>Garansi Pengembalian Uang</p>
            <p className='text-gray-400'>Jika ada masalah dengan tahu yang anda terima, anda berhak meminta uang kembali</p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="policy" />
            <p className='font-semibold'>Garansi Kualitas Produk</p>
            <p className='text-gray-400'>Kami hanya menggunakan kedelai premium tanpa GMO untuk memastikan rasa dan kualitas terbaik di setiap produk</p>
        </div>
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="policy" />
            <p className='font-semibold'>Customer Service 24 Jam</p>
            <p className='text-gray-400'>Jika mengalami kendala jangan ragu untuk mengontak CS kami</p>
        </div>

    </div>
  )
}

export default OurPolicy
