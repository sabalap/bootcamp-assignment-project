import { useState } from "react";
import arrowUp from "../../../assets/arrowUp.svg";
import arrowDown from "../../../assets/arrowDown.svg";
import calendar from "../../../assets/calendar.svg";
import classes from "./SubmittedApplication.module.css";
const SubmitedApplication = ({ data, index, skills }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={classes["submitted-application"]}>
      <div
        className={classes["submitted-header"]}
        style={{ cursor: "pointer" }}
        onClick={() => setShow(!show)}
      >
        {index + 1}
        <img src={show ? arrowUp : arrowDown} alt="arrow" />
      </div>
      <div
        className={classes["submitted-content"]}
        style={{ display: show ? "flex" : "none" }}
      >
        <div className={classes["submitted-left-div"]}>
          <div
            className={`${classes["submitted-info"]} ${classes["inner-div"]}`}
          >
            <p className={classes["submitted-p"]}>Personal Information</p>
            <div>
              <p className={classes["label-title"]}>First Name</p>
              <p className={classes["label-value"]}>{data.first_name}</p>
            </div>
            <div>
              <p className={classes["label-title"]}>Last Name</p>
              <p className={classes["label-value"]}>{data.last_name}</p>
            </div>
            <div>
              <p className={classes["label-title"]}>Email</p>
              <p className={classes["label-value"]}>{data.email}</p>
            </div>
            <div style={{ display: data.phone ? "" : "none" }}>
              <p className={classes["label-title"]}>Phone</p>
              <p className={classes["label-value"]}>
                {data.phone ? data.phone : ""}
              </p>
            </div>
          </div>
          <div
            className={`${classes["submitted-covid"]} ${classes["inner-div"]}`}
          >
            <p className={classes["submitted-p"]}>Covid Situation</p>
            <div>
              <p>how would you prefer to work?</p>
              <form>
                <div>
                  <input
                    type="radio"
                    disabled
                    checked={data.work_preference === "from_office" && true}
                  />
                  <label>From Sairme Office</label>
                </div>

                <div>
                  <input
                    type="radio"
                    disabled
                    checked={data.work_preference === "from_home" && true}
                  />
                  <label>From Home</label>
                </div>

                <div>
                  <input
                    type="radio"
                    disabled
                    checked={data.work_preference === "hybrid" && true}
                  />
                  <label>Hybrid</label>
                </div>
              </form>
            </div>

            <div>
              <p>Did you have covid 19?</p>
              <form>
                <div>
                  <input
                    type="radio"
                    disabled
                    checked={data.had_covid === true && true}
                  />
                  <label>Yes</label>
                </div>

                <div>
                  <input
                    type="radio"
                    disabled
                    checked={data.had_covid === false && true}
                  />
                  <label>No</label>
                </div>
              </form>
            </div>

            <div
              className={classes["date-container"]}
              style={{ display: data.had_covid ? "flex" : "none" }}
            >
              <p>When did you have covid 19?</p>
              <input
                type="date"
                disabled
                className={classes["date-input"]}
                value={data.had_covid_at ? data.had_covid_at : ""}
              />
              <img src={calendar} alt="calendar" />
            </div>

            <div>
              <p>Have you been vaccinated?</p>
              <form>
                <div>
                  <input
                    type="radio"
                    disabled
                    checked={data.vaccinated === true && true}
                  />
                  <label>Yes</label>
                </div>

                <div>
                  <input
                    type="radio"
                    disabled
                    checked={data.vaccinated === false && true}
                  />
                  <label>No</label>
                </div>
              </form>
            </div>

            <div
              className={classes["date-container"]}
              style={{ display: data.vaccinated ? "flex" : "none" }}
            >
              <p>When did you get covid vaccine?</p>
              <input
                type="date"
                disabled
                value={data.vaccinated_at ? data.vaccinated_at : ""}
                className={classes["date-input"]}
              />
              <img src={calendar} alt="calendar" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className={classes["submitted-right-div"]}>
          <div
            className={`${classes["submitted-skills"]} ${classes["inner-div"]}`}
          >
            <p className={classes["submitted-p"]}>Skillset</p>
            <div>
              {data.skills.map((i, index) => {
                return (
                  <div
                    className={classes["submitted-skills-list-container"]}
                    key={index}
                  >
                    <p>
                      {skills.length !== 0
                        ? skills.find((skill) => skill.id === i.id).title
                        : ""}
                    </p>
                    <p>Years of Experience: {i.experience}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={`${classes["submitted-insigts"]} ${classes["inner-div"]}`}
          >
            <p className={classes["submitted-p"]}>Insigts</p>
            <div>
              <p>Would you attend Devtalks and maybe also organize your own?</p>
              <form>
                <div>
                  <input
                    type="radio"
                    disabled
                    checked={data.will_organize_devtalk && true}
                  />
                  <label>Yes</label>
                </div>
                <div>
                  <input
                    type="radio"
                    disabled
                    checked={!data.will_organize_devtalk && true}
                  />
                  <label>No</label>
                </div>
              </form>
            </div>
            <div style={{ display: data.will_organize_devtalk ? "" : "none" }}>
              <p>What would you speak about at Devtalk?</p>
              <textarea
                disabled
                value={data.will_organize_devtalk ? data.devtalk_topic : ""}
              />
            </div>
            <div>
              <p>Tell us somthing special</p>
              <textarea disabled value={data.something_special} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubmitedApplication;
