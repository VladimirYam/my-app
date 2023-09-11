import "./CostFilter.css";
// import React, { useState } from "react";

const CostFilter = (props) => {
    
    const yearChangeHendler = (e) => {
        props.onChangeYear(e.target.value)
      };
  return (
    <form>
      <div className="cost-filter">
        <input type="month" />
        <select value={props.year} onChange={yearChangeHendler}>
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
