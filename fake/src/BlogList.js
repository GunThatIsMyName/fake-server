import { Link } from "react-router-dom";
import { useAppContext } from "./context/AppContext";

const BlogList = ({ title }) => {
  const { blogs, handleDelete } = useAppContext();
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs &&
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`blog/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
              <button onClick={() => handleDelete(blog.id)}>delete blog</button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BlogList;
