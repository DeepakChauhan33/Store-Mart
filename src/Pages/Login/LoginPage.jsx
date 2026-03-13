
import React from 'react'

// HOOKS
import { useSelector } from 'react-redux';



// Components
import LoginForm from './LoginForm';


// ICONS
import { CgProfile } from "react-icons/cg";
import UserPage from './UserPage';


const LoginPage = () => {

    const isLogin = useSelector((state) => state.auth.isLogin)
    return (

        <section className='bg-gray-100 py-14 px-5 flex flex-col justify-center items-center '>

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
