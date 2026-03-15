
import React from 'react'

// HOOKS
import { useSelector } from 'react-redux';



// Components
import LoginForm from './LoginForm';


// ICONS
import { CgProfile } from "react-icons/cg";
import UserPage from './UserPage';
import { div, section } from 'framer-motion/client';


const LoginPage = () => {

    const isLogin = useSelector((state) => state.auth.isLogin)

    return (

        <section
            className={`bg-gray-100 h-fit     flex flex-col justify-center items-center ${isLogin ? " " : "px-4 py-6"}  `} >

            {isLogin ?
                (
                    <UserPage />
                )

                :

                (
                    <LoginForm />
                )

            }


        </section>
    )
}

export default LoginPage
