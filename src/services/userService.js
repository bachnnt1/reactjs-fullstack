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
const getAllDoctor = () => {
  return axios.get("/api/get-all-doctor");
};
const postDoctor = (data) => {
  return axios.post("/api/save-info-doctor", data);
};

const postAppointment = (data) => {
  return axios.post("/api/book-appointment", data);
};

const getDetailDoctorById = (id) => {
  return axios.get(`/api/get-detail-doctor?id=${id}`);
};

const saveBulkScheduleDoctor = (data) => {
  return axios.post(`/api/bulk-create-schedule`, data);
};

const getScheduleByDate = (doctorId, date) => {
  return axios.get(
    `/api/get-schedule-by-date?doctorId=${doctorId}&date=${date}`
  );
};
const getProfilebyId = (doctorId) => {
  return axios.get(`/api/get-profile-by-id?doctorId=${doctorId}`);
};

const verifyBookAppointment = (data) => {
  return axios.post(`/api/verify-book-appointment`, data);
};

const createNewSpecialty = (data) => {
  return axios.post(`/api/create-new-specialty`, data);
};
export {
  handeLogin,
  getAllUsers,
  createNewUser,
  deleteUser,
  editUserService,
  getAllCode,
  getTopDoctor,
  getAllDoctor,
  postDoctor,
  getDetailDoctorById,
  saveBulkScheduleDoctor,
  getScheduleByDate,
  getProfilebyId,
  postAppointment,
  verifyBookAppointment,
  createNewSpecialty,
};
