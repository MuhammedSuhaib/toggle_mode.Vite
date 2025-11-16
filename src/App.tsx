import { useState, useCallback } from "react";
import "./App.css";
import Navbar from './components/Navbar'
import Card from './components/Cards'

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


  // Firebase Interview
  const [count, setCount] = useState(0)
  const items = [1, 2, 3, 4, 5]
  
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-all duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
    >
      <span className='text-lime-700 flex justify-center text-5xl'>Simple React UseState Eg</span>
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
      {/* Firebase Interview */}
      <div>
        <Navbar items={items} />
        <Card title="title here " description="Card Description" />
        <span className='text-lime-700 flex justify-center text-5xl'>Count: {count}</span>
        <div className='flex justify-center gap-5 mt-1.5'>
          <button onClick={() => setCount(count + 1)} className='bg-[#151b15] text-white rounded-3xl p-5'>Increment</button>
          <button onClick={() => setCount(count - 1)} className='bg-[#151b15] text-white rounded-3xl p-5'>Decrement</button></div>
      </div>
    </div>
  );
}

export default App;
