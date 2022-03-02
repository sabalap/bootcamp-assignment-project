import Pagination from "../../Pagination/Pagination";
import classes from "./PersonalInformation.module.css";

const PersonalInformation = () => {
  return (
    <section className={classes["personal-information"]}>
      <h1 className="question-title">
        Hey, Rocketeer, what are your coordinates?
      </h1>
      <form className="form">
        <input className="field" type="text" placeholder="First Name" />
        <input className="field" type="text" placeholder="Last Name" />
        <input className="field" type="text" placeholder="E Mail" />
        <input className="field" type="text" placeholder="+995 5__ __ __ __" />
      </form>
      <Pagination />
    </section>
  );
};
export default PersonalInformation;
