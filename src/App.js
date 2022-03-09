import { useContext } from "react";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import PersonalInformationPage from "./pages/PersonalInformationPage/PersonalInformationPage";
import TechnicalSkillsetPage from "./pages/TechnicalSkillsetPage/TechnicalSkillsetPage";
import CovidInformationPage from "./pages/CovidInformationPage.js/CovidInformationPage";
import AboutYouPage from "./pages/AboutYouPage/AboutYouPage";
import SubmitForm from "./components/SubmitForm/SubmitForm";
import Context from "./context/context";
import Thanks from "./components/Thanks/Thanks";
import SubmittedApplications from "./components/SubmittedApplications/SubmitedApplications";
const App = () => {
  const { isSubmitted, page } = useContext(Context);
  return (
    <Router>
      <ScrollToTop />
      {isSubmitted && <SubmittedApplications />}
      {page === 0 && !isSubmitted && <Welcome />}
      {page === 1 && <PersonalInformationPage />}
      {page === 2 && <TechnicalSkillsetPage />}
      {page === 3 && <CovidInformationPage />}
      {page === 4 && <AboutYouPage />}
      {page === 5 && <SubmitForm />}
      {page === 6 && <Thanks />}
    </Router>
  );
};

export default App;
