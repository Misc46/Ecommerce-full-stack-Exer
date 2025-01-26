import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  
  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {

    products.map((item)=> {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })

  }
  
  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* ------------- Product Data -------------*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={()=>setImage(item)} key={index} className='cursor-pointer w-[24%] sm:w-full sm:mb-3 flex-shrink-0' src={item} alt="product" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="product" />

          </div>
        </div>
            {/* ------------- Product Info -------------*/}
            <div className='flex-1'> 
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <p className='pl-2'>(100)</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Ukuran porsi</p>
                <div className='flex gap-2'>
                  {productData.sizes.map((item, index) => (
                    <button onClick={()=>setSize(item)} className={`hover:cursor-pointer border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                  ))}
                </div>
              </div>
              <button onClick={()=>addToCart(productData._id, size)} className='hover:cursor-pointer bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>TAMBAH KE KERANGJANG</button>
              <hr className='mt-8 sm:w-4/5'></hr>
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>Produk Dijamin Orisinil</p>
                <p>Bisa Cash On Delivery</p>
                <p>Kedelai Asli TULAT</p>

              </div>
            </div>
      </div>
      {/*------------- Product Review -------------*/}
      <div className='mt-20'>
        <div className='flex'>
            <b className='border px-5 py-3 text-sm'>Deskripsi</b>
            <p className='border px-5 py-3 text-sm'>Ulasan (23)</p>
          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>Tahu Bulat Original adalah camilan khas Indonesia yang sederhana namun penuh kelezatan. Dibuat dari adonan tahu berkualitas tinggi yang diolah secara tradisional, tahu ini digoreng hingga membentuk tekstur renyah di luar namun tetap lembut dan gurih di dalam.</p>
            <p>Cita rasa alaminya menonjolkan keseimbangan sempurna antara gurih dan ringan, menjadikannya pilihan camilan yang cocok untuk segala suasana.</p>
          </div>
      </div>

            {/*------------- Produk terkait -------------*/}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
