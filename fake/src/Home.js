import BlogList from "./BlogList";
import { useAppContext } from "./context/AppContext";

const Home = () => {
  const { isLoading, isError } = useAppContext();
  return (
    <div className="content">
      <div className="home">
        {isLoading && <h1>LOADING ...</h1> }
        {isError && <h1>Error ....</h1>}
        <BlogList title="All Blogs" />
        <button>change name</button>
      </div>
    </div>
  );
};

export default Home;
