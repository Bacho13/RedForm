import React from 'react'
import styles from '../styles/MPBigRedText.module.css'

function MPBigRedText(props) {
  return (
    <div>
        <h1 className={styles.h1}>{props.text}</h1>
    </div>
  )
}

export default MPBigRedText