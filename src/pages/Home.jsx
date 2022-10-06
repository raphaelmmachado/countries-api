import axios from "axios";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect, useState, useContext, useMemo } from "react";
import { CardComponent } from "../components/card/Card.jsx";
import { Context } from "../context/ContextProvider.jsx";

function Home() {
	// Contexto
	const {
		inputText,
		setInputText,
		selectByRegion,
		showRegionComponent,
		setShowRegionComponent,
	} = useContext(Context);
	const [allCountries, setAllCountries] = useState(
		JSON.parse(sessionStorage.getItem("allCountries"))
	);
	const [countryByName, setCountryByName] = useState([]);
	const [countryByRegion, setCountryByRegion] = useState([]);
	const [spinner, setSpinner] = useState(false);
	// ref to use animation
	const [gridRef] = useAutoAnimate();

	useEffect(() => {
		reset();
		if (allCountries.length < 1) {
			getData();
		}
	}, []);

	//if types on input, run this function
	useEffect(() => {
		filterCountriesByName();
	}, [inputText]);

	//filter countries based on user select
	const filterByRegion = useMemo(
		() =>
			selectByRegion !== "All" &&
			[...allCountries].filter((country) => country.region === selectByRegion),
		[selectByRegion]
	);

	useEffect(() => {
		if (selectByRegion === "All") {
			reset();
		} else {
			setCountryByRegion(filterByRegion);
		}
	}, [selectByRegion]);

	const reset = () => {
		setShowRegionComponent(false);
		setInputText("");
	};
	const getData = async () => {
		setSpinner(true);
		try {
			const url = "https://restcountries.com/v3.1/all";
			const { data } = await axios(url);
			sessionStorage.setItem("allCountries", JSON.stringify(data));
		} catch (error) {
			console.error(error);
		}
		setSpinner(false);
	};
	const filterCountriesByName = () => {
		const filtered = [...allCountries].filter((country) =>
			country.name.common.toLowerCase().includes(inputText)
		);
		if (inputText !== "") setCountryByName(filtered);
	};

	return (
		<>
			{showRegionComponent === false ? (
				<main
					ref={gridRef}
					className="grid xl:grid-cols-3
           lg:grid-cols-2 md:grid-cols-2 
           sm:grid-cols-1 place-items-center min-h-screen
           gap-4 pt-4 mx-auto bg-zinc-100 dark:bg-zinc-900"
				>
					<>
						{allCountries && !inputText
							? allCountries.map((country) => {
									return (
										<CardComponent
											key={country.name.common}
											name={country.name.common}
											image={country.flags.svg}
											imagepng={country.flags.png}
											capital={country.capital && country.capital[0]}
											region={country.region}
											population={country.population}
										/>
									);
							  })
							: countryByName.map((country) => {
									return (
										<CardComponent
											key={country.name.common}
											name={country.name.common}
											image={country.flags.svg}
											imagepng={country.flags.png}
											capital={country.capital && country.capital[0]}
											region={country.region}
											population={country.population}
										/>
									);
							  })}
					</>{" "}
				</main>
			) : (
				<main
					ref={gridRef}
					className="grid xl:grid-cols-3
					lg:grid-cols-2 md:grid-cols-2 
					sm:grid-cols-1 place-items-center min-h-screen
					gap-4 pt-4 mx-auto bg-zinc-100 dark:bg-zinc-900"
				>
					{countryByRegion.map((country) => {
						return (
							<CardComponent
								key={country.name.common}
								name={country.name.common}
								image={country.flags.svg}
								imagepng={country.flags.png}
								capital={country.capital && country.capital[0]}
								region={country.region}
								population={country.population}
							/>
						);
					})}
				</main>
			)}
		</>
	);
}
export { Home };
