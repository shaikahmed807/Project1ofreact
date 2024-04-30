import classess from "./ResultTable.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Resulttable = (props) => {
  return (
    <table className={classess["result"]}>
      <thead>
        <tr>
          <th> Year </th> <th> Total Savings </th> <th> Interest(Year) </th>{" "}
          <th> Total Interest </th> <th> Invested Capital </th>{" "}
        </tr>{" "}
      </thead>{" "}
      <tbody>
        {props.data.map((yearlyData) => (
          <tr key={yearlyData.year}>
            <td>{formatter.format(yearlyData.year)}</td>
            <td>{formatter.format(yearlyData.yearlyInterest)}</td>
            <td>
              {formatter.format(
                yearlyData.savingsEndOfYear -
                  props.initalinvestment -
                  yearlyData.yearlyContribution * yearlyData.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initalinvestment +
                  yearlyData.yearlyContribution * yearlyData.year
              )}
            </td>
          </tr>
        ))}
      </tbody>{" "}
    </table>
  );
};
export default Resulttable;
