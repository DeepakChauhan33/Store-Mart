import React, { useEffect } from 'react'

// Components
import ButtonComp from '../../Components/ButtonComp';

// Hooks
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

// Motion
import { motion } from 'framer-motion';

// React Icons
import { LuBox } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";


const Wishlist = () => {

  const navigate = useNavigate();

  const wishlist = useSelector((state) => state.wishlist.wishlist);

  // useEffect(() => {
  //   console.log(wishlist);
  // }, [wishlist]);

  return (
    <section className=' p-2 py-4'>

      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className='text-4xl font-light'>My Wishlist</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, autem!</p>
      </motion.div>

      <div>
        {wishlist.length === 0 ? (
          <motion.div
            className='h-96 flex justify-center items-center border'

            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}

          >
            <div className='flex flex-col justify-center items-center gap-4'>
              <LuBox className='text-7xl text-gray-400' />
              <p>No items in your wishlist</p>

              <button
                onClick={() => navigate("/products")}
                className='bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200'>
                Shop Now
              </button>
            </div>
          </motion.div>
        ) : (

          <div className="p-3">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">

              <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                <tr>
                  <th className="text-left px-6 py-3">Product</th>
                  <th className="text-left px-6 py-3">Price</th>
                  <th className="text-left px-6 py-3">Stock Status</th>
                  <th className="text-left px-6 py-3">Action</th>
                  <th className="text-left px-6 py-3">Remove</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">

                {wishlist.map((item) => (
                  <tr key={item.id}
                    className=" border-t hover:bg-gray-100 transition-colors duration-200">

                    <td className="w-[40%] px-6 py-4 font-medium cursor-pointer" title="product details">
                      <NavLink to={`/product/${item.id}`} className="flex items-center gap-3">
                        {<div className='flex justify-start gap-2 items-center'>

                          <img src={item.image} alt={item.category} className='h-20 w-20 object-contain' />
                          <span>{item.title}</span>

                        </div>}
                      </NavLink>
                    </td>

                    <td className="px-6 py-4">
                      ${item.price.toFixed(2)}
                    </td>

                    <td className="px-6 py-4 ">
                      <span className="text-green-600 font-semibold">
                        In Stock
                      </span>
                    </td>

                    <td >
                      <ButtonComp
                        width={"w-32"}
                        onClick={() => navigate(`/product/${item.id}`)}
                      >
                        Add to Cart
                      </ButtonComp>
                    </td>


                    <td className="px-6 py-4">
                      <button
                        className="  hover:bg-gray-200 rounded-full transition-colors duration-200"
                        onClick={() => console.log("Remove from wishlist")}
                      >
                        <IoIosClose className='text-3xl text-gray-400 hover:text-red-500 hover:scale-110 transition-transform duration-200 ' />
                      </button>
                    </td>



                  </tr>
                ))}

              </tbody>

            </table>
          </div>
        )}
      </div>
    </section>
  )
}

export default Wishlist
