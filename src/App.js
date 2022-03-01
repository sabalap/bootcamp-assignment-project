import { Fragment } from "react";
import "./App.css";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import PersonalInformationPage from "./pages/PersonalInformationPage/PersonalInformationPage";
import TechnicalSkillsetPage from "./pages/TechnicalSkillsetPage/TechnicalSkillsetPage";
const App = () => {
  return (
    <Fragment>
      <WelcomePage />
      <PersonalInformationPage />
      <TechnicalSkillsetPage />
    </Fragment>
  );
};

export default App;
