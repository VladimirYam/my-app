import CostBlock from "./Components/Costs/CostBlock";
import NewCost from "./Components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Burger",
    amount: 250,
  },
  {
    id: "c2",
    date: new Date(2022, 12, 2),
    description: "Apple",
    amount: 75,
  },
  {
    id: "c3",
    date: new Date(2023, 4, 15),
    description: "Banana",
    amount: 120,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <CostBlock costs={costs} />
    </div>
  );
}

export default App;
