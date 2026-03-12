import React, { useState } from 'react'

// React Icons
import { LuBox } from "react-icons/lu";
import { FaBox } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";



// Motion
import { motion } from 'framer-motion';

// Hooks
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { div, h2, p } from 'framer-motion/client';



const OrderPage = () => {


  const orders = useSelector((state) => state.orders.orders);



  const [orderMsg, setOrderMsg] = useState("No orders here—why not start shopping?");

  const navigate = useNavigate();

  return (
    <section className=' p-2 py-4'>

      <motion.div
        className='px-3'

        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className='text-4xl font-light'>My Orders</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, autem!</p>
      </motion.div>





      <motion.div className='w-full p-3'>
        {orders.length === 0 ?
          (
            <div className='flex flex-col justify-center items-center gap-4'>
              <LuBox className='text-7xl text-gray-400' />
              <p className='text-xl font-light'>{orderMsg}</p>

              <button
                onClick={() => navigate("/products")}
                className='bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200'>
                Shop Now0

              </button>
            </div>
          )
          :
          (
            <div className='flex flex-col gap-4 rounded-lg overflow-hidden mt-6'>

              {orders.map((order) => (
                <div  >

                  <div className='flex justify-between bg-gray-100 px-6 py-2.5 '>
                    {/* Order ID */}
                    <div className='flex flex-col justify-center items-start gap-3 p-3'>
                      <FaBox />
                      <p>{order.id}</p>
                    </div>

                    {/* Order Date */}
                    <div className='flex flex-col justify-center items-start gap-3 p-3'>
                      <FaRegCalendarAlt />
                      <p>{order.date}</p>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-3 p-3'>
                      {/* Order Total */}
                      <FaDollarSign />
                      <p>$ {(order.total).toFixed(2)}</p>
                    </div>
                  </div>

                  <div className='p-3'>
                    <p className='text-md font-semibold mb-3'>Order items</p>
                    {order.products.map((item) => (
                      <div className='flex justify-between space-y-4'>
                        <div>
                          <p className='text-sm'>{item.title}</p>
                          <p className='text-sm font-medium text-gray-600'>Qty : {item.quantity}</p>

                        </div>

                        <div className='text-end'>
                          <p className='text-sm'>${item.price}</p>
                          <p className='text-sm font-normal text-gray-600'>sub total : {(item.price * item.quantity).toFixed(2)}</p>

                        </div>

                      </div>
                    ))}
                  </div>

                </div>
              ))}


              <div className='flex justify-between p-3.5 px-5 bg-gray-200'>
                <span className=' p-2 hover:underline'>View Details</span>
                <button
                  className='shadow-md rounded-md px-3 py-1 bg-white cursor-pointer transition-transform hover:scale-101'
                  onClick={() => (navigate("/products"))}>order again</button>
              </div>

            </div>




          )


        }


      </motion.div>
    </section>
  )
}

export default OrderPage
