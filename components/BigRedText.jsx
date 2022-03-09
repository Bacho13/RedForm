import React from 'react'
import styles from '../styles/BigRedText.module.css'

function BigRedText(props) {
  return (
    <div>
        <h1 className={styles.h1}>{props.text}</h1>
    </div>
  )
}

export default BigRedText