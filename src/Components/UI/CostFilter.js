import "./CostFilter.css";
// import React, { useState } from "react";

const CostFilter = ({ year, onChangeYear }) => {
  const yearChangeHendler = (e) => {
    onChangeYear(e.target.value);
  };
  return (
    <form>
      <div className="cost-filter">
        <select value={year} onChange={yearChangeHendler}>
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
        </select>
      </div>
    </form>
  );
};

export default CostFilter;
