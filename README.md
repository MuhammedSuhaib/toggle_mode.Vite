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

<br/><br/>

# Learnings
<br/><br/><br/><br/><br/><br/><br/>

## Deploy React or Vite on Github Pages

### 1. Vite only
Add this in `vite.config.ts` for GitHub Pages:
base: "/repo-name/"

(Create React App does NOT have vite.config,so skip this step)

### 2. Add homepage in package.json
"homepage": "https://your-github-username.github.io/repo-name"

### 3. Install gh-pages
npm install gh-pages --save-dev  
or  
pnpm add gh-pages -D

### 4. Add deploy scripts in package.json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

For CRA:  
"deploy": "gh-pages -d build"

### 5. Commit + push
git add .  
git commit -m "deploy setup"  
git push

### 6. Deploy
npm run deploy  
or  
pnpm run deploy

This creates the `gh-pages` branch. Do NOT delete it.

### 7. Enable GitHub Pages
Repo → Settings → Pages → select:
Branch: gh-pages  
Folder: root

### Notes
1. Blank page usually means wrong base or wrong repo-name.
2. If using React Router, use `HashRouter` because GitHub Pages doesn’t support BrowserRouter.

<br/><br/><br/><br/><br/><br/><br/>


## Tailwind CSS - Applying classes using @apply

To apply Tailwind CSS as classes in your project
go to either `index.css` or `globals.css` and do it like this:
```
.reptitive {
    @apply flex flex-1 flex-col items-center justify-center;
}

```
and use it in your component:
```<div className="reptitive">
    // your content here
</div>  
```

<br/><br/><br/><br/><br/><br/><br/>

## Creating Snaps for Quick preview using OG Image Generator (Playwright)

This creates an OG image from a live webpage and saves it as `public/og.png`.

### Install

```
pnpm add playwright
pnpm exec playwright install
```

### Script (`og/generate.js`)

```js
import { chromium } from "playwright";
import fs from "fs";

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("https://your-github-username.github.io/repo-name/");
  await page.setViewportSize({ width: 1200, height: 630 });

  const buffer = await page.screenshot();
  fs.writeFileSync("public/og.png", buffer);

  await browser.close();
}

run();
```

### Run

```
node og/generate.js
```

It will:

1. Open your deployed GitHub Pages site
2. Capture a 1200×630 screenshot
3. Save it to `public/og.png`
4. Ready to use as OG for sharing
5. Push Changes then visit `https://your-github-username.github.io/repo-name/og.png` 
6. And thats it
---
