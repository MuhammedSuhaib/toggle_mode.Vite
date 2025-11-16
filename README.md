## It is a Simple React `useState` Example

React + TypeScript + Vite project with Tailwind CSS and ESLint configuration that does nothing        
It demonstrates how to use `useState` and `useCallback` to toggle between Light and Dark mode.      

### Features
- toggle Light/Dark mode 
- use `useCallback` to memoize the toggle function
- change UI classes based on the current mode

# Learnings from this Project

- Conditional classes are used to switch between light and dark themes.
```js
    {isDarkMode ? "🌞" : "🌜"}
```
- `useCallback` memoizes functions so they don’t recreate on every render.

```js
//* useCallback: React hook to memoize the function.
//? MEMOIZE means : Storing the result so you can use it next time instead of calculating the same thing again and again.
/*
    useCallback(function,   deps)
                ⬇             ⬇
    useCallback(() => {}, [dep1, dep2]);
*/

```
