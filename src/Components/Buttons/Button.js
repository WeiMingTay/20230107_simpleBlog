import "./Button.css";

const Button = (props) => {
	// one button to rule them all
	let klick = props.klick;
	return (
		<section>
			<button>{klick}</button>
		</section>
	);
};

export default Button;
