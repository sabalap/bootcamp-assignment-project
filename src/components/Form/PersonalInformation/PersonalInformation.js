import { useContext, useEffect, useState } from "react";
import Context from "../../../context/context";
import previousIcon from "../../../assets/Previous.svg";
import nextIcon from "../../../assets/Next.svg";
import classes from "./PersonalInformation.module.css";
const PersonalInformation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [firstNameHasError, setFirstNameHasError] = useState("");
  const [lastNameHasError, setLastNameHasError] = useState("");
  const [emailHasError, setEmailHasError] = useState("");
  const [phoneHasError, setPhoneHasError] = useState("");

  const ctx = useContext(Context);
  const { changePage } = ctx;
  const activeClass = `${classes.point} ${classes.active}`;
  useEffect(() => {
    const saveFirstName = localStorage.getItem("firstName");
    const saveLastName = localStorage.getItem("lastName");
    const saveEmail = localStorage.getItem("email");
    const savePhone = localStorage.getItem("phone");
    if (saveFirstName) {
      setFirstName(saveFirstName);
    }
    if (saveLastName) {
      setLastName(saveLastName);
    }
    if (saveEmail) {
      setEmail(saveEmail);
    }
    if (savePhone) {
      setPhone(savePhone);
    }
  }, []);

  const validateFirstName = () => {
    setFirstNameHasError("");
    if (firstName === "") {
      setFirstNameHasError("* first name is required");
      localStorage.removeItem("firstName");
      return false;
    } else if (firstName.length < 2) {
      setFirstNameHasError("* first name should include 2 or more characters");
      localStorage.removeItem("firstName");
      return false;
    } else {
      localStorage.removeItem("firstName");
      localStorage.setItem("firstName", firstName);
      return true;
    }
  };

  const validateLastName = () => {
    setLastNameHasError("");
    if (lastName === "") {
      setLastNameHasError("* last name is required");
      localStorage.removeItem("lastName");
      return false;
    } else if (lastName.length < 2) {
      setLastNameHasError("* last name should include 2 or more characters");
      localStorage.removeItem("lastName");
      return false;
    } else {
      localStorage.removeItem("lastName");
      localStorage.setItem("lastName", lastName);
      return true;
    }
  };

  const validateEmail = () => {
    setEmailHasError("");
    const emailVal = /\S+@\S+\.\S+/;
    if (email === "") {
      setEmailHasError("* email is required");
      localStorage.removeItem("email");
      return false;
    } else if (!email.match(emailVal)) {
      setEmailHasError("* email is Invalid");
      localStorage.removeItem("email");
      return false;
    } else {
      localStorage.removeItem("email");
      localStorage.setItem("email", email);
      return true;
    }
  };

  const validatePhone = () => {
    const isValidPhone1 = /^\+995\s*5[0-9]{8}$/;
    const isValidPhone2 = /^\+995\s?5[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}$/;
    const isValidPhone3 = /^\+995\s*5[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}$/;
    const isValidPhone4 = /^\+995\s*5[0-9]{2}\s?[0-9]{3}\s?[0-9]{3}$/;
    const isValidPhone5 = /^\+995\s*5[0-9]{2}-[0-9]{3}-[0-9]{3}$/;
    setPhoneHasError("");
    if (phone === "") {
      localStorage.removeItem("phone");
      return true;
    } else if (
      phone.match(isValidPhone1) ||
      phone.match(isValidPhone2) ||
      phone.match(isValidPhone3) ||
      phone.match(isValidPhone4) ||
      phone.match(isValidPhone5)
    ) {
      localStorage.removeItem("phone");
      localStorage.setItem("phone", phone);
      return true;
    } else {
      setPhoneHasError("* phone number is invalid");
      localStorage.removeItem("phone");
      return false;
    }
  };
  const firstNameClass = firstNameHasError ? "invalid" : "";
  const lastNameClass = lastNameHasError ? "invalid" : "";
  const emailClass = emailHasError ? "invalid" : "";
  const phoneClass = phoneHasError ? "invalid" : "";
  const nextPageHandler = () => {
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePhone();
    if (
      validateFirstName() &&
      validateLastName() &&
      validateEmail() &&
      validatePhone()
    ) {
      changePage(2);
    }
  };

  return (
    <section className={classes["personal-information"]}>
      <h1 className="question-title">
        Hey, Rocketeer, what are your coordinates?
      </h1>
      <div className="form">
        <div className="input-container">
          <input
            className={`field ${firstNameClass}`}
            type="text"
            placeholder="First Name"
            onChange={({ target }) => setFirstName(target.value)}
            onBlur={validateFirstName}
            value={firstName}
          />
          {firstNameHasError && <p className="error">{firstNameHasError}</p>}
        </div>
        <div className="input-container">
          <input
            className={`field ${lastNameClass}`}
            type="text"
            placeholder="Last Name"
            onChange={({ target }) => setLastName(target.value)}
            onBlur={validateLastName}
            value={lastName}
          />
          {lastNameHasError && <p className="error">{lastNameHasError}</p>}
        </div>
        <div className="input-container">
          <input
            className={`field ${emailClass}`}
            type="email"
            placeholder="E Mail"
            onChange={({ target }) => setEmail(target.value)}
            onBlur={validateEmail}
            value={email}
          />
          {emailHasError && <p className="error">{emailHasError}</p>}
        </div>
        <div className="input-container">
          <input
            className={`field ${phoneClass}`}
            onChange={({ target }) => setPhone(target.value)}
            value={phone}
            onBlur={validatePhone}
            type="text"
            placeholder="+995 5__ __ __ __"
          />
          {phoneHasError && <p className="error">{phoneHasError}</p>}
        </div>
      </div>
      <div className="pagination">
        <img
          onClick={() => changePage(0)}
          src={previousIcon}
          alt="Previous Arrow"
        />
        <span className="activeClass"></span>
        <span className="point"></span>
        <span className="point"></span>
        <span className="point"></span>
        <span className="point"></span>
        <img onClick={nextPageHandler} src={nextIcon} alt="Next Arrow" />
      </div>
    </section>
  );
};
export default PersonalInformation;
