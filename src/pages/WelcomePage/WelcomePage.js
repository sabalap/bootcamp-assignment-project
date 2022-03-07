import Welcome from "../../components/Welcome/Welcome";
const WelcomePage = (props) => {
  return <Welcome onNextPage={props.onNextPage} />;
};
export default WelcomePage;
