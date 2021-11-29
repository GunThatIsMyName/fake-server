import {  useNavigate, useParams } from "react-router";
import useFetch from "./custom/useFetch";
import { Endpoint } from "./utils/api";

const BlogDetail = ()=>{
    const {id}=useParams();
    const navigate = useNavigate();
    const {isLoading ,isError,blogs}=useFetch(`${Endpoint}?id=${id}`);

    const handleDelete=async()=>{
        try{
            const rawResponse = await fetch(`${Endpoint}/${id}`,{
                method:"DELETE"
            });
            navigate("/")
            return await rawResponse.json()
        }catch{
            console.log("Failed to delete");
        }
    }
    
    return (
        <div className="blog-details">
            {isLoading && <h1>LOADING ... </h1> }
            {isError && <h1>Error ... </h1> }
            {blogs && blogs.map(item=>{
                return <article key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                    <h4>{item.author}</h4>
                </article>
            })}
            <button onClick={handleDelete} >delete</button>
        </div>
    )
}

export default BlogDetail;