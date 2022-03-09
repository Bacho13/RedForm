import React from 'react'
import { useState, useEffect } from 'react';
import BigRedText from '../components/BigRedText';
import styles from '../styles/Covid.module.css';
import { VscCalendar } from "react-icons/vsc";
import TextOnRightSide from '../components/TextOnRightSide';
import Link from 'next/link';
import { IoIosArrowDropright, IoIosRemoveCircleOutline, IoIosArrowDropleft } from "react-icons/io";

function Covid() {
    const [work_preference, setWork_preference] = useState('');
    const [had_covid, setHad_covid] = useState(false);

    const [had_covid_at, setHad_covid_at] = useState('');
    const [vaccinated, setVaccinated] = useState(false);
    const [vaccinated_at, setVaccinated_at] = useState('');

    function changeHedCovidState() {
        setHad_covid(had_covid);
        console.log({ had_covid })
    }
    function changeVactinatedState() {
        setVaccinated(vaccinated);
        console.log({ vaccinated })
    }
    function showCons() {

        const covid = { work_preference, had_covid, had_covid_at, vaccinated, vaccinated_at }
        const covidjsn = JSON.stringify(covid);

        console.log(covidjsn);
    }
    return (
        <div className={styles.page}>


            <div className={styles.covidLeftSide}>
                <BigRedText text="Covid Stuff" className={styles.BigRedText} />
                <form className={styles.covidForm}>

                    {/* ...........................საიდან სურს მუშაობა.............................. */}

                    <div className={styles.questionDiv}>
                        <p className={styles.question}>how would you prefer to work?</p>
                        <div className={styles.answers}>
                            <div className={styles.inputCont}>
                                <input onChange={(e) => setWork_preference(e.target.value)}
                                    className={styles.rdobtn}
                                    type="radio"
                                    name="work_preference"
                                    id="From Sairme Office"
                                    value="From Sairme Office" />
                                <label for="From Sairme Office" className={styles.Label}>From Sairme Office</label>
                            </div>

                            <div className={styles.inputCont}>
                                <input onChange={(e) => setWork_preference(e.target.value)} className={styles.rdobtn}
                                    type="radio"
                                    name="work_preference"
                                    id="From Home"
                                    value="From Home" />
                                <label for="From Home" className={styles.Label}>From Home</label>
                            </div>

                            <div className={styles.inputCont}>
                                <input onChange={(e) => setWork_preference(e.target.value)} className={styles.rdobtn}
                                    type="radio"
                                    name="work_preference"
                                    id="Hybrid"
                                    value="Hybrid" />
                                <label for="Hybrid" className={styles.Label}>Hybrid</label>
                            </div>
                        </div>
                    </div>

                    {/* ...........................ჰქონდა თუა რა კოვიდი.............................. */}

                    <div className={styles.questionDiv}>
                        <p className={styles.question}>Did you contact covid 19? :(</p>
                        <div className={styles.answers}>
                            <div className={styles.inputCont}>
                                <input onChange={(e) => setHad_covid(e.target.value)}
                                    className={styles.rdobtn}
                                    onClick={changeHedCovidState}
                                    type="radio"
                                    name="had_covid"
                                    id="YES"
                                    value="true" />
                                <label for="From Sairme Office" className={styles.Label}>Yes</label>
                            </div>
                        </div>
                        <div className={styles.answers}>
                            <div className={styles.inputCont}>
                                <input onChange={(e) => setHad_covid(e.target.value)} 
                                className={styles.rdobtn}
                                    onClick={changeHedCovidState}
                                    type="radio"
                                    name="had_covid"
                                    id="No"
                                    value="false" />
                                <label for="From Sairme Office" className={styles.Label}>No</label>
                            </div>
                        </div>
                    </div>

                    {/* ...........................როდის შეხვდა კოვიდი.............................. */}

                    <div className={had_covid === "true" ? styles.questionDivDate : styles.remove}  >
                        <p className={styles.question}>When?</p>
                        <input onChange={(e) => setHad_covid_at(e.target.value)}
                            value={had_covid_at}
                            name='had_covid_at'
                            className={styles.dateInput}
                            id="date" type="date"
                            placeholder="date" />
                        <label for="date"><VscCalendar className={styles.covidCalendar} /></label>
                    </div>

                    {/* ...........................არის თუ არა აცრილი.............................. */}

                    <div className={styles.questionDiv}>
                        <p className={styles.question}>Have you been vaccinated?</p>
                        <div className={styles.answers}>
                            <div className={styles.inputCont}>
                                <input onChange={(e) => setVaccinated(e.target.value)} className={styles.rdobtn}
                                    onClick={changeVactinatedState}
                                    type="radio"
                                    name="vaccinated"
                                    id="YES"
                                    value="true" />
                                <label for="From Sairme Office" className={styles.Label}>yes</label>
                            </div>
                        </div>
                        <div className={styles.answers}>
                            <div className={styles.inputCont}>
                                <input onChange={(e) => setVaccinated(e.target.value)} className={styles.rdobtn}
                                    onClick={changeVactinatedState}
                                    type="radio"
                                    name="vaccinated"
                                    id="No"
                                    value="false" />
                                <label for="From Sairme Office" className={styles.Label}>No</label>
                            </div>
                        </div>
                    </div>


                    {/* ...........................აცრის თარიღი.............................. */}

                    <div className={vaccinated=== "true" ? styles.questionDivDate : styles.remove} >
                        <p className={styles.question}>When did you get your last covid vaccine?</p>
                        <input onChange={(e) => setVaccinated_at(e.target.value)}
                            value={vaccinated_at}
                            name='vaccinated_at'
                            className={styles.dateInput}
                            id="vaccinated_at" type="date"
                        />
                        <label for="vaccinated_at"><VscCalendar className={styles.covidCalendar} /></label>
                    </div>

                </form>
                <div className={styles.pageMark}>
                    <Link href="/TechnicalSkillset" ><a className={styles.a}><IoIosArrowDropleft className={styles.left} /></a></Link>
                    <div className={styles.active} ></div>
                    <div className={styles.active} ></div>
                    <div className={styles.active} ></div>
                    <div className={styles.markDot} ></div>
                    <div className={styles.markDot} ></div>
                    <Link href="/Insights" ><a className={styles.a}><IoIosArrowDropright className={styles.right} /></a></Link>
                </div>
                <button onClick={showCons}>cons</button>

            </div>

            <div className={styles.covidRightSide}>
                <div className={styles.content}  >
                    <BigRedText text="Redberry Covid Policies" className={styles.redText} />
                    <TextOnRightSide text="As this infamous pandemic took over the world, we
                     adjusted our working practices so that our employees can be as safe and
                      comfortable as possible. We have a hybrid work environment, so you can 
                      either work from home or visit our lovely office on Sairme Street. If it 
                      was up to us, we would love you to see us in the office because we think
                       face-to-face communications > Zoom meetings. Both on the fun and productivity
                        scales.  "/>
                </div>
            </div>

        </div>
    )
}

export default Covid