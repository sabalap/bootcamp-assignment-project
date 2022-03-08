import useInput from "../../../hooks/use-input";
import Pagination from "../../Pagination/Pagination";
import classes from "./PersonalInformation.module.css";
const isFname = (value) => value.trim().length >= 2;
const isLname = (value) => value.trim().length >= 2;
const isEmail = (value) =>
  value.includes("@") && value.length >= 2 && value.includes(".");
const isPhone = (value) => value.startsWith("+995") && value.length === 13;
const PersonalInformation = () => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput(isFname);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput(isLname);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);
  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
  } = useInput(isPhone);
  let formIsValid;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const firstNameClass = firstNameHasError ? "invalid" : "";
  const lastNameClass = lastNameHasError ? "invalid" : "";
  const emailClass = emailHasError ? "invalid" : "";
  const phoneClass = phoneHasError ? "invalid" : "";
  let firstNameWarning;
  if (firstNameHasError && firstNameValue.trim().length < 1) {
    firstNameWarning = <p className="error">* first name is required</p>;
  }
  if (
    firstNameHasError &&
    firstNameValue.trim().length > 0 &&
    firstNameValue.trim().length < 2
  ) {
    firstNameWarning = (
      <p className="error">* first name should include 2 or more characters</p>
    );
  }
  let lastNameWarning;
  if (lastNameHasError && lastNameValue.trim().length < 1) {
    lastNameWarning = <p className="error">* last name is required</p>;
  }
  if (
    lastNameHasError &&
    lastNameValue.trim().length > 0 &&
    lastNameValue.trim().length < 2
  ) {
    lastNameWarning = (
      <p className="error">* last name should include 2 or more characters</p>
    );
  }
  let emailWarning;
  if (emailHasError && emailValue.trim().length < 1) {
    emailWarning = <p className="error">* email is required</p>;
  }
  if (emailHasError && emailValue.trim().length >= 1) {
    emailWarning = <p className="error">* email is Invalid</p>;
  }

  return (
    <section className={classes["personal-information"]}>
      <h1 className="question-title">
        Hey, Rocketeer, what are your coordinates?
      </h1>
      <form className="form">
        <div className="input-container">
          <input
            className={`field ${firstNameClass}`}
            type="text"
            placeholder="First Name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
          />
          {firstNameWarning}
        </div>
        <div className="input-container">
          <input
            className={`field ${lastNameClass}`}
            type="text"
            placeholder="Last Name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
          />
          {lastNameWarning}
        </div>
        <div className="input-container">
          <input
            className={`field ${emailClass}`}
            type="email"
            placeholder="E Mail"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
          />
          {emailWarning}
        </div>
        <div className="input-container">
          <input
            className={`field ${phoneClass}`}
            onChange={phoneChangeHandler}
            value={phoneValue}
            onBlur={phoneBlurHandler}
            type="text"
            placeholder="+995 5__ __ __ __"
          />
          {phoneHasError && <p className="error">number is invalid</p>}
        </div>
      </form>
      <Pagination formValid={formIsValid} />
    </section>
  );
};
export default PersonalInformation;
