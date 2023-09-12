import "./CostForm.css";
import React, { useState } from "react";

const CostForm = ({ onSaveCostData, onCancel }) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const nameChangeHendler = (e) => {
    setInputName(e.target.value);
  };
  const amountChangeHendler = (e) => {
    setInputAmount(e.target.value);
  };
  const dateChangeHendler = (e) => {
    setInputDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate || new Date()),
    };

    onSaveCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__control">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" value={inputName} onChange={nameChangeHendler} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            value={inputAmount}
            step={0.01}
            onChange={amountChangeHendler}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input type="date" value={inputDate} onChange={dateChangeHendler} />
        </div>
        <div className="new-cost__action">
          <button type="submit">Добавить</button>
          <button type="button" onClick={onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
