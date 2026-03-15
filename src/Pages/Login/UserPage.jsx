import React from 'react'

// Hooks
import { useDispatch, useSelector } from 'react-redux'


// IMAGES
import UserImg from '../../Images/UserPageImg.jpg';


// Actions
import { logout } from './authSlice'

const UserPage = () => {

    const users = useSelector((state) => state.auth.loginDetails);
    const user = users[users.length - 1];

    const dispatch = useDispatch();
    return (
        <div
            className="w-full h-screen flex flex-col justify-center items-center shadow-md bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${UserImg})` }}
        >


            <div className='w-[70%] lg:w-1/2 h-80 bg-gray-200 opacity-90 p-8 flex flex-col justify-center items-center gap-2  rounded-md '>

                <div className='h-30 w-30 rounded-full border-3 border-blue-400 '>

                    <img src={'https://cdn-icons-png.freepik.com/256/15359/15359050.png?semt=ais_white_label'} alt="Profile" />


                </div>

                <p className='text-lg font-semibold md:text-2xl'>{user?.name}</p>

                <button className='py-2  w-full mt-4 rounded-md bg-purple-500'
                    onClick={() => dispatch(logout(false))}>
                    Logout
                </button>

            </div>






        </div>
    )
}

export default UserPage
