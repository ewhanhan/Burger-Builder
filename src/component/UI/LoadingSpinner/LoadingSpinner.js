import React from 'react'
import styles from './LoadingSpinner.module.css'

//https://projects.lukehaas.me/css-loaders/
//spinner used online
const LoadingSpinner = () => {
  return (
    <div className={styles.loader}>Loading...</div>
  )
}

export default LoadingSpinner
