import classes from "./Welcome.module.css";
import rocketmanImg from "../../assets/rocketman.png";
const Welcome = () => {
  return (
    <section className={classes["start-section"]}>
      <h1 className={classes["welcome-text"]}>Welcome Rocketeer!</h1>
      <button className={classes["start-btn"]}>Start Questionnaire</button>
      <h4 className={classes["submitted-applications"]}>
        Submitted Applications
      </h4>
      <img src={rocketmanImg} alt="RocketMan" />
    </section>
  );
};
export default Welcome;
