import { Link } from "react-router-dom";
import Button from "../Components/Buttons/Button";
import Nav from "../Components/Nav/Nav";
import "./Home.css";

const Home = () => {
	return (
		<section className="home">
			<div><Nav /></div>
			<div>
				<h2>Willkommen zu meinem Blog</h2>
				{/* <Button /> */}
                <Link to="/BlogOverview"><Button /></Link>
				{/* <Button onCLick={<Link to="/BlogOverview"></Link>}/> */}
			</div>
		</section>
	);
};

export default Home;
