import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
	return (
		<nav>
			<h1>Mein Leben</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/BlogOverview">Blog</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
