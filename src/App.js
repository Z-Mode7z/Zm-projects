import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const currentDate = new Date();
  const updatedCount = count + step;
  currentDate.setDate(currentDate.getDate() + updatedCount);
  const currentTime = currentDate.toLocaleDateString();

  return (
    <div className="App">
      <div>
        <button onClick={() => setStep((prevStep) => prevStep + 1)}>+</button>
        <h2>Step: {step}</h2>
        <button>-</button>
      </div>
      <div>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      </div>
      <div>
        Today is: <b>{currentTime}</b>
      </div>
    </div>
  );
}

export default App;
