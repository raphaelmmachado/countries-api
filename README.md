# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode



### Links
- Solution URL: [Github repo](https://github.com/rm0909/countries-api)
- Live Site URL: [Netlify](https://raphael-countries-api.netlify.app/)

## My process

### Built with

- React Hooks
- React-Routers
- React-icons
- axios
- TailwindCSS
- RESTCountriesAPI

- [vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) - npm create vite@latest react template
- [React](https://reactjs.org/) - JS library
- [tailwindcss](https://tailwindcss.com/) - CSS framework
- [react-spinners](https://www.npmjs.com/package/react-spinners) - Spinners Components
- [react-number-format](https://www.npmjs.com/package/react-number-format) - Component to format number
- [react-lazy-load-image-component](https://www.npmjs.com/package/react-lazy-load-image-component) - Component to lazy load images.

### What I learned

Learned to configurate and use tailwindcss with react. 
Despite leaving the code with a bunch of inline classes, tailwind makes coding css more easier and faster with tailwind intelisense.

I`m proud of my Dark Mode:
```ContextProvider.jsx
const [darkMode, setDarkMode] = useState(theme === "dark" ? true : false);
	useEffect(() => {
		setTheme(localStorage.getItem("theme"));
		const htmlClass = document.documentElement.classList;
		if (darkMode) {
			htmlClass.add(theme);
			htmlClass.remove("light");
		} else {
			htmlClass.remove(theme);
		}
	}, [darkMode, theme]);
```
```Nav.jsx
const { darkMode,setDarkMode } = useContext(Context);
	const handleDarkMode = () => {
		if (
			localStorage.getItem("theme") !== "dark" ||
			localStorage.getItem("theme") === null
		) {
			localStorage.setItem("theme","dark")
			setDarkMode(true)
		}else{ 
			localStorage.setItem("theme","light")
			setDarkMode(false)
		 }
};

	<button	onClick={handleDarkMode} className="flex flex-row bg-zinc-50 
	dark:bg-zinc-800 items-center align-middle justify-center rounded-md pr-2
	shadow-md text-sm font-light dark:text-zinc-50">
				{!darkMode ? (
					<FaMoon color="black" size="16px" className="mx-2" />
				) : (
					<FaSun color="white" size="16px" className="mx-2" />
				)}
				{darkMode ? "Light Mode" : "Dark Mode"}
	</button>
```

### Continued development

 I need to get better at building layouts  
 
 Learn advanced css techniques
 
 Learn advanced react hooks
 
 Learn typescript
 
 Learn Next.js

### Useful resources
- [How to lazy load images in react](https://www.freecodecamp.org/news/how-to-lazy-load-images-in-react/) - FreeCodeCamp article

## Author

- Website - [Raphael Machado](https://rm0909portfolio.netlify.app/)
- Frontend Mentor - [@rm0909](https://www.frontendmentor.io/profile/rm0909)
- Twitter - [@raphaelmmDev](https://www.twitter.com/raphaelmmDev)

