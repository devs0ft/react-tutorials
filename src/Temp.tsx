import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
// import { AxiosError } from "axios";

interface User {
	name: string;
	id: number;
}

function Temp() {
	const [users, setUsers] = useState<User[]>([]);

	const [error, setError] = useState("");

	useEffect(() => {
		const fetchUrl = () => {};
	}, []);

	return (
		<div>
			{error && <p className="text">{error}</p>}
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}

export default Temp;
