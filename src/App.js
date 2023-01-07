import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import BlogDetail from "./Pages/BlogDetail";
import BlogOverview from "./Pages/BlogOverview";
import Home from "./Pages/Home";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/BlogOverview" element={<BlogOverview />} />
					<Route path="/BlogOverview/:id" element={<BlogDetail />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
