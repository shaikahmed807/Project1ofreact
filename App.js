import Header from "./Components/Header/Header";
import UserInput from "./Components/UserInput/UserInput";
import Resulttable from "./Components/ResultTable/ResultTable";
import { useState } from "react";
import "./index1.css";

function App() {
  const [userInput, SetUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    SetUserInput(userInput);
  };
  const yearlyData = [];
  if (userInput) {
    // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {!userInput && (
        <p style={{ textAlign: "center" }}>No investment calculator</p>
      )}
      {userInput && (
        <Resulttable
          data={yearlyData}
          initalinvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
