import classes from "./SubmitForm.module.css";
import { Link } from "react-router-dom";
const SubmitForm = () => {
  return (
    <section className={classes["submit-section"]}>
      <div className={classes["submit-content"]}>
        <button className={classes.submit}>Submit</button>
        <Link to="">
          <h4 className={classes.back}>go back</h4>
        </Link>
      </div>
    </section>
  );
};
export default SubmitForm;
