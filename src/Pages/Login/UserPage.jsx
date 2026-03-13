import React from 'react'

// Hooks
import { useDispatch, useSelector } from 'react-redux'


// Actions
import { logout } from './authSlice'

const UserPage = () => {

    const users = useSelector((state) => state.auth.loginDetails);
    const user = users[users.length - 1];

    const dispatch = useDispatch();
    return (
        <div className=' w-full -m-8  h-120   p-3 flex flex-col justify-center items-center  shadow-md
                    bg-[url("https://www.pngall.com/wp-content/uploads/19/Ecommerce-Website-Seasonal-Discount-Banner-PNG.png")]  bg-cover bg-no-repeat object-contain bg-center opacity-75'>


            <div className='w-[70%] lg:w-1/2 h-80 bg-gray-100 opacity-90  flex flex-col justify-center items-center p-2 gap-2'>

                <div className='h-30 w-30 rounded-full border-3 border-blue-400 '>

                    <img src={'https://cdn-icons-png.freepik.com/256/15359/15359050.png?semt=ais_white_label'} alt="Profile" />


                </div>

                <p className='text-2xl'>{user?.name}</p>

                <button className='py-2  w-full rounded-md bg-purple-500'
                    onClick={() => dispatch(logout(false))}>
                    Logout
                </button>

            </div>






        </div>
    )
}

export default UserPage
