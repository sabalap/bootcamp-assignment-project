import AboutRedberry from "../../components/AboutRedberry/AboutRedberry";
import AboutYou from "../../components/Form/AboutYou/AboutYou";

const AboutYouPage = (props) => {
  return (
    <section className="survey">
      <AboutYou />
      {props.page === 4 && <AboutRedberry page={props.page} />}
    </section>
  );
};
export default AboutYouPage;
