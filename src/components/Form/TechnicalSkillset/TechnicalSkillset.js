import classes from "./TechnicalSkillset.module.css";
import Pagination from "../../Pagination/Pagination";

const TechnicalSkillset = () => {
  return (
    <section className={classes["technical-skillset"]}>
      <h1 className="question-title">Tell us about your skills</h1>
      <form className="form">
        <select
          placeholder="Skills"
          className={`field ${classes.select}`}
          name="skills"
          id="skills"
        >
          <option className={classes.option} value="Skills" hidden>
            Skills
          </option>
          <option className={classes.option} value=""></option>
          <option className={classes.option} value=""></option>
        </select>
        <input
          type="text"
          className={`field ${classes.duration}`}
          placeholder="Experience Duration in Years"
        />
        <button className={classes["add-btn"]} type="submit">
          Add Programming Language
        </button>
      </form>
      <Pagination />
    </section>
  );
};
export default TechnicalSkillset;
