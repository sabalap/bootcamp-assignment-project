import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Context from "../../context/context";
import SubmittedApplication from "./SubmitedApplication/SubmittedApplication";
const SubmittedApplications = () => {
  const ctx = useContext(Context);
  const { token } = ctx;
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
    <section className="submited-applications-section">
      <h1>Submitted Applications</h1>
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
    </section>
  );
};
export default SubmittedApplications;
