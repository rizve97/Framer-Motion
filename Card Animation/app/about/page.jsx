"use client"

import { motion } from 'framer-motion';
import React, { createContext } from 'react';

const page = () => {

  return (
    <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1, ease: 'easeInOut', staggerChildren: 0.2 }}
    variants={{
      hover: { scale: 1.05, cursor: 'pointer' }
    }}
    whileHover="hover"
  >
      <motion.div initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
        <div className="relative h-[400px] w-[300px] rounded-md">
          <img
            src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Linda Tend</h1>
            <p className="mt-2 text-sm text-gray-300">
              Do whatever you want 
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


export default page