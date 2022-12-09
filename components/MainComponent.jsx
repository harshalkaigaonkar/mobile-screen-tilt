import React, { useState } from 'react'
import BottomToTop from '../frames/BottomToTop'
import PhoneFrame from './PhoneFrame'
import Video from './video'

const MainComponent = () => {
 const [show, setShow] = useState(false)


 return (
  <BottomToTop style={{
   "display": "flex",
   "flexDirection": "row",
   "justifyContent": "center",
   "alignItems": "center",
   "width": "100%",
  }}>
   <PhoneFrame />
  </BottomToTop>
 )
}

export default MainComponent