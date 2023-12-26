"use client"

import { motion } from 'framer-motion';
import React, { createContext } from 'react';

const page = () => {
  return (
    <motion.h1
    initial={{ opacity: 0, y: 40, letterSpacing: '20px' }}
    animate={{ opacity: 1, y: 0, letterSpacing: '0px' }}
    transition={{ duration: 1, ease: 'easeOut' }}
  >
    Here is the todos page of my website
  </motion.h1>
  )
}

export default page