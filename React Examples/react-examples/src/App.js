import "./App.css";
import RaceCondition from "./components/RaceCondition";

function App() {
  return (
    <div className="App">
      <RaceCondition id={1} />
      <RaceCondition id={2} />
      <RaceCondition id={3} />
      <RaceCondition id={4} />
      <RaceCondition id={5} />
    </div>
  );
}

export default App;
