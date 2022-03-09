import CovidRedberry from "../../components/AboutRedberry/CovidRedberry/CovidRedberry";
import CovidInformation from "../../components/Form/CovidInformation/CovidInformation";

const CovidInformationPage = (props) => {
  // covid Page
  return (
    <section className="survey">
      <CovidInformation />
      <CovidRedberry />
    </section>
  );
};
export default CovidInformationPage;
