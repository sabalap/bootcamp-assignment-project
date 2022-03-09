import React, { useState, useEffect, useContext } from "react";
import classes from "./TechnicalSkillset.module.css";
import axios from "axios";
import Context from "../../../context/context";
import removeSkillIcon from "../../../assets/Remove.svg";
import previousIcon from "../../../assets/Previous.svg";
import nextIcon from "../../../assets/Next.svg";
const TechnicalSkillset = () => {
  const ctx = useContext(Context);
  const { changePage } = ctx;
  let [skillsArr, setSkillsArr] = useState([]);
  let [skills, setSkills] = useState([]);
  let [skill, setSkill] = useState("");
  let [experience, setExperience] = useState("");
  let [skillError, setSkillError] = useState("");
  let [experienceErr, setExperinceErr] = useState("");
  useEffect(() => {
    setSkillsArr((skillsArr = []));
    const saveSkillsArr = localStorage.getItem("skills");
    if (saveSkillsArr) {
      setSkills((skills = []));
      setSkills(skills.concat(JSON.parse(saveSkillsArr)));
    }
    axios
      .get("https://bootcamp-2022.devtest.ge/api/skills")
      .then((res) => setSkillsArr(skillsArr.concat(res.data)))
      .catch((error) => console.log(error));
  }, []);
  const pageHandler = (pageNum) => {
    if (pageNum === 1) {
      localStorage.removeItem("skills");
      localStorage.setItem("skills", JSON.stringify(skills));
      changePage(pageNum);
    } else {
      if (skills.length === 0) {
        setSkillError("* select skills");
      } else {
        localStorage.removeItem("skills");
        localStorage.setItem("skills", JSON.stringify(skills));
        changePage(pageNum);
      }
    }
  };
  const addHandler = (e) => {
    e.preventDefault();
    const experienceVal1 = /^[0-9]{1}$/;
    const experienceVal2 = /^[0-9]{2}$/;
    setSkillError("");
    setExperinceErr("");
    if (!skill) {
      setSkillError("* select skills");
    } else if (experience === "") {
      setExperinceErr("* add experience");
    } else if (
      experience.match(experienceVal1) ||
      experience.match(experienceVal2)
    ) {
      const skillObj = skillsArr.find((i) => i.title === skill);
      if (skills.find((i) => i.id === skillObj.id)) {
        setSkillError("* already selected");
        setSkill("");
        setExperience("");
      } else {
        const newSkillObj = {
          id: skillObj.id,
          title: skillObj.title,
          experience: experience,
        };
        setSkills(skills.concat(newSkillObj));
        setSkill("");
        setExperience("");
      }
    } else {
      setExperinceErr("* invalid experience");
    }
  };
  const removeSkill = (id) => {
    const newSkillsArr = skills.filter((i) => i.id !== id);
    setSkills(newSkillsArr);
  };
  return (
    <section className={classes["technical-skillset"]}>
      <h1 className="question-title">Tell us about your skills</h1>
      <form className="form">
        <select
          placeholder="Skills"
          className={`field ${classes.select}`}
          name="skills"
          id="skills"
          onChange={({ target }) => setSkill(target.value)}
          value={skill ? skill : "skillDefault"}
        >
          <option value="skillDefault" disabled hidden>
            Skills
          </option>
          {skillsArr.length !== 0 &&
            skillsArr.map((i) => {
              return (
                <option key={i.id} className={classes.option}>
                  {i.title}
                </option>
              );
            })}
        </select>
        {skillError && <p className="error">{skillError}</p>}
        <input
          type="text"
          className={`field ${classes.duration}`}
          placeholder="Experience Duration in Years"
          onChange={({ target }) => setExperience(target.value)}
          value={experience}
        />
        {experienceErr && <p className="error">{experienceErr}</p>}
        <button
          className={classes["add-btn"]}
          type="submit"
          onClick={addHandler}
        >
          Add Programming Language
        </button>
      </form>
      <div className={classes["skills-container"]}>
        {skills.length !== 0 &&
          skills.map((i) => {
            return (
              <div key={i.id} className={classes.skill}>
                <div>
                  <p>{i.title}</p>
                  <p>Years of Experince: {i.experience}</p>
                </div>
                <img
                  src={removeSkillIcon}
                  onClick={() => removeSkill(i.id)}
                  alt="remove Icon"
                />
              </div>
            );
          })}
      </div>
      <div className="pagination">
        <img
          onClick={() => pageHandler(1)}
          src={previousIcon}
          alt="Previous Arrow"
        />
        <span className="activeClass"></span>
        <span className="activeClass"></span>
        <span className="point"></span>
        <span className="point"></span>
        <span className="point"></span>
        <img src={nextIcon} onClick={() => pageHandler(3)} alt="Next Arrow" />
      </div>
    </section>
  );
};
export default TechnicalSkillset;
