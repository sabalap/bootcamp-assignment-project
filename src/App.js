import { Fragment, useState } from "react";
import "./App.css";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import PersonalInformationPage from "./pages/PersonalInformationPage/PersonalInformationPage";
import TechnicalSkillsetPage from "./pages/TechnicalSkillsetPage/TechnicalSkillsetPage";
import CovidInformationPage from "./pages/CovidInformationPage.js/CovidInformationPage";
import AboutYouPage from "./pages/AboutYouPage/AboutYouPage";
import SubmitForm from "./components/SubmitForm/SubmitForm";
const App = () => {
  const [page, setPage] = useState(4);
  return (
    <Fragment>
      <WelcomePage />
      <PersonalInformationPage page={page} />
      <TechnicalSkillsetPage page={page} />
      <CovidInformationPage page={page} />
      <AboutYouPage page={page} />
      <SubmitForm page={page} />
    </Fragment>
  );
};

export default App;
