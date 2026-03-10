import { section } from 'framer-motion/client'
import React from 'react'

const LoginPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(456)
    }
    return (

        <section className='bg-gray-100 h-fit  py-14 flex flex-col justify-center items-center'>



            <div className='w-[50%] p-4 bg-white rounded-xl shadow-xl '>


                <div className=' space-y-4 mb-10  px-2'>
                    <h2 className='text-4xl font-bold'>Welcome back</h2>
                    <p className='text-xl '>Welcome back! Please enter your details</p>
                </div>


                <form className='w-full rounded-xl p-4 space-y-6'
                    onSubmit={handleSubmit}
                >
                    <div className='flex flex-col space-y-3'>
                        <label htmlFor="name" className='font-bold'>Email</label>
                        <input type="email" className='px-2 py-3 border border-gray-500 rounded-md' />
                    </div>

                    <div className='flex flex-col space-y-3'>
                        <label htmlFor="name" className='font-bold'>Password</label>
                        <input type="password" className='px-2 py-3 border border-gray-500 rounded-md' />
                    </div>

                    <p className='text-end text-md font-normal  text-blue-700 cursor-pointer '>forget password?</p>

                    <button className=' w-full py-2.5 rounded-md mt-4 bg-blue-400 hover:bg-blue-600/80 cursor-pointer'>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default LoginPage
