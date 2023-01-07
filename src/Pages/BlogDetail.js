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
	let date0 = blogData[params.id].published_date.replaceAll(".", "/");

	let date = new Date(date0).toLocaleDateString("de-DE", options);
	let date1 = date0.replace(/(..).(..).(....)/, "$3-$1-$2");
    console.log(date0);
	console.log(toString(date1));

	return (
		<section className="blogDetail">
			<div>
				<img src={blogData[params.id].img_url} />
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
