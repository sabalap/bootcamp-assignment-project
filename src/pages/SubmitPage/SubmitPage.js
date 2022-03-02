import SubmitForm from "../../components/SubmitForm/SubmitForm";
const SubmitPage = (props) => {
  let submitContent;
  if (props.page === 5) {
    submitContent = <SubmitForm />;
  }
  return { submitContent };
};
export default SubmitPage;
