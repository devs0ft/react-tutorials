import { useState } from "react";

interface Props {
	children: string;
	maxChars: number;
}

function Expandable({ children, maxChars = 100 }: Props) {
	const [expand, setExpand] = useState(false);
	if (children.length <= maxChars) <p>{children}</p>;

	const text = expand ? children : children.substring(0, maxChars);

	return (
		<p>
			{text}...
			<button onClick={() => setExpand(!expand)}>
				{expand ? "Less" : "More"}
			</button>
		</p>
	);
}

export default Expandable;
