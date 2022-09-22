import { $http } from "@/plugins/axios";

export const getAll = async (params) => {
  const res = await $http.get("/movies", { params });
  return res.data.data;
};

export const getMovie = async (id) => {
  const res = await $http.get(`/movies?movie_id=${id}`);
  return res.data.data[0];
};
