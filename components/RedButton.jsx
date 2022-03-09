import React from 'react'
import styles from '../styles/RedButton.module.css'

function RedButton(props) {
  return (
    <div>
        <button className={styles.button}>{props.text}</button>
    </div>
  )
}

export default RedButton