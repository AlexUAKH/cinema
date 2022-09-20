import { $http } from "@/plugins/axios";

export const getAll = () => {
  const res = $http.get("/movies");
  console.log("res serv: ", res);
  return res;
};
