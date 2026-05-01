import React, { useState } from "react";
import Easy from "./components/Easy";
import Hard from "./components/Hard";

function App() {
  const [mode, setMode] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-white">

      {/* HOME SCREEN */}
      {!mode && (
        <div className="flex flex-col items-center gap-6">

          <h1 className="text-3xl font-bold mb-4">Choose Calculator</h1>

          <button
            onClick={() => setMode("easy")}
            className="w-60 py-4 rounded-xl bg-gradient-to-r from-green-400 to-green-600 hover:scale-105 transition text-lg font-semibold shadow-lg"
          >
            Simple Mode
          </button>

          <button
            onClick={() => setMode("hard")}
            className="w-60 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 hover:scale-105 transition text-lg font-semibold shadow-lg"
          >
            Smart Mode
          </button>
        </div>
      )}

      {/* CALCULATOR SCREEN */}
      {mode && (
        <div className="flex flex-col items-center">

          {/* Back Button */}
          <button
            onClick={() => setMode(null)}
            className="mb-4 bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            ⬅ Back
          </button>

          {mode === "easy" ? <Easy /> : <Hard />}
        </div>
      )}

    </div>
  );
}

export default App;