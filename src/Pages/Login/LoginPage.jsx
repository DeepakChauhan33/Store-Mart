import { section } from 'framer-motion/client'
import React from 'react'

const LoginPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(456)
    }
    return (

        <section className='h-fit flex flex-col justify-center items-center py-14 '>

            <div className=' w-[50%] space-y-6 mb-10  px-2'>
                <h2 className='text-4xl font-bold'>Welcome back</h2>
                <p className='text-xl '>Welcome back! Please enter your details</p>
            </div>


            <form className='w-full md:w-[50%] shadow-2xl rounded-xl p-4 space-y-6'
                onSubmit={handleSubmit}
            >
                <div className='flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Name' className='px-2 py-3 border' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Name' className='px-2 py-3 border' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Name' className='px-2 py-3 border' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Name' className='px-2 py-3 border' />
                </div>

                <button className='border w-full py-2.5 rounded-md'>
                    Submit
                </button>
            </form>
        </section>
    )
}

export default LoginPage
