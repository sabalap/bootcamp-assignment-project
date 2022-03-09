import classes from "./SubmitForm.module.css";
import { useContext } from "react";
import Context from "../../context/context";
const SubmitForm = () => {
  const ctx = useContext(Context);
  const { changePage, handleSubmit, removeUser } = ctx;
  const prevPageHandler = () => {
    removeUser();
    changePage(4);
  };
  return (
    <section className={classes["submit-section"]}>
      <div className={classes["submit-content"]}>
        <button className={classes.submit} onClick={handleSubmit}>
          Submit
        </button>
        <h4 className={classes.back} onClick={prevPageHandler}>
          go back
        </h4>
      </div>
    </section>
  );
};
export default SubmitForm;
