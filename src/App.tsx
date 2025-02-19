import { useState, useCallback } from "react";
import "./App.css";

function App() {
  // State for theme mode (true = dark, false = light)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle mode function
  const toggleMode = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <button
        type="button"
        className="px-4 py-2 border rounded-md transition-all duration-300 hover:opacity-80"
        onClick={toggleMode}
      >
        Toggle Mode
      </button>
    </div>
  );
}

export default App;
