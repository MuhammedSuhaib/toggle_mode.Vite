import { useState, useCallback } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Cards";

function App() {
  // State for theme mode (true = dark, false = light)
  const [isDarkMode, setIsDarkMode] = useState(false);

  //* useCallback: React hook to memoize the function.
  //? MEMOIZE means : Storing the result so you can use it next time instead of calculating the same thing again and again.
  /*
      useCallback(function,   deps)
                  ⬇             ⬇
      useCallback(() => {}, [dep1, dep2]);
  */

  /**
  toggleMode → calls → setIsDarkMode → with → (prevMode) => !prevMode.
  */
  // Toggle mode function
  const toggleMode = useCallback(() => {
    // passing an arrow function as the parameter to setIsDarkMode.
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

  // Firebase Interview
  const [count, setCount] = useState(0);
  const items = [1, 2, 3, 4, 5];

  return (
    <div
      className={`flex min-h-screen items-center p-9 transition-all duration-300 ${isDarkMode ? "bg-black text-white" : "bg-pink-100 text-black"}`}
    >
      <div className="flex flex-1 flex-col items-center justify-center gap-5">
        <span className="flex justify-center text-5xl">
          Simple React&nbsp;<code className="text-red-700">useState</code>&nbsp;Example
        </span>
        <button
          type="button"
          className="rounded-md border px-4 py-2 transition-all duration-300 hover:opacity-80"
          onClick={toggleMode}
        >
          {isDarkMode ? "🌞" : "🌜"}
        </button>
      </div>
      {/* Firebase Interview */}
      <div className="">
        <Navbar items={items} />
        <Card title="title here " description="Card Description" />
        <span className="flex justify-center text-5xl text-red-700">
          Count: {count}
        </span>
        <div className="mt-1.5 flex justify-center gap-5">
          <button
            onClick={() => setCount(count + 1)}
            className="rounded-3xl bg-[#ec11aa52] px-4 py-2 text-white"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="rounded-3xl bg-[#ec11aa52] px-4 py-2 text-white"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
