import axios from "axios";

//Fetch One Post
export async function fetchOnePost(slug) {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
    return res.data;
  };

//Fetch Featured Posts
export async function fetchFeaturedPosts() {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`
    );
    return res.data;
  };

//Fetch Post List Posts
export async function fetchPostList(pageParam, searchParams) {
  const searchParamsObj = Object.fromEntries([...searchParams]);

  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: { page: pageParam, limit: 10, ...searchParamsObj },
  });
  return res.data;
}; 
