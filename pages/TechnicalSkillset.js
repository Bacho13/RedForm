import React from 'react'
import styles from '../styles/technicalSkillset.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import BigRedText from '../components/BigRedText';
import Link from 'next/link';
import { IoIosArrowDropright, IoIosRemoveCircleOutline, IoIosArrowDropleft } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import TextOnRightSide from '../components/TextOnRightSide';
import SkillsDropDown from '../components/skillsDropDown';
import FormInput from '../components/FormInput';





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

    function inputsBtn(e) {
        if (skills.includes({ id })) {
            alert('the skill is already choosen. Please select another one');
        } else {
            skills.push({ id, experience })
        }
        setSkills([...skills]);
        console.log(skills);
    }



    








    return (
        <div className={styles.page}>
            <div className={styles.leftSide}>
                <BigRedText text="Tell us about your skills" className={styles.BigRedText} />
                <div className={styles.optionContent}>
                    <div className={styles.skillOptionDiv} >
                        <select
                            name="skills"
                            id="skills"
                            placeholder="Skill"
                            className={styles.select} onChange={(e) => setId(e.target.value)} >
                            <option value="" disabled selected>Skills</option>
                            {
                                fetchedskills.map(skill => (
                                    <option key={skill.id} value={skill.id} >{skill.title}</option>
                                ))
                            }

                        </select>
                        <RiArrowDownSLine className={styles.iconInSkillDropDown} />
                    </div>
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
                            <div key={skill.id}>

                                <ul className={styles.skillUl}>
                                    <li className={styles.skillLi} >{skillWithNum[skill.id - 1]} Years of Experience:  {skill.experience}</li>
                                </ul>
                                <IoIosRemoveCircleOutline onClick={RemoveSkill(skill.id)} className={styles.removeIcon} />
                            </div>
                        ))
                    }

                </div>

                <div className={styles.pageMark}>
                    <Link href="/PersonalInfo" ><a className={styles.a}><IoIosArrowDropleft className={styles.left} /></a></Link>
                    <div className={styles.active} ></div>
                    <div className={styles.active} ></div>
                    <div className={styles.markDot} ></div>
                    <div className={styles.markDot} ></div>
                    <div className={styles.markDot} ></div>
                    <Link href="/Covid" ><a className={styles.a}><IoIosArrowDropright className={styles.right} /></a></Link>
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

export default TechnicalSkillset