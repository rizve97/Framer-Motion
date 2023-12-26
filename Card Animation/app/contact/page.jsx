"use client"
import React, { createContext } from 'react';
import { motion } from 'framer-motion';


const page = () => {
  return (

       <motion.h1
  initial={{ opacity: 0, y: 40, letterSpacing: '20px' }}
  animate={{ opacity: 1, y: 0, letterSpacing: '0px' }}
  transition={{ duration: 1, ease: 'easeOut' }}
>
  Here is the contact page
</motion.h1>
  )
}

export default page