import axios from "../axios";
const handeLogin = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getAllUsers = (id) => {
  return axios.get(`/api/get-all-user?id=${id}`);
};
export { handeLogin, getAllUsers };
