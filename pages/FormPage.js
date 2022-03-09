import React from 'react';
import BigRedText from '../components/BigRedText';
import styles from '../styles/PersonalInfo.module.css';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright, IoIosRemoveCircleOutline, IoIosArrowDropleft } from "react-icons/io";
import { VscCalendar } from "react-icons/vsc";
import Link from 'next/link';
import TextOnRightSide from '../components/TextOnRightSide';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';

 






function FormPage() {
    
    const [page, setPage] = useState(1);
    function goNextPage() {
        setPage(page => page + 1)
    }
    function goPrevPage() {
        if (page === 1) return;
        setPage(page => page - 1)
    }

    return (
        <div className={styles.page} >
            {page === 1 && <Personalinfo />}
            {page === 2 && <TechnicalSkillset />}
            {page === 3 && <Covid />}
            {page === 4 && "im 4"}
            {page === 5 && "im 5"}


        

            {/* <div className={styles.pageMarkPg3}>
                <a onClick={goPrevPage} className={styles.a}><IoIosArrowDropleft className={styles.left} /></a>
                <div className={page >= 1 ? styles.active : styles.markDot} ></div>
                <div className={page >= 2 ? styles.active : styles.markDot} ></div>
                <div className={page >= 3 ? styles.active : styles.markDot} ></div>
                <div className={page >= 4 ? styles.active : styles.markDot} ></div>
                <div className={page >= 5 ? styles.active : styles.markDot} ></div>
                <a onClick={goNextPage} className={styles.a}><IoIosArrowDropright className={styles.right} /></a>
            </div> */}





        </div>
    );

}

export default FormPage

function Personalinfo() {
    
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
                    <a className={styles.a}><IoIosArrowDropleft className={styles.left} /></a>
                    <div className={styles.active} ></div>
                    <div className={styles.markDot} ></div>
                    <div className={styles.markDot} ></div>
                    <div className={styles.markDot} ></div>
                    <div className={styles.markDot} ></div>
                    <a onClick={goNextPage} className={styles.a}><IoIosArrowDropright className={styles.right} /></a>
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

function TechnicalSkillset() {
    const [fetchedskills, setFetchedSkills] = useState([]);
    const [experience, setExperience] = useState('');
    const [id, setId] = useState('');
    const [skills, setSkills] = useState([]);
    const skillsjsn = JSON.stringify(skills);


    useEffect(() => {
        axios
            .get('https://bootcamp-2022.devtest.ge/api/skills')
            .then((res) => {
                console.log(res);
                setFetchedSkills(res.data);
            })
    }, [])


    const skillWithNum = [
        "HTML", "CSS", "PHP", "Laravel", "React.js", "Vue.js", "Svelte", "Angular"
    ]

    function inputsBtn() {
        console.log(skills);
        if (skills.includes({ id })) {
            alert('the skill is already choosen. Please select another one');
        } else {
            skills.push({ id, experience })
        }
        setSkills([...skills]);
        console.log('siklljsn' + skills);
    }





    return (
        <div className={styles.page}>
            <div className={styles.leftSide}>
                <BigRedText text="Tell us about your skills" className={styles.BigRedText} />
                <div className={styles.optionContent}>
                    <select name="skills"
                        id="skills"
                        placeholder="Skill"
                        className={styles.select} onChange={(e) => setId(e.target.value)} >
                        {
                            fetchedskills.map(skill => (
                                <option value={skill.id} >{skill.title}</option>
                            ))
                        }

                    </select>
                    <div className={styles.inputErorContainer} >
                        <input type="text"
                            name="experience"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            className={styles.skillInput}
                            pattern="[0-9]{1,}"
                            requered="true" />
                        <p className={styles.errorP} >* please Input only numbers</p>
                    </div>
                    <button className={styles.addinputsBtn} onClick={inputsBtn}>Add Programming Language</button>
                </div>
                <div className={styles.outPutcont}>
                    {
                        skills.map(skill => (
                            <ul className={styles.skillUl}>
                                <li className={styles.skillLi} >{skillWithNum[skill.id - 1]} Years of Experience:  {skill.experience}</li>
                                <IoIosRemoveCircleOutline className={styles.removeIcon} />
                            </ul>
                        ))
                    }

                </div>
            </div>

            <div className={styles.rightSide}>
                <div className={styles.content}  >
                    <BigRedText text="A bit about our battles" className={styles.redText} />
                    <TextOnRightSide text="As we said, Redberry has been on the field
                 for quite some time now, and we have touched and embraced a variety
                  of programming languages, technologies, philosophies, and frameworks.
                   We are battle-tested in PHP Laravel Stack with Vue.js, refined in React,
                    and allies with Serverside technologies like Docker and Kubernetes, 
                    and now we have set foot in the web3 industry."/>
                </div>
            </div>
        </div>
    )
}

function Covid() {
    const [work_preference, setWork_preference] = useState('');
    const [had_covid, setHad_covid] = useState('');
    const [had_covid_at, setHad_covid_at] = useState('');
    const [vaccinated, setVaccinated] = useState('');
    const [vaccinated_at, setVaccinated_at] = useState('');
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
                                <input onChange={(e) => setWork_preference(e.target.value)} className={styles.rdobtn}
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
                                <input onChange={(e) => setHad_covid(e.target.value)} className={styles.rdobtn}
                                    type="radio"
                                    name="had_covid"
                                    id="YES"
                                    value="true" />
                                <label for="From Sairme Office" className={styles.Label}>YES</label>
                            </div>
                        </div>
                        <div className={styles.answers}>
                            <div className={styles.inputCont}>
                                <input onChange={(e) => setHad_covid(e.target.value)} className={styles.rdobtn}
                                    type="radio"
                                    name="had_covid"
                                    id="No"
                                    value="false" />
                                <label for="From Sairme Office" className={styles.Label}>NO</label>
                            </div>
                        </div>
                    </div>

                    {/* ...........................როდის შეხვდა კოვიდი.............................. */}

                    <div className={styles.questionDivDate} >
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
                                    type="radio"
                                    name="vaccinated"
                                    id="YES"
                                    value="true" />
                                <label for="From Sairme Office" className={styles.Label}>YES</label>
                            </div>
                        </div>
                        <div className={styles.answers}>
                            <div className={styles.inputCont}>
                                <input onChange={(e) => setVaccinated(e.target.value)} className={styles.rdobtn}
                                    type="radio"
                                    name="vaccinated"
                                    id="No"
                                    value="false" />
                                <label for="From Sairme Office" className={styles.Label}>NO</label>
                            </div>
                        </div>
                    </div>


                    {/* ...........................აცრის თარიღი.............................. */}

                    <div className={styles.questionDivDate} >
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