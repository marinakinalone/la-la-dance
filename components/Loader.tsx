import React from 'react'
import styles from '../styles/Loader.module.scss'


const Loader = () => {
  return (
    <div className={styles.spinner}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
    </div>
  )
}

export default Loader