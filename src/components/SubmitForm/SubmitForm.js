import classes from "./SubmitForm.module.css";
const SubmitForm = () => {
  return (
    <section className={classes["submit-section"]}>
      <div className={classes["submit-content"]}>
        <button className={classes.submit}>Submit</button>
        <h4 className={classes.back}>go back</h4>
      </div>
    </section>
  );
};
export default SubmitForm;
