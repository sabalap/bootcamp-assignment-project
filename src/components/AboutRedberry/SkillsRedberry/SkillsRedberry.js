import classes from "../AboutRedberry.module.css";
const SkillsRedbery = () => {
  return (
    <section className={classes["about-redberry"]}>
      <h1 className={classes.title}>A bit about our battles</h1>
      <p className={classes.description}>
        As we said, Redberry has been on the field for quite some time now, and
        we have touched and embraced a variety of programming languages,
        technologies, philosophies, and frameworks. We are battle-tested in PHP
        Laravel Stack with Vue.js, refined in React, and allies with Serverside
        technologies like Docker and Kubernetes, and now we have set foot in the
        web3 industry.
      </p>
    </section>
  );
};
export default SkillsRedbery;
