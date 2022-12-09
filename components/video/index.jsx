import React from 'react'
import styles from '../../styles/Video.module.css'

const Video = () => {
 return (
  <div className={styles.videoBackground}>
   <iframe
    src="https://www.loom.com/embed/3f65f1ad2d264fc2865326bdbbdbab60"
    frameBorder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen
    className={styles.video}>
   </iframe>
  </div>
 )
}


export default Video