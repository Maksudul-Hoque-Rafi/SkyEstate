import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ params }) => {
  const res = await apiRequest.get("/posts/" + params.id);
  return res.data;
};

export const listPageLoader = async ({ request }) => {
  const query = request.url.split("?")[1];
  const postsData = apiRequest.get("/posts?" + query);
  return { postsData };
};

export const profilePageLoader = async () => {
  try {
    const res = await apiRequest.get("/posts/profilePosts");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
