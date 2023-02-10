import axios from "axios";

const BASE_API_URL =
  "https://api.kontenbase.com/query/api/v1/7f81c3a1-9695-4797-ae79-98485cb46070";

const axiosInstance = axios.create({ baseURL: BASE_API_URL });

type Post = {
  _id: string;
  title: string;
  story: string;
};

const response = await axiosInstance.get("/posts");
export const posts: Post[] = response.data;
