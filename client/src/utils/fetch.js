import axios from "axios";

export async function fetchOnePost(slug) {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
    return res.data;
  };