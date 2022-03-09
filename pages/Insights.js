import React from 'react'
import styles from '../styles/Insights.module.css';
import BigRedText from '../components/BigRedText';
import TextOnRightSide from '../components/TextOnRightSide';
import Link from 'next/link';
import { IoIosArrowDropright, IoIosRemoveCircleOutline, IoIosArrowDropleft } from "react-icons/io";
import { useState } from 'react';

function Insights() {

    const [will_organize_devtalk, setWill_organize_devtalk] = useState(false);
    const [devtalk_topic, setDevtalk_topic] = useState('');
    const [something_special, setSomething_special] = useState('');


    function changeWillOrganiza() {
        setWill_organize_devtalk(will_organize_devtalk);
        console.log({ will_organize_devtalk })
    }

    function show () {
        console.log({will_organize_devtalk, devtalk_topic, something_special});
    }

    return (
        <div className={styles.page}>


            <div className={styles.leftSide}>
                <BigRedText text="What about you?" className={styles.BigRedText} />
                <div className={styles.pageContent}>
                    <div className={styles.questionDiv}>
                        <p className={styles.question}>Would you attend Devtalks and maybe also organize your own?</p>
                        <div className={styles.answers}>
                            <div className={styles.inputCont}>
                                <input onChange={(e) => setWill_organize_devtalk(e.target.value)}
                                    className={styles.rdobtn}
                                    onClick={changeWillOrganiza}
                                    type="radio"
                                    name="will_organize_devtalk"
                                    id="YES"
                                    value="true" />
                                <label for="From Sairme Office" className={styles.Label}>Yes</label>
                            </div>
                        </div>
                        <div className={styles.answers}>
                            <div className={styles.inputCont}>
                                <input onChange={(e) => setWill_organize_devtalk(e.target.value)}
                                    className={styles.rdobtn}
                                    onClick={changeWillOrganiza}
                                    type="radio"
                                    name="will_organize_devtalk"
                                    id="NO"
                                    value="false" />
                                <label for="From Sairme Office" className={styles.Label}>No</label>
                            </div>
                        </div>
                    </div>

                    <div  className={ will_organize_devtalk === "true" ?  styles.devTalkinput : styles.remove } >

                        <p className={styles.question}>Would you attend Devtalks and maybe also organize your own?</p>
                        <textarea name="" 
                        id="" cols="30" 
                        rows="10" 
                        onChange={(e) => setDevtalk_topic(e.target.value)}
                        className={styles.textArea} 
                        required='true'
                        value={devtalk_topic} 
                        placeholder='I would...'
                        pattern=".{8,}"></textarea>
                        <p className={styles.textareaEror}>* Please write about ur topic</p>
                    </div>
                    
                    <div className={styles.devTalkinput} >

                        <p className={styles.question}>Tell us something special</p>
                        <textarea name="" 
                        id="" cols="30" 
                        rows="10" 
                        onChange={(e) => setSomething_special(e.target.value)}
                        className={styles.textArea} 
                        required='true'
                        value={something_special} 
                        placeholder='I...'
                        pattern=".{8,}"></textarea>
                    </div>

                    <button onClick={show} >btn</button>




                </div>

                <div className={styles.pageMark}>
                    <Link href="/Covid" ><a className={styles.a}><IoIosArrowDropleft className={styles.left} /></a></Link>
                    <div className={styles.active} ></div>
                    <div className={styles.active} ></div>
                    <div className={styles.active} ></div>
                    <div className={styles.active} ></div>
                    <div className={styles.markDot} ></div>
                    <Link href="/Submit" ><a className={styles.a}><IoIosArrowDropright className={styles.right} /></a></Link>
                </div>



            </div>

            <div className={styles.rightSide}>
                <div className={styles.content}  >
                    <BigRedText text="Redberrian Insights" className={styles.redText} />
                    <TextOnRightSide text="We were soo much fun before the pandemic started! 
                    Parties almost every weekend and lavish employee birthday celebrations! Unfortunately,
                     covid ruined that fun like it did almost everything else in the world. But we try our
                      best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and 
                      lead developers talk about topics they are passionate about. Previous topics have included
                       Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join 
                       our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!"/>
                </div>
            </div>

        </div>
    )


}


export default Insights