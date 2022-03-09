import { Link } from "react-router-dom";
import classes from "./Welcome.module.css";
import rocketmanImg from "../../assets/rocketman.png";
import { useContext } from "react";
import Context from "../../context/context";
const Welcome = () => {
  const ctx = useContext(Context);
  const { changePage, submitedHandler } = ctx;
  return (
    <section className={classes["start-section"]}>
      <h1 className={classes["welcome-text"]}>Welcome Rocketeer!</h1>
      <button className={classes["start-btn"]} onClick={() => changePage(1)}>
        Start Questionnaire
      </button>
      <h4
        onClick={submitedHandler}
        className={classes["submitted-applications"]}
      >
        Submitted Applications
      </h4>
      <img src={rocketmanImg} alt="RocketMan" />
    </section>
  );
};
export default Welcome;
