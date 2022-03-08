import classes from "../AboutRedberry.module.css";
const CovidRedberry = () => {
  return (
    <section
      className={`${classes["about-redberry"]} ${classes["covid-section"]}`}
    >
      <h1 className={classes.title}>Redberry Covid Policies</h1>
      <p className={classes.description}>
        As this infamous pandemic took over the world, we adjusted our working
        practices so that our employees can be as safe and comfortable as
        possible. We have a hybrid work environment, so you can either work from
        home or visit our lovely office on Sairme Street. If it was up to us, we
        would love you to see us in the office because we think face-to-face
        communications {">"} Zoom meetings. Both on the fun and productivity
        scales.
      </p>
    </section>
  );
};
export default CovidRedberry;
