import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + count);
    setCurrentTime(currentDate);
  }, [count]);

  const incrementCount = () => {
    setCount((prevCount) => step === 0 ? prevCount + 1 : prevCount + step);
  };

  const decrementCount = () => {
    setCount((prevCount) => step === 0 ? prevCount - 1 : prevCount - step);
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => setStep((prevStep) => prevStep + 1)}>+</button>
        <label>Step: {step}</label>
        <button onClick={() => setStep((prevStep) => prevStep - 1)}>-</button>
      </div>
      <div>
        <button onClick={incrementCount}>+</button>
        <h2>Count: {count}</h2>
        <button onClick={decrementCount}>-</button>
      </div>
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
        Today is: <b>{currentTime.toLocaleDateString()}</b>
      </div>
    </div>
  );
}

export default App;
