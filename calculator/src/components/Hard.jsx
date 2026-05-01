import React, { useState } from "react";

function Hard() {
    const [input, setInput] = useState("");

    const handleClick = (val) => {
        setInput((prev) => prev + val);
    };

    const calculate = () => {
        try {
            setInput(Function("return " + input)().toString());
        } catch {
            setInput("Error");
        }
    };

    const clear = () => setInput("");

    return (
        <div className="bg-gray-800 p-6 rounded shadow w-80">
            <h2 className="text-xl mb-4">Smart Mode</h2>

            <div className="bg-black p-3 mb-4 text-right">
                {input || "0"}
            </div>

            <div className="grid grid-cols-4 gap-2">
                {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "+", "="].map((btn) => (
                    <button
                        key={btn}
                        onClick={() => btn === "=" ? calculate() : handleClick(btn)}
                        className="bg-blue-500 p-3 rounded"
                    >
                        {btn}
                    </button>
                ))}

                <button
                    onClick={clear}
                    className="col-span-4 bg-red-500 p-2 rounded"
                >
                    Clear
                </button>
            </div>
        </div>
    );
}

export default Hard;