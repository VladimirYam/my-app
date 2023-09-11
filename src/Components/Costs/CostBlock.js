import "./CostBlock.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostFilter from "../UI/CostFilter";
import React, { useState } from "react";

function CostBlock(props) {
  const [selectedYear, setSwlectedYear] = useState("2023");

  const yearChangeHendler = (year) => {
    setSwlectedYear(year);
  };
  const filteredCosts = props.costs.filter((cost) => {
      return cost.date.getFullYear().toString() === selectedYear
  })
  
  let costsContent = <p>Расходов нет</p>
  if(filteredCosts.length > 0) {
    costsContent = filteredCosts.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />))
  }

  return (
    <div>
      <Card className="cost-block">
        <CostFilter year={selectedYear} onChangeYear={yearChangeHendler} />
        {costsContent}

      </Card>
    </div>
  );
}

export default CostBlock;
