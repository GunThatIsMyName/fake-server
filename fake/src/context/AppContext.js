import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../custom/useFetch";
import { Endpoint } from "../utils/api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState("mario");
  const { isLoading, isError, blogs, setBlogs } = useFetch(Endpoint);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <AppContext.Provider
      value={{ isError, isLoading, blogs, handleDelete, name, setName }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
