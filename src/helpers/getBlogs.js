import axios from "axios";

export const getBlogs = async () => {
  const res = await axios.get("http://localhost:5000/api/allBlogs");
  const data = await res.data;
  return data.blogs;
};
