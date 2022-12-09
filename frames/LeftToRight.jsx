import React from 'react'
import { motion } from 'framer-motion'

const LeftToRight = ({ children, className }) => {
 return (
  <motion.div
   initial={{ x: -30 }}
   animate={{ x: 0 }}
   transition={{ duration: 3, type: "spring" }}
  >
   {children}
  </motion.div>
 )
}

export default LeftToRight