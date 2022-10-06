import { createContext, useState, useEffect } from "react";
const Context = createContext();

function ContextProvider({ children }) {
	const [selectByRegion, setSelectByRegion] = useState("");
	const [inputText, setInputText] = useState("");
	const [showRegionComponent, setShowRegionComponent] = useState(false);
	const [theme, setTheme] = useState(localStorage.getItem("theme"));
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

	return (
		<Context.Provider
			value={{
				selectByRegion,
				setSelectByRegion,
				inputText,
				setInputText,
				showRegionComponent,
				setShowRegionComponent,
				darkMode,
				setDarkMode,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, ContextProvider };
