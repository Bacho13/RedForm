import React from 'react'
import GreyUnderLineText from '../components/GreyUnderLineText';
import RedButton from '../components/RedButton'
import styles from '../styles/Submit.module.css';
import Link from 'next/link';

function Submit() {
  return (
    <div className={styles.page}>
        <RedButton text="Submit"  className={styles.redButton} />
        <Link href="/Startpg"><a><GreyUnderLineText text="go back"/></a></Link>
        
    </div>
  )
}

export default Submit