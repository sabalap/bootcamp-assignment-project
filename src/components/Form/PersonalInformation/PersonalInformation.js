import Pagination from "../../Pagination/Pagination";
import classes from "./PersonalInformation.module.css";

const PersonalInformation = () => {
  return (
    <div className={classes["personal-information"]}>
      <h1 className={classes["question-title"]}>
        Hey, Rocketeer, what are your coordinates?
      </h1>
      <form className={classes["personal-information-form"]}>
        <input className={classes.field} type="text" placeholder="First Name" />
        <input className={classes.field} type="text" placeholder="Last Name" />
        <input className={classes.field} type="text" placeholder="E Mail" />
        <input
          className={classes.field}
          type="text"
          placeholder="+995 5__ __ __ __"
        />
      </form>
      <Pagination />
    </div>
  );
};
export default PersonalInformation;
