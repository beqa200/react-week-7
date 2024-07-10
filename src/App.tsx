import {
	useEffect,
	useState,
} from "react";

import "./App.css";

interface UserType {
	name: string | null;
	login: string;
}

function App() {
	const [user, setUser] = useState<
		UserType | undefined
	>();
	const [search, setSearch] = useState<
		string | null
	>("beqa200");

	useEffect(() => {
		getUser();
	}, [search]);

	const getUser = async () => {
		try {
			const response = await fetch(
				`https://api.github.com/users/${search}`
			);
			const jsonData =
				await response.json();
			setUser(jsonData);
		} catch (error) {}
	};
	return (
		<>
			<div>
				<input
					type="text"
					name="login"
					onChange={(event) =>
						setSearch(
							event.target.value
						)
					}
				/>
				<button
					onClick={() => {
						console.log("ragaca");
						getUser();
					}}
				>
					Search
				</button>
			</div>
			<h1>
				Login:{" "}
				{user?.login || "ცარიელია"}
			</h1>
			<h1>
				Name: {user?.name || "ცარიელია"}
			</h1>
		</>
	);
}

export default App;
