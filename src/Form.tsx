import { FormEvent, useRef, useState } from "react";
import "./App.css";

function Form() {
	// const nameRef = useRef<HTMLInputElement>(null);

	// const ageRef = useRef<HTMLInputElement>(null);

	// const person = { name: "", age: 0 };

	// const handleSubmit = (e: FormEvent) => {
	// 	e.preventDefault();
	// 	if (nameRef.current !== null) person.name = nameRef.current.value;
	// 	if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

	// 	console.log(person);
	// };

	const [person, setPerson] = useState({
		name: "",
		age: "",
	});
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log(person);
	};

	return (
		<form action="" className="container">
			<div className="form">
				<div>
					<label htmlFor="">Name</label>
					{/* <input type=" " ref={nameRef} /> */}
					<input
						type="text "
						onChange={(e) => setPerson({ ...person, name: e.target.value })}
						value={person.name}
					/>
				</div>
				<div>
					<label htmlFor="">Age</label>
					{/* <input type=" " ref={ageRef} /> */}
					<input
						type="number "
						value={person.age}
						onChange={(e) => setPerson({ ...person, age: e.target.value })}
					/>
				</div>
				<button className="formBtn" onClick={handleSubmit}>
					Submit
				</button>
			</div>
		</form>
	);
}

export default Form;
