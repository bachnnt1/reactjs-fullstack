import axios from "../axios";
const handeLogin = (email, password) => {
  return axios.post("/api/login");
};

export { handeLogin };
