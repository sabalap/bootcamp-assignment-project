import { Link } from "react-router-dom";
import classes from "./Welcome.module.css";
import rocketmanImg from "../../assets/rocketman.png";
const Welcome = (props) => {
  return (
    <section className={classes["start-section"]}>
      <h1 className={classes["welcome-text"]}>Welcome Rocketeer!</h1>
      <Link to="/personalInfo">
        <button className={classes["start-btn"]} onClick={props.onNextPage}>
          Start Questionnaire
        </button>
      </Link>
      <h4 className={classes["submitted-applications"]}>
        Submitted Applications
      </h4>
      <img src={rocketmanImg} alt="RocketMan" />
    </section>
  );
};
export default Welcome;
