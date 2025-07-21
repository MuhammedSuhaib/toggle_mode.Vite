import { useState, useCallback } from "react";
import "./App.css";

function App() {    // State for theme mode (true = dark, false = light)
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

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-all duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
    >
      Simple React UseState Eg
      <button
        type="button"
        className="px-4 py-2 border rounded-md transition-all duration-300 hover:opacity-80"
        onClick={toggleMode}
      >
        Toggle Mode
      </button>
      <button
        type="button"
        className="px-4 py-2 border rounded-md transition-all duration-300 hover:opacity-80"
        onClick={toggleMode}
      >
        {isDarkMode ? "🌞" : "🌜"}
      </button>
    </div>
  );
}

export default App;
