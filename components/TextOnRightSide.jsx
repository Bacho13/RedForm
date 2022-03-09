import React from 'react'
import styles from '../styles/TextOnRightSide.module.css' 

function TextOnRightSide(props) {
  return (
    <div>
      <h1 className={styles.textStyle}>{props.text}</h1>
    </div>
  )
}

export default TextOnRightSide