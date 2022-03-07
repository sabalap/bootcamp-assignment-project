import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import PersonalInformationPage from "./pages/PersonalInformationPage/PersonalInformationPage";
import TechnicalSkillsetPage from "./pages/TechnicalSkillsetPage/TechnicalSkillsetPage";
import CovidInformationPage from "./pages/CovidInformationPage.js/CovidInformationPage";
import AboutYouPage from "./pages/AboutYouPage/AboutYouPage";
import SubmitForm from "./components/SubmitForm/SubmitForm";
const App = () => {
  const [page, setPage] = useState(0);
  const nextPageHandler = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const previousPageHandler = () => {
    setPage((prevPage) => prevPage - 1);
  };
  return (
    <Switch>
      <Route path="/" exact>
        <WelcomePage onNextPage={nextPageHandler} />
      </Route>
      <Route path="/personalInfo">
        <PersonalInformationPage
          onPreviousPage={previousPageHandler}
          onNextPage={nextPageHandler}
          page={page}
        />
      </Route>
      <Route path="/skillsPage">
        <TechnicalSkillsetPage page={page} />
      </Route>
      <Route path="/covidInfo">
        <CovidInformationPage page={page} />
      </Route>
      <Route path="/aboutYou">
        <AboutYouPage page={page} />
      </Route>
      <Route path="/submit">
        <SubmitForm page={page} />
      </Route>
    </Switch>
  );
};

export default App;
