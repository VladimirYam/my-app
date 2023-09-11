import "./NewCost.css";
import CostForm from "./CostForm";

const NewCost = (props) => {
  const saveCostData = (inputCostData) => {
    const costData = {
        ...inputCostData,
        id: Math.random().toString(),
    }
    props.onAddCost(costData)
  };
  return (
    <div className="new-cost">
      <CostForm onSaveCostData={saveCostData} />
    </div>
  );
};

export default NewCost;
