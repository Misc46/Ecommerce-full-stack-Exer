import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div className='flex flex-col gap-4'>
            <img src={assets.logo} alt="logo" className='mb-5 w-32'/>
          <p className='w-full md:w-2/3 text-gray-600'>TULAT adalah perusahaan tahu dan kedelai yang menghadirkan produk berkualitas tinggi. Dengan pemasaran berbasis teknologi, kami mempermudah konsumen menikmati kelezatan alami melalui platform digital modern.</p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>PT. LOREM IPSUM</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Beranda</li>
                <li>Tentang Kami</li>
                <li>Pengiriman</li>
                <li>Kebijakan</li>
            </ul>
          </div>
          <div>
            <p className='text-xl font-medium mb-5'>Kontak Kami</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>021-123456</li>
                <li>Jl. Lorem No. 5, Kecamatan Ipsum, Kelurahan Dolor, Kota Sit, Provinsi Amet</li>
                <li>Tulat@LoremIpsumMail.com</li>
                <li>Syarat & Ketentuan</li>
            </ul>
          </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Hak Cipta 2025@ Tulat</p>
      </div>
    </div>
  )
}

export default Footer
