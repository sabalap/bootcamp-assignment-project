import { Fragment, useContext } from "react";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import PersonalInformationPage from "./pages/PersonalInformationPage/PersonalInformationPage";
import TechnicalSkillsetPage from "./pages/TechnicalSkillsetPage/TechnicalSkillsetPage";
import CovidInformationPage from "./pages/CovidInformationPage.js/CovidInformationPage";
import AboutYouPage from "./pages/AboutYouPage/AboutYouPage";
import SubmitForm from "./components/SubmitForm/SubmitForm";
import Context from "./context/context";
import Thanks from "./components/Thanks/Thanks";
import SubmittedApplications from "./components/SubmittedApplications/SubmittedApplications";
const App = () => {
  const { isSubmitted, page } = useContext(Context);
  return (
    <Fragment>
      {isSubmitted && <SubmittedApplications />}
      {page === 0 && !isSubmitted && <Welcome />}
      {page === 1 && <PersonalInformationPage />}
      {page === 2 && <TechnicalSkillsetPage />}
      {page === 3 && <CovidInformationPage />}
      {page === 4 && <AboutYouPage />}
      {page === 5 && <SubmitForm />}
      {page === 6 && <Thanks />}
    </Fragment>
  );
};

export default App;
