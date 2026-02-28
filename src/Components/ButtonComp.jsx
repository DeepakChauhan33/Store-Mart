import { button } from 'framer-motion/client'
import React from 'react'

const ButtonComp = ({ children }) => {
  return (

    <button className='bg-red-300 text-black py-3 px-4'>
      {children}
    </button>
  )
}

export default ButtonComp
