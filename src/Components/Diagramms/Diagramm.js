import "./Diagramm.css";
import Bar from "./Bar";

const Diagramm = (props) => {
  const dataSetsValue = props.dataSets.map((dataSet) => dataSet.value);

  const maxMonthCosts = Math.max(...dataSetsValue);

  return (
    <div className="diagramm">
      {props.dataSets.map((dataSet) => (
        <Bar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagramm;
