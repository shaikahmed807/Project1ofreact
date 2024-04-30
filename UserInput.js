import classess from "./UserInput.module.css";
import { useState } from "react";
const intializer = {
  "current-savings": 0,
  "yearly-contribution": 0,
  "expected-return": 0,
  duration: 0,
};

const UserInput = (props) => {
  const [userInput, SetUserInput] = useState(intializer);
  const submithandler = (event) => {
    event.preventDefault();

    props.onCalculate(userInput);
  };
  const resetHandler = () => {
    SetUserInput(intializer);
  };
  const changehandler = (input, value) => {
    SetUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };
  return (
    <form onSubmit={submithandler} className={classess.form}>
      <div className={classess["input-group"]}>
        <p>
          <label htmlFor="current-savings"> Current Savings($) </label>{" "}
          <input
            onChange={(event) =>
              changehandler("current-savings", event.target.value)
            }
            a
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>{" "}
        <p>
          <label htmlFor="yearly-contribution"> Yearly Savings($) </label>{" "}
          <input
            onChange={(event) =>
              changehandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>{" "}
      </div>{" "}
      <div className={classess["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest( % , per year){" "}
          </label>{" "}
          <input
            onChange={(event) =>
              changehandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>{" "}
        <p>
          <label htmlFor="duration"> Investment Duration(years) </label>{" "}
          <input
            onChange={(event) => changehandler("duration", event.target.value)}
            value={userInput["duration"]}
            type="number"
            id="duration"
          />
        </p>{" "}
      </div>{" "}
      <p className={classess["actions"]}>
        <button
          onClick={resetHandler}
          type="reset"
          className={classess["buttonAlt"]}
        >
          Reset{" "}
        </button>{" "}
        <button type="submit" className={classess.button}>
          Calculate{" "}
        </button>{" "}
      </p>{" "}
    </form>
  );
};
export default UserInput;
