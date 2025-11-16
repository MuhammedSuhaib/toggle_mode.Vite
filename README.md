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

# Learnings
1. add base eg   
  base: "/repo-name/",
    in vite.config.ts for github pages deployment
2. add homepage in package.json for github pages deployment
    "homepage": "https://your-github-username.github.io/repo-name",
3. install gh-pages package
    npm install gh-pages --save-dev  or pnpm add gh-pages -D
4. add deploy script in package.json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
5. commit and push all changes
6. run npm run deploy to deploy to github pages
It will create a gh-pages branch in your repo and deploy the build folder to that branch. 
so dont delete that branch. 
7. go to repo settings -> pages -> select gh-pages branch and root folder to publish the site. or just click on the link of homepage in package.json after deployment.
> It may take a few minutes to reflect the changes on the github pages site. so be patient.

# Video Tutorial
https://youtu.be/hn1IkJk24ow?si=qLfDBIaaMVgVWkUw start from 2:43
Quick note:
For most people, my tutorial is working fine and they are able to deploy. Some people still run into a blank page when deploying or have issues with images. So if this is you, check this out:

1. For the blank page issue, most of the time its because you forgot to add the {base: "/REPO_NAME/",} to the viteconfig or you put the repository name incorrectly. Remember, its not the url to the repo, just the name.
2. If you are using react router, please use React Routers HashRouter instead of browser router since github doesnt work with browser router.