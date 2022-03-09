import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from '../styles/SkillsDropDown.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import FormInput from '../components/FormInput';


function SkillsDropDown(props) {


  const [skills, setSkills] = useState([])



  useEffect(() => {
    axios
      .get('https://bootcamp-2022.devtest.ge/api/skills')
      .then((res) => {
        console.log(res);
        setSkills(res.data);
      })
  }, [])





  const [value, setValue] = useState('');


  const handleChange = (e) => {
    setValue(e.target.value);
  };


  const [year, setYear] = useState('');
  
   const [inputedSkills, setInputedSkills] = useState([]);




  const handleYear = (e) => {
    setYear(e.target.value);
  };
  
  

    const logBoth = () => {
  
      if (year === '' || value === '') {
        alert('Please fill both input field');
      } else {
        inputedSkills.push({skill: value, year: year })
        console.log('selected skill : ' + value);
        console.log('slected year : ' + year);
        
        console.log(inputedSkills);
      }   
    }
    useEffect(() => {
      setInputedSkills(inputedSkills);
    }, [inputedSkills]);
 
  
    const removeSkill = (e) => {
      setInputedSkills(inputedSkills.filter(skill => {
             return e.target.name != skill.skill 
      } ))

    }
  
  
  
  
  return (
    <div>
      <div className={styles.inputContainer} >
        <div className={styles.selectStyle}>

          <select id="skills" name='skills' className={styles.select} onChange={handleChange} placeholder="choose skiil" requered>
            {skills.map(skill => (
              <option placeholder='skills' key={skill.id} className={styles.option} >{skill.title}</option>
            ))}
          </select>
          <IoIosArrowDown className={styles.dropDownIcon} />
        </div>
        <input
          name='year'
          placeholder='Experience Duration in Years'
          title='Please input only number'
          type='number'
          onChange={handleYear}
          className={styles.numberInput}
          pattern="[0-9]{1,}"

          requered="true" />

        <button disabled={props.isDisable} className={styles.button} onClick={logBoth} >Add Programming Language</button>
      </div>


      {inputedSkills.map(skill => (
      <div key={skill.id} className={styles.resultDiv} name = {skill.skill} onClick={removeSkill()}>
        <p className={styles.resultText}> {skill.skill}    Years of Experience:{skill.year}  </p>
        <IoIosRemoveCircleOutline className={styles.removeIcon}  />
      </div>
      ))}


    </div>
  )
}

export default SkillsDropDown