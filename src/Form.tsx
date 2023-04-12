import { useForm } from "react-hook-form";
import { useState } from "react";
import "./form.css";
import "./App.css";
import { FormEvent } from "react";
// interface FormData {
// 	name: string;
// 	age: number;
// }

function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// const onSubmit = (data: FormEvent) => console.log(data);

	return (
		<form
			action=""
			className="form"
			onSubmit={handleSubmit((data) => console.log(data))}
		>
			<div className="container">
				<div>
					<label htmlFor="">Name</label>
					<input
						{...register("name", { required: true, minLength: 3 })}
						type="text"
						id="name"
					/>
					{errors.name?.type === "required" && (
						<p className="text">This field is required</p>
					)}
					{errors.name?.type === "minLength" && (
						<p className="text">Max character is 3 characters</p>
					)}
				</div>
				<div>
					<label htmlFor="">Age</label>
					<input
						{...register("age", { minLength: 18 })}
						type="number"
						id="age"
					/>
				</div>
				<div>
					<label htmlFor="">Phone</label>
					<input
						{...register("phone", { minLength: 18 })}
						type="number"
						id="age"
					/>
				</div>
				<div>
					<label htmlFor="">Email</label>
					<input
						{...register("email", { required: true })}
						type="text"
						id="age"
					/>
				</div>
				<button className="formBtn">Submit</button>
			</div>
		</form>
	);
}

export default Form;
