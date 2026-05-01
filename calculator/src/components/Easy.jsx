import React, { useState } from "react";

function Easy() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (op) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Invalid Input");
      return;
    }

    switch (op) {
      case "+":
        setResult(n1 + n2);
        break;
      case "-":
        setResult(n1 - n2);
        break;
      case "*":
        setResult(n1 * n2);
        break;
      case "/":
        setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by 0");
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded shadow w-80">
              <div className="bg-black p-2 text-right">
        Result: {result}
      </div>
      <h2 className="text-xl mb-4">Simple Mode</h2>

      <input
        type="number"
        placeholder="Enter first number"
        className="w-full p-2 mb-3 text-black"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        className="w-full p-2 mb-3 text-black"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="grid grid-cols-4 gap-2 mb-3">
        {["+", "-", "*", "/"].map((op) => (
          <button
            key={op}
            onClick={() => calculate(op)}
            className="bg-green-500 p-2 rounded"
          >
            {op}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Easy;