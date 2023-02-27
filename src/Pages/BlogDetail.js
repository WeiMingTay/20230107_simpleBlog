import { useParams } from "react-router-dom";
import blogData from "../Components/BlogData/BlogData";
import "./BlogDetail.css";

const BlogDetail = () => {
	let params = useParams();
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	let date0 = blogData[params.id].published_date;

	// 0 hinzufügen, falls nicht vorhanden
	if (date0.slice(2, 3) !== ".") {
		date0 = "0" + date0;
	}

	// Format von JAHR ändern
	let dateslice = date0.slice(0, -2) + "20" + date0.slice(-2);

	// Reihenfolge anpassen
	let date1 = new Date(
		dateslice.replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3")
	);

	// Mit Optionen darstellen
	let date = new Date(date1).toLocaleDateString("de-DE", options);

	return (
		<section className="blogDetail">
			<div>
				<img src={blogData[params.id].img_url} alt=""/>
				<a href={blogData[params.id].img_url}>Bild-Quelle</a>
			</div>
			<div>
				<div>
					<h4>{blogData[params.id].title}</h4>
					<p>{blogData[params.id].description}</p>
					<p>by {blogData[params.id].author}</p>
				</div>
				<p>{date}</p>
			</div>
		</section>
	);
};

export default BlogDetail;
