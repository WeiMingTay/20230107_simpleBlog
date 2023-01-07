import "./BlogOverview.css";
import blogData from "../Components/BlogData/BlogData";
import Button from "../Components/Buttons/Button";
import { Link } from "react-router-dom";

const BlogOverview = () => {
	return (
		<section className="blogOverview">
			{blogData.map((blog) => (
				<article key={blog.id}>
					<div>
						<img src={blog.img_url} alt={blog.title} />
					</div>
					<h3>{blog.title}</h3>
                    <Link to={`/BlogOverview/${blog.id}`}><Button klick="Read more"/></Link>
					
				</article>
			))}
		</section>
	);
};

export default BlogOverview;
