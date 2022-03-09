import React from 'react'
import styles from '../styles/GreyUnderLineText.module.css'

function GreyUnderLineText(props) {
  return (
    <div>
        <button className={styles.button}>{props.text}</button>
    </div>
  )
}

export default GreyUnderLineText