import React, { useState, useEffect, useContext } from "react";
import classes from "./AboutYou.module.css";
import Context from "../../../context/context";
import previousIcon from "../../../assets/Previous.svg";
import nextIcon from "../../../assets/Next.svg";

const AboutYou = () => {
  const ctx = useContext(Context);
  const { changePage, createUser } = ctx;
  const [devTalk, setDevTalk] = useState("");
  const [devTalkTopic, setDevTalkTopic] = useState("");
  const [smthSpecial, setSmthSpecial] = useState("");

  const [devTalkError, setDevTalkError] = useState("");
  const [devTalkTopicError, setDevTalkTopicError] = useState("");
  const [smthSpecialError, setSmthSpecialError] = useState("");
  useEffect(() => {
    const saveDevTalk = localStorage.getItem("devtalk");
    const saveDevTopic = localStorage.getItem("devtalk_topic");
    const saveSomeSpecial = localStorage.getItem("something_special");

    if (saveDevTalk) {
      setDevTalk(JSON.parse(saveDevTalk));
    }
    if (saveDevTopic) {
      setDevTalkTopic(saveDevTopic);
    }
    if (saveSomeSpecial) {
      setSmthSpecial(saveSomeSpecial);
    }
  }, []);
  const nextPageHandler = (pageNum) => {
    setDevTalkError("");
    setDevTalkTopicError("");
    setSmthSpecialError("");
    if (pageNum === 5) {
      if (devTalk === "") {
        setDevTalkError("* this field is required");
      } else if (devTalk === true && devTalkTopic === "") {
        setDevTalkTopicError("* this field is required");
      } else if (smthSpecial === "") {
        setSmthSpecialError("* this field is required");
      } else {
        localStorage.removeItem("devtalk");
        localStorage.setItem("devtalk", JSON.stringify(devTalk));
        localStorage.removeItem("devtalk_topic");
        localStorage.setItem("devtalk_topic", devTalkTopic);
        localStorage.removeItem("something_special");
        localStorage.setItem("something_special", smthSpecial);
        createUser();
        changePage(pageNum);
      }
    } else {
      if (devTalk !== "") {
        localStorage.removeItem("devtalk");
        localStorage.setItem("devtalk", JSON.stringify(devTalk));
      } else {
        localStorage.removeItem("devtalk");
      }
      if (devTalkTopic !== "") {
        localStorage.removeItem("devtalk_topic");
        localStorage.setItem("devtalk_topic", devTalkTopic);
      } else {
        localStorage.removeItem("devtalk_topic");
      }
      if (smthSpecial !== "") {
        localStorage.removeItem("something_special");
        localStorage.setItem("something_special", smthSpecial);
      } else {
        localStorage.removeItem("something_special");
      }
      changePage(pageNum);
    }
  };

  const devTalkHandler = (val) => {
    if (val === "yes") {
      setDevTalk(true);
    } else {
      setDevTalk(false);
    }
  };

  return (
    <section className={classes["about-section"]}>
      <h1 className="question-title">What about you?</h1>
      <div className="form">
        <div className={classes["form-control"]}>
          <p className={classes.question}>
            Would you attend Devtalks and maybe also organize your own?
          </p>
          {devTalkError && <p className="error">{devTalkError}</p>}
          <form onChange={({ target }) => devTalkHandler(target.value)}>
            <div className={classes.options}>
              <input
                id="devtalk_yes"
                name="devtalk"
                type="radio"
                value="yes"
                checked={devTalk === true ? true : false}
                onChange={({ target }) => console.log(target.value)}
              />
              <label htmlFor="devtalk_yes">Yes</label>
            </div>
            <div className={classes.options}>
              <input
                id="devtalk_no"
                name="devtalk"
                type="radio"
                value="no"
                checked={devTalk === false ? true : false}
                onChange={({ target }) => console.log(target.value)}
              />
              <label htmlFor="devtalk_no">No</label>
            </div>
          </form>
        </div>
        <div
          className={`${devTalk === true ? classes["form-control"] : "hidden"}`}
        >
          <p className={classes.question}>
            What would you speak about at Devtalk?
          </p>
          {devTalkTopicError && <p className="error">{devTalkTopicError}</p>}
          <textarea
            placeholder="I would..."
            onChange={({ target }) => setDevTalkTopic(target.value)}
            value={devTalkTopic}
          ></textarea>
        </div>
        <div className={classes["form-control"]}>
          <p className={classes.question}>Tell us something special</p>
          {smthSpecialError && <p className="error">{smthSpecialError}</p>}
          <textarea
            placeholder="I..."
            onChange={({ target }) => setSmthSpecial(target.value)}
            value={smthSpecial}
          ></textarea>
        </div>
      </div>
      <div className="pagination">
        <img
          onClick={() => nextPageHandler(3)}
          src={previousIcon}
          alt="Previous Arrow"
        />
        <span className="activeClass" onClick={() => nextPageHandler(1)}></span>
        <span className="activeClass" onClick={() => nextPageHandler(2)}></span>
        <span className="activeClass" onClick={() => nextPageHandler(3)}></span>
        <span className="activeClass"></span>
        <span className="point"></span>
        <img
          onClick={() => nextPageHandler(5)}
          src={nextIcon}
          alt="Next Arrow"
        />
      </div>
    </section>
  );
};
export default AboutYou;
