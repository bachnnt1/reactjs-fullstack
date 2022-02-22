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

const deleteUser = (userId) => {
  return axios.delete("/api/delete-user", { data: { id: userId } });
};

const editUserService = (user) => {
  return axios.put("/api/edit-user", user);
};

const getAllCode = (type) => {
  return axios.get(`/api/allcode?type=${type}`);
};
const getTopDoctor = (limit) => {
  return axios.get(`/api/get-top-doctor?limit=${limit}`);
};
export {
  handeLogin,
  getAllUsers,
  createNewUser,
  deleteUser,
  editUserService,
  getAllCode,
  getTopDoctor
};
