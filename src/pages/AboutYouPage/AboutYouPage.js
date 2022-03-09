import RedberrianInsights from "../../components/AboutRedberry/RedberrianInsights/RedberrianInsights";
import AboutYou from "../../components/Form/AboutYou/AboutYou";

const AboutYouPage = (props) => {
  // About you page
  return (
    <section className="survey">
      <AboutYou />
      <RedberrianInsights />
    </section>
  );
};
export default AboutYouPage;
