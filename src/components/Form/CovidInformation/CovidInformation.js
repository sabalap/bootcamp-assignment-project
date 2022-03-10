import React, { useState, useEffect, useContext } from "react";
import classes from "./CovidInformation.module.css";
import Context from "../../../context/context";
import previousIcon from "../../../assets/Previous.svg";
import nextIcon from "../../../assets/Next.svg";
const CovidInformation = () => {
  const ctx = useContext(Context);
  const { changePage } = ctx;
  const [workPreference, setWorkPreference] = useState("");
  const [covid, setCovid] = useState("");
  const [covidDate, setCovidDate] = useState("");
  const [vaccinated, setVaccinated] = useState("");
  const [vaccinatedDate, setVaccinatedDate] = useState("");

  const [workPreferenceError, setWorkPreferenceError] = useState("");
  const [covidError, setCovidError] = useState("");
  const [covidDateError, setCovidDateError] = useState("");
  const [vaccinatedError, setVaccinatedError] = useState("");
  const [vaccinatedDateError, setVaccinatedDateError] = useState("");
  useEffect(() => {
    const saveWork = localStorage.getItem("work_preference");
    const saveCovid = localStorage.getItem("had_covid");
    const saveCovidDate = localStorage.getItem("had_covid_at");
    const saveVaccinated = localStorage.getItem("vaccinated");
    const saveVaccinatedDate = localStorage.getItem("vaccinated_at");
    if (saveWork) {
      setWorkPreference(saveWork);
    }
    if (saveCovid) {
      setCovid(JSON.parse(saveCovid));
    }
    if (saveCovidDate) {
      setCovidDate(saveCovidDate);
    }
    if (saveVaccinated) {
      setVaccinated(JSON.parse(saveVaccinated));
    }
    if (saveVaccinatedDate) {
      setVaccinatedDate(saveVaccinatedDate);
    }
  }, []);
  const nextPageHandler = (page) => {
    setWorkPreference("");
    setCovidError("");
    setCovidDateError("");
    setVaccinatedError("");
    setVaccinatedDateError("");

    if (page === 4) {
      if (workPreference === "") {
        setWorkPreferenceError("* select work preference");
      } else if (covid === "") {
        setCovidError("* this field is required");
      } else if (covid === true && covidDate === "") {
        setCovidDateError("* select covid date");
      } else if (vaccinated === "") {
        setVaccinatedError("* this field is required");
      } else if (vaccinated === true && vaccinatedDate === "") {
        setVaccinatedDateError("* select vaccinated date");
      } else {
        localStorage.setItem("work_preference", workPreference);
        localStorage.setItem("had_covid", covid);
        localStorage.setItem("vaccinated", vaccinated);
        if (covidDate !== "") {
          localStorage.setItem("had_covid_at", covidDate);
        } else {
          localStorage.removeItem("had_covid_at");
        }
        if (vaccinatedDate !== "") {
          localStorage.setItem("vaccinated_at", vaccinatedDate);
        } else {
          localStorage.removeItem("vaccinated_at");
        }
        changePage(page);
      }
    } else {
      if (workPreference !== "") {
        localStorage.setItem("work_preference", workPreference);
      } else {
        localStorage.removeItem("work_preference");
      }

      if (covid !== "") {
        localStorage.setItem("had_covid", covid);
      } else {
        localStorage.removeItem("had_covid");
      }

      if (vaccinated !== "") {
        localStorage.setItem("vaccinated", vaccinated);
      } else {
        localStorage.removeItem("vaccinated");
      }

      if (covidDate !== "") {
        localStorage.setItem("had_covid_at", covidDate);
      } else {
        localStorage.removeItem("had_covid_at");
      }

      if (vaccinatedDate !== "") {
        localStorage.setItem("vaccinated_at", vaccinatedDate);
      } else {
        localStorage.removeItem("vaccinated_at");
      }
      changePage(page);
    }
  };
  const covidHandler = (val) => {
    if (val === "yes") {
      setCovid(true);
    } else {
      setCovid(false);
      setCovidDate("");
    }
  };
  const vaccinatedHandler = (val) => {
    if (val === "yes") {
      setVaccinated(true);
    } else {
      setVaccinated(false);
      setCovidDate("");
    }
  };
  return (
    <section className={classes["covid-information"]}>
      <h1 className={`question-title ${classes["covid-stuff"]}`}>
        Covid Stuff
      </h1>
      <div className="form">
        <div className={classes["form-control"]}>
          <div>
            <p className={classes.question}>how would you prefer to work?</p>
            {workPreferenceError && (
              <p className="error error-place">{workPreferenceError}</p>
            )}
          </div>
          <form onChange={({ target }) => setWorkPreference(target.value)}>
            <div className={classes.options}>
              <input
                name="work_preference"
                type="radio"
                id="office"
                value="from_office"
                checked={workPreference === "from_office" ? true : false}
                onChange={({ target }) => console.log(target.value)}
              />
              <label htmlFor="office">From Sairme Office</label>
            </div>
            <div className={classes.options}>
              <input
                name="work_preference"
                type="radio"
                id="home"
                value="from_home"
                checked={workPreference === "from_home" ? true : false}
                onChange={({ target }) => console.log(target.value)}
              />
              <label htmlFor="home">From Home</label>
            </div>
            <div className={classes.options}>
              <input
                name="work_preference"
                type="radio"
                id="hybrid"
                value="hybrid"
                checked={workPreference === "hybrid" ? true : false}
                onChange={({ target }) => console.log(target.value)}
              />
              <label htmlFor="hybrid">Hybrid</label>
            </div>
          </form>
        </div>
        <div className={classes["form-control"]}>
          <p className={classes.question}>Did you contact covid 19? :(</p>
          {covidError && <p className="error error-place2">{covidError}</p>}
          <form onChange={({ target }) => covidHandler(target.value)}>
            <div className={classes.options}>
              <input
                name="had_covid"
                type="radio"
                id="covid-yes"
                value="yes"
                checked={covid === true ? true : false}
                onChange={({ target }) => console.log(target.value)}
              />
              <label htmlFor="covid-yes">Yes</label>
            </div>
            <div className={classes.options}>
              <input
                name="had_covid"
                type="radio"
                id="covid-no"
                value="no"
                checked={covid === false ? true : false}
                onChange={({ target }) => console.log(target.value)}
              />
              <label htmlFor="covid-no">No</label>
            </div>
          </form>
        </div>
        <div className={`${covid ? "form-control" : "hidden"}`}>
          <p className={classes.question}>When?</p>
          {covidDateError && (
            <p className="error error-place2">{covidDateError}</p>
          )}
          <input
            className={`field ${classes["date-input"]}`}
            placeholder={covidDate !== "" ? covidDate : "Date"}
            onChange={({ target }) => setCovidDate(target.value)}
            value={covidDate}
            type="date"
          />
        </div>
        <div className={classes["form-control"]}>
          <p className={classes.question}>Have you been vaccinated?</p>
          {vaccinatedError && (
            <p className="error error-place2">{vaccinatedError}</p>
          )}
          <form onChange={({ target }) => vaccinatedHandler(target.value)}>
            <div className={classes.options}>
              <input
                name="vaccinated"
                type="radio"
                id="vaccinated-yes"
                value="yes"
                checked={vaccinated === true ? true : false}
                onChange={({ target }) => console.log(target.value)}
              />
              <label htmlFor="vaccinated-yes">Yes</label>
            </div>
            <div className={classes.options}>
              <input
                name="vaccinated"
                type="radio"
                id="vaccinated-no"
                value="no"
                checked={vaccinated === false ? true : false}
                onChange={({ target }) => console.log(target.value)}
              />
              <label htmlFor="vaccinated-no">No</label>
            </div>
          </form>
        </div>
        <div className={`${vaccinated ? "form-control" : "hidden"}`}>
          <p className={classes.question}>
            When did you get your last covid vaccine?
          </p>
          {vaccinatedDateError && (
            <p className="error error-place2">{vaccinatedDateError}</p>
          )}
          <input
            className={`field ${classes["date-input"]}`}
            placeholder={vaccinatedDate !== "" ? vaccinatedDate : "Date"}
            type="date"
            onChange={({ target }) => setVaccinatedDate(target.value)}
            value={vaccinatedDate}
          />
        </div>
      </div>
      <div className="pagination">
        <img
          onClick={() => nextPageHandler(2)}
          src={previousIcon}
          alt="Previous Arrow"
        />
        <span className="activeClass" onClick={() => nextPageHandler(1)}></span>
        <span className="activeClass" onClick={() => nextPageHandler(2)}></span>
        <span className="activeClass"></span>
        <span className="point"></span>
        <span className="point"></span>
        <img
          onClick={() => nextPageHandler(4)}
          src={nextIcon}
          alt="Next Arrow"
        />
      </div>
    </section>
  );
};
export default CovidInformation;
