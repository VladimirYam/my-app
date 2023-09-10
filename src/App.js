import CostBlock from "./Components/Costs/CostBlock";

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Burger",
      amount: 250,
    },
    {
      date: new Date(2021, 12, 2),
      description: "Apple",
      amount: 75,
    },
    {
      date: new Date(2021, 4, 15),
      description: "Banana",
      amount: 120,
    },
  ];
  return (
    <div>
      <h1>Hello</h1>
      <CostBlock costs = {costs}/>
    </div>
  );
}

export default App;
