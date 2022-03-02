import TechnicalSkillset from "../../components/Form/TechnicalSkillset/TechnicalSkillset";
import AboutRedberry from "../../components/AboutRedberry/AboutRedberry";

const TechnicalSkillsetPage = (props) => {
  return (
    <section className="survey">
      <TechnicalSkillset />
      {props.page === 2 && <AboutRedberry page={props.page} />}
    </section>
  );
};
export default TechnicalSkillsetPage;
