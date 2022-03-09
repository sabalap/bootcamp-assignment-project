import PersonalInformationRedberry from "../../components/AboutRedberry/PersonalInformationRedberry/PersonalInformationRedberry";
import PersonalInformation from "../../components/Form/PersonalInformation/PersonalInformation";
const PersonalInformationPage = (props) => {
  // personal information Page
  return (
    <section className="survey">
      <PersonalInformation />
      <PersonalInformationRedberry />
    </section>
  );
};
export default PersonalInformationPage;
