import React from 'react'
import { useState, useEffect } from 'react';
import styles from '../styles/PersonalInfo.module.css';
import BigRedText from '../components/BigRedText';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright, IoIosRemoveCircleOutline } from "react-icons/io";
import Link from 'next/link';
import TextOnRightSide from '../components/TextOnRightSide';




function PersonalInfo() {
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [disableRightbtn, setDisableRightBtn] = useState(true)







    return (
        <div className={styles.page}>


            <div className={styles.leftSide}>
                <BigRedText text="Hey, Rocketeer, what are your coordinates?" className={styles.BigRedText} />
                <form className={styles.form} >
                    <div className={styles.fNameInputcont}>
                        <input className={styles.input}
                            type="text"
                            name='Fname'
                            placeholder='First Name'
                            title="First Name - Please input 2 or more letters"
                            pattern="[A-Za-z]{2,}"
                            value={first_name}
                            onChange={(e) => setFirst_name(e.target.value)}
                            required="true" />
                        <p>* first name is required. Please use atleast 2 letters</p>
                    </div>

                    <div className={styles.lNameInputcont}>
                        <input className={styles.input}
                            type="text"
                            name='lName'
                            placeholder='Last Name'
                            title="Last Name - Please input 2 or more letters"
                            pattern="[A-Za-z]{2,}"
                            value={last_name}
                            onChange={(e) => setLast_name(e.target.value)}
                            required="true" />
                        <p className={styles.errorPLname} >* last name is required. Please use atleast 2 letters</p>
                    </div>

                    <div className={styles.emailInputcont}>
                        <input className={styles.input}
                            type="text"
                            placeholder='E MAIL'
                            title="E mail - Please input your E-mail need to be included '@' "
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required="true" />
                        <p className={styles.errorPEmail} >* email  is required. Please use valid email </p>
                    </div>


                    <div className={styles.phoneInputcont}>
                        <input className={styles.input}
                            type="text"
                            name='mobileNumber'
                            placeholder='+995 5________'
                            title="Mobile phone -  please enter a valid phone number , Should start on +995 5--------"
                            pattern="[+9955]+[0-9]{8}"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required="true" />
                        <p className={styles.errorPPhone} >* phone number is required. Please use valid format </p>
                    </div>
                </form>
                <div className={styles.pageMark}>
                    <Link href="/Startpg" ><a className={styles.a}><IoIosArrowDropleft className={styles.left} /></a></Link>
                    <div className={styles.active} ></div>
                    <div className={styles.markDot} ></div>
                    <div className={styles.markDot} ></div>
                    <div className={styles.markDot} ></div>
                    <div className={styles.markDot} ></div>
                   <Link  href="/TechnicalSkillset" ><a className={styles.a}><IoIosArrowDropright className={styles.right} /></a></Link>
                </div>





            </div>

            <div className={styles.rightSide}>
                <div className={styles.content}  >
                    <BigRedText text="Redberry Origins" className={styles.redText} />
                    <TextOnRightSide text="You watch “What? Where? When?” Yeah.
                 Our founders used to play it. That’s where they got a question about a
                  famous American author and screenwriter Ray Bradbury. Albeit, our CEO
                   Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at
                    that moment, a name for a yet to be born company was inspired - Redberry 😇"/>
                </div>
            </div>

        </div>
    )


}

export default PersonalInfo