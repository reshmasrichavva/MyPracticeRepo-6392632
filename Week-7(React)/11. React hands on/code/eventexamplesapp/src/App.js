import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0); 
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const increment = () => {
    setCount(count + 1);
    alert("Hello! Member1"); 
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (msg) => {
    alert(`localhost:3000 says\n${msg}`);
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currency.toLowerCase() === "euro") {
      const converted = parseFloat(amount) * 88;
      alert(`localhost:3000 says\nConverting to Euro amount is ₹${converted}`);
    } else {
      alert("localhost:3000 says\nUnsupported currency.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>{count}</h2>

      <button onClick={increment}>Increment</button><br />
      <button onClick={decrement}>Decrement</button><br />
      <button onClick={() => sayWelcome("Welcome")}>Say welcome</button><br />
      <button onClick={handleClick}>Click on me</button>

      <h2 style={{ color: "green", marginTop: "30px" }}>Currency Convertor!!!</h2>

      <form onSubmit={handleSubmit}>
        <div>
          Amount:{" "}
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          Currency:{" "}
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

