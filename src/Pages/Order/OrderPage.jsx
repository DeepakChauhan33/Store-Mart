import React from 'react'

import { LuBox } from "react-icons/lu";


const OrderPage = () => {
  return (
    <section className=' p-2 py-4'>

      <div>
        <h2 className='text-4xl font-light'>My Wishlist</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, autem!</p>
      </div>

      <div className='h-96 flex justify-center items-center border'>
        <div className='flex flex-col justify-center items-center'>
          <LuBox />
          <p>No items in your wishlist</p>

          <button>
            <a href="/products" className='bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200'>Shop Now</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default OrderPage
