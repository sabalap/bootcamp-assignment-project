import classes from "./PersonalInformationPage.module.css";
import AboutRedberry from "../../components/AboutRedberry/AboutRedberry";
import PersonalInformation from "../../components/Form/PersonalInformation/PersonalInformation";
const PersonalInformationPage = () => {
  return (
    <section className={classes["personal-information-page"]}>
      <PersonalInformation />
      <AboutRedberry />
    </section>
  );
};
export default PersonalInformationPage;
