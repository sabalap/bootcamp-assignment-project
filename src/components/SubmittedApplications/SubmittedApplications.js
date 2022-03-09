import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Context from "../../context/context";
import SubmittedApplication from "../SubmittedApplications/SubmittedApplication/SubmittedApplication";
import classes from "./SubmittedApplication/SubmittedApplication.module.css";
const SubmittedApplications = () => {
  const ctx = useContext(Context);
  const { token, backHandler } = ctx;
  let [submittedApplications, setSubmittedApplications] = useState([]);
  let [skills, setSkills] = useState([]);
  useEffect(() => {
    setSkills((skills = []));
    setSubmittedApplications((submittedApplications = []));
    axios
      .get(`https://bootcamp-2022.devtest.ge/api/applications?token=${token}`)
      .then((res) =>
        setSubmittedApplications(submittedApplications.concat(res.data))
      )
      .catch((error) => console.log(error));
    axios
      .get("https://bootcamp-2022.devtest.ge/api/skills")
      .then((res) => setSkills(skills.concat(res.data)))
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className={classes["submitted-container"]}>
      <h1 className={classes["submitted-title"]}>Submitted Applications</h1>
      <div>
        {submittedApplications.length > 0 &&
          submittedApplications.map((i, index) => (
            <SubmittedApplication
              key={index}
              data={i}
              index={index}
              skills={skills}
            />
          ))}
      </div>
      <button className={classes.back} onClick={backHandler}>
        Back
      </button>
    </section>
  );
};
export default SubmittedApplications;
