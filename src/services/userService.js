import axios from "../axios";
const handeLogin = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getAllUsers = (id) => {
  return axios.get(`/api/get-all-user?id=${id}`);
};

const createNewUser = (data) => {
  return axios.post("/api/create-new-user", data);
};
export { handeLogin, getAllUsers, createNewUser };
