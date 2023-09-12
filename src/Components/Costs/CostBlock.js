import "./CostBlock.css";
import Card from "../UI/Card";
import CostFilter from "../UI/CostFilter";
import React, { useState } from "react";
import CostList from "./CostList";

function CostBlock({ costs }) {
  const [selectedYear, setSwlectedYear] = useState("2023");

  const yearChangeHendler = (year) => {
    setSwlectedYear(year);
  };
  const filteredCosts = costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="cost-block">
        <CostFilter year={selectedYear} onChangeYear={yearChangeHendler} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
}

export default CostBlock;
