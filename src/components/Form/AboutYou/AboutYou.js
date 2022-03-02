import Pagination from "../../Pagination/Pagination";
import classes from "./AboutYou.module.css";
const AboutYou = () => {
  return (
    <section className={classes["about-section"]}>
      <h1 className="question-title">What about you?</h1>
      <form className="form">
        <div className={classes["form-control"]}>
          <p className={classes.question}>
            Would you attend Devtalks and maybe also organize your own?
          </p>
          <div className={classes.options}>
            <input type="radio" id="yes" value="yes" />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className={classes.options}>
            <input type="radio" id="no" value="no" />
            <label htmlFor="no">No</label>
          </div>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="devtalk" className={classes.question}>
            What would you speak about at Devtalk?
          </label>
          <textarea
            name="devtalk"
            id="devtalk"
            placeholder="I would..."
          ></textarea>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="special" className={classes.question}>
            Tell us something special
          </label>
          <textarea name="special" id="special" placeholder="I..."></textarea>
        </div>
      </form>
      <Pagination />
    </section>
  );
};
export default AboutYou;
