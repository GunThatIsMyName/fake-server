import { useState } from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import { Endpoint } from "./utils/api";
const Create = () => {
  const newvlog = { title: "", body: "", author: "" };
  const [state, setState] = useState(newvlog);
  const [isPending, setPending] = useState(false);
  const navgate =useNavigate();
  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const postBlog = async () => {
    setPending(true);
    try {
      const rawResponse = await fetch(Endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      setPending(false);
      navgate("/")
      return await rawResponse.json();
    } catch {
      console.log("errrorrrorroror");
    }
  };

  const resetState = ()=>{
      setState(newvlog);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    postBlog();
    resetState();
  };

  return (
    <Wrapper>
      <h1> Add a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog title</label>
        <input
          onChange={handleChange}
          type="text"
          id="title"
          name="title"
          value={state.title}
          required
          placeholder="Write Blog Title"
        />
        <label htmlFor="story">Blog Story</label>
        <textarea
          onChange={handleChange}
          name="body"
          id="body"
          required
          value={state.body}
          placeholder="Write Blog Story"
        ></textarea>
        <label htmlFor="author">Blog author : </label>
        <select
          onChange={handleChange}
          value={state.author}
          name="author"
          id="author"
          required
        >
          <option value="mario">mario</option>
          <option value="minji">minji</option>
        </select>
        <button disabled={isPending}>
          {isPending ? "Adding ..." : "Add Blog"}
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 800px;
  margin: auto;
  form {
    display: flex;
    flex-direction: column;
    label {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
  button {
    width: 4rem;
    margin: 2rem auto;
  }
`;

export default Create;
