import React from 'react'
import styles from '../styles/FormInput.module.css' 

function FormInput(props) {
  return (
    <div>
        <input className={styles.FormInput} type={props.type} placeholder={props.placeholder} name={props.name} id={props.id} pattern={props.pattern} 
               title={props.title}  input={props.input}/>
    </div>
  )
  
}



export default FormInput