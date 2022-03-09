import React, { useState } from "react";
import axios from "axios";
const Context = React.createContext({
  page: 0,
  isSubmitted: false,
  token: "",
  user: null,
  changePage: (pageN) => {},
  submittedHandler: () => {},
  createUser: () => {},
  removeUserObj: () => {},
  handleSubmit: () => {},
  backHandler: () => {},
});

export const ContextProvider = (props) => {
  const [page, setPage] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(null);
  const [token, setToken] = useState("466cc652-44c8-4131-a6de-e107874f37b1");
  const [user, setUser] = useState(null);
  const changePage = (pageN) => {
    setPage(pageN);
  };
  const submittedHandler = () => {
    setIsSubmitted(true);
  };
  const backHandler = () => {
    setIsSubmitted(false);
  };
  const clearStorage = () => {
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("skills");
    localStorage.removeItem("had_covid");
    localStorage.removeItem("had_covid_at");
    localStorage.removeItem("work_preference");
    localStorage.removeItem("vaccinated");
    localStorage.removeItem("vaccinated_at");
    localStorage.removeItem("devtalk");
    localStorage.removeItem("devtalk_topic");
    localStorage.removeItem("something_special");
  };
  const createUser = () => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    const skills = JSON.parse(localStorage.getItem("skills"));
    const workPreference = localStorage.getItem("work_preference");
    const covid = JSON.parse(localStorage.getItem("had_covid"));
    const covidDate = localStorage.getItem("had_covid_at");
    const vac = JSON.parse(localStorage.getItem("vaccinated"));
    const vaccinatedDate = localStorage.getItem("vaccinated_at");
    const devTalk = JSON.parse(localStorage.getItem("devtalk"));
    const devTalkAbout = localStorage.getItem("devtalk_topic");
    const smthSpecial = localStorage.getItem("something_special");
    const userObj = {
      token: token,
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone ? phone : "no phone",
      skills: skills,
      work_preference: workPreference,
      had_covid: covid,
      vaccinated: vac,
      will_organize_devtalk: devTalk,
      something_special: smthSpecial,
    };
    if (covid === true) {
      userObj.had_covid_at = covidDate;
    }
    if (vac === true) {
      userObj.vaccinated_at = vaccinatedDate;
    }
    if (devTalk === true) {
      userObj.devtalk_topic = devTalkAbout;
    }
    setUser(userObj);
  };
  const removeUserObj = () => {
    setUser(null);
  };
  const handleSubmit = () => {
    if (user) {
      axios
        .post("https://bootcamp-2022.devtest.ge/api/application", user)
        .then((res) => {
          setUser(null);
          clearStorage();
          setPage(6);
          setTimeout(() => {
            setPage(0);
          }, 3000);
        })
        .catch((error) => console.log(error));
    } else {
      return;
    }
  };
  return (
    <Context.Provider
      value={{
        page: page,
        isSubmitted: isSubmitted,
        user: user,
        changePage: changePage,
        submittedHandler: submittedHandler,
        createUser: createUser,
        removeUserObj: removeUserObj,
        handleSubmit: handleSubmit,
        token: token,
        backHandler: backHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default Context;
