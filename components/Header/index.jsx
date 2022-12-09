import Image from 'next/image'
import React from 'react'
import LeftToRight from '../../frames/leftToRight'
import styles from '../../styles/Header.module.css'

const ImageUrl = "https://quriverse.com/static/media/LogoTextWhite.21bc485c.png"

const Header = () => {
 return (
  <LeftToRight className={styles.main}>
   <div style={{
    "margin": "20px",
   }}>
    <Image src={ImageUrl} alt="Logo" width='200' height='50' />
   </div>
  </LeftToRight>
 )
}


export default Header