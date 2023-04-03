import React, { FormEvent, useState } from "react";
import "./form.css";
import "./App.css";

function Forms2() {
	const [person, setPerson] = useState({
		name: "",
		age: "",
	});
	// const handleSubmit = (event: FormEvent) => {
	// 	event.preventDefault();
	// };
	console.log(person);

	return (
		<form action="" className="form">
			<div className="container">
				<div>
					<label htmlFor="">Name</label>
					<input
						type="text"
						value={person.name}
						onChange={(event) =>
							setPerson({ ...person, name: event.target.value })
						}
					/>
				</div>
				<div>
					<label htmlFor="">Age</label>
					<input type="text" />
				</div>
				<button className="formBtn">Submit</button>
			</div>
		</form>
	);
}

export default Forms2;
