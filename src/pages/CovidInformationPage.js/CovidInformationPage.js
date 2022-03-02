import CovidInformation from "../../components/Form/CovidInformation/CovidInformation";
import AboutRedberry from "../../components/AboutRedberry/AboutRedberry";

const CovidInformationPage = (props) => {
  return (
    <section className="survey">
      <CovidInformation />
      {props.page === 3 && <AboutRedberry page={props.page} />}
    </section>
  );
};
export default CovidInformationPage;
