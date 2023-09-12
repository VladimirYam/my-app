import Diagramm from "../Diagramms/Diagramm";

const CostsDiagramm = (props) => {
  const diagrammDataSets = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const cost of props.costs) {
    const costMonth = cost.date.getMonth();
    diagrammDataSets[costMonth].value += cost.amount;
  }

  return <Diagramm dataSets={diagrammDataSets} />;
};

export default CostsDiagramm;
