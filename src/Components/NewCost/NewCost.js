import "./NewCost.css";
import CostForm from "./CostForm";
import React, { useState } from "react";

const NewCost = ({ onAddCost }) => {
  const [isFormVisible, setFormVisible] = useState(false);

  const saveCostData = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    onAddCost(costData);
    setFormVisible(false);
  };

  const inputCostDataHandler = () => {
    setFormVisible(true);
  };

  const cancelCostHandler = () => {
    setFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button className="btn-new-cost" onClick={inputCostDataHandler}>
          Добавить новый расход
        </button>
      )}
      {isFormVisible && (
        <CostForm onSaveCostData={saveCostData} onCancel={cancelCostHandler} />
      )}
    </div>
  );
};

export default NewCost;
