import React from 'react';
import MPBigRedText from '../components/MPBigRedText';
import RedButton from '../components/RedButton';
import GreyUnderLineText from '../components/GreyUnderLineText';
import styles from '../styles/StartPageconainer.module.css'
import Head from 'next/head';
import Image from 'next/image'
import rocketman from '../assets/img/rocketman.png'
import Link from 'next/link';




function Startpg() {
    return (
        <div className={styles.background} >
            <Head>
                <title>Welcome Rocketeer !</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <container className={styles.Pageconainer}>
                <MPBigRedText text="Welcome Rocketeer !" />
                <Link href="/PersonalInfo"><a><RedButton text="Start Questionnaire" /></a></Link>
                <GreyUnderLineText text="Submitted Applications" />
                <div className={styles.imageDiv}>
                    <Image  width="100%" height="100%" layout="responsive"  src={rocketman} alt='rocketman.png' />
                </div>
            </container>

        </div>
    )
}

export default Startpg