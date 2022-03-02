import classes from "./CovidInformation.module.css";
import Pagination from "../../Pagination/Pagination";
const CovidInformation = () => {
  const inputDateTransform = (e) => {
    e.currentTarget.type = "date";
  };
  return (
    <section className={classes["covid-information"]}>
      <h1 className={`question-title ${classes["covid-stuff"]}`}>
        Covid Stuff
      </h1>
      <form className="form">
        <div className={classes["form-control"]}>
          <div>
            <p className={classes.question}>how would you prefer to work?</p>
          </div>
          <div className={classes.options}>
            <input type="radio" id="from office" value="From Sairme Office" />
            <label htmlFor="from office">From Sairme Office</label>
          </div>
          <div className={classes.options}>
            <input type="radio" id="from home" value="From Home" />
            <label htmlFor="from home">From Home</label>
          </div>
          <div className={classes.options}>
            <input type="radio" id="hybrid" value="hybrid" />
            <label htmlFor="hybrid">Hybrid</label>
          </div>
        </div>
        <div className={classes["form-control"]}>
          <p className={classes.question}>Did you contact covid 19? :(</p>
          <div className={classes.options}>
            <input type="radio" id="covid19-yes" value="covid19-yes" />
            <label htmlFor="covid19-yes">Yes</label>
          </div>
          <div className={classes.options}>
            <input type="radio" id="covid19-no" value="covid19-no" />
            <label htmlFor="covid19-no">No</label>
          </div>
        </div>
        <div className={classes["form-control"]}>
          <p className={classes.question}>When?</p>
          <input
            className={`field ${classes["date-input"]}`}
            placeholder="Date"
            type="text"
            onFocus={inputDateTransform}
          />
        </div>
        <div className={classes["form-control"]}>
          <p className={classes.question}>Have you been vaccinated?</p>
          <div className={classes.options}>
            <input type="radio" id="vaccinated-yes" value="vaccinated-yes" />
            <label htmlFor="vaccinated-yes">Yes</label>
          </div>
          <div className={classes.options}>
            <input type="radio" id="vaccinated-no" value="vaccinated-no" />
            <label htmlFor="vaccinated-no">No</label>
          </div>
        </div>
        <div className={classes["form-control"]}>
          <p className={classes.question}>
            When did you get your last covid vaccine?
          </p>
          <input
            className={`field ${classes["date-input"]}`}
            placeholder="Date"
            type="text"
            onFocus={inputDateTransform}
          />
        </div>
      </form>
      <Pagination />
    </section>
  );
};
export default CovidInformation;
