import { Fragment, useContext } from "react";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import PersonalInformationPage from "./pages/PersonalInformationPage/PersonalInformationPage";
import TechnicalSkillsetPage from "./pages/TechnicalSkillsetPage/TechnicalSkillsetPage";
import CovidInformationPage from "./pages/CovidInformationPage.js/CovidInformationPage";
import AboutYouPage from "./pages/AboutYouPage/AboutYouPage";
import SubmitForm from "./components/SubmitForm/SubmitForm";
import Context from "./context/context";
const App = () => {
  const {
    isSubmited,
    token,
    page,
    changePage,
    handleSubmit,
    createUser,
    submitedHandler,
    removeUserObj,
  } = useContext(Context);
  return (
    <Fragment>
      {page === 0 && !isSubmited && <Welcome />}
      {/* <PersonalInformationPage />
      <TechnicalSkillsetPage />
      <CovidInformationPage />
      <AboutYouPage />
      <SubmitForm /> */}
    </Fragment>
  );
};

export default App;
