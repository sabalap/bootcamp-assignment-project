import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Context from "../../context/context";
import SubmitedApplication from "./SubmitedApplication/SubmitedApplication";
const SubmitedApplications = () => {
  const ctx = useContext(Context);
  const { token } = ctx;
  let [submitedApplications, setSubmitedApplications] = useState([]);
  let [skills, setSkills] = useState([]);
  useEffect(() => {
    setSkills((skills = []));
    setSubmitedApplications((submitedApplications = []));
    axios
      .get(`https://bootcamp-2022.devtest.ge/api/applications?token=${token}`)
      .then((res) =>
        setSubmitedApplications(submitedApplications.concat(res.data))
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
        {submitedApplications.length > 0 &&
          submitedApplications.map((i, index) => (
            <SubmitedApplication
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
export default SubmitedApplications;
