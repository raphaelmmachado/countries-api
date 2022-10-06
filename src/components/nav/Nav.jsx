import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../../context/ContextProvider.jsx";
function Nav() {
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

	return (
		<nav className="nav-component shadow-sm dark:shadow-xl
		 bg-zinc-50 dark:bg-zinc-900">
			<div>
				<h3 className="text-2xl font-extrabold text-zinc-800 dark:text-zinc-50">
					Where in the world?
				</h3>
			</div>
			<button
				onClick={handleDarkMode}
				className="flex flex-row bg-zinc-50
			dark:bg-zinc-800 items-center align-middle
			justify-center rounded-md pr-2
       		shadow-md text-sm font-light dark:text-zinc-50"
			>
				{!darkMode ? (
					<FaMoon color="black" size="16px" className="mx-2" />
				) : (
					<FaSun color="white" size="16px" className="mx-2" />
				)}
				{darkMode ? "Light Mode" : "Dark Mode"}
			</button>
		</nav>
	);
}
export { Nav };
