import React, { useEffect, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Video from '../components/video';

const BottomToTop = ({ children, className }) => {
 const ref = useRef()
 const { scrollY } = useScroll({
 });

 useEffect(() => {
  return scrollY.onChange((latest) => {
   console.log("Page scroll: ", latest)
  })
 }, [])

 return (
  <motion.div
   initial={{ y: 50 }}
   animate={{ y: 0, }}
   transition={{ duration: 3, type: "spring" }}
   style={{ rotateZ: scrollY }}
  >
   {children}
  </motion.div>
 )
}

export default BottomToTop