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

<br/><br/><br/><br/><br/><br/><br/>
___

# Firebase Interview React Revision
on 11-11-2025: I covered the core React fundamentals that are commonly asked in interviews:

## About

A small hands-on practice project created as a quick revision before a Firebase interview.

## Key Concepts Covered
* using `useState` for a counter
* updating state (increment / decrement)
* passing props to components (`Navbar`, `Card`)
* fetching API data using `useEffect`
* storing API response in state
* mapping and rendering lists
* basic TypeScript typings (`Props`, `Book`, component props)

This practice helped reinforce the essentials and resulted in successfully securing the internship.

# What This Project Does

* Renders a navbar using props
* Implements a counter with increment and decrement
* Fetches book data from a public API
* Stores the response in state
* Maps and displays book names
* Uses TailwindCSS for quick styling
