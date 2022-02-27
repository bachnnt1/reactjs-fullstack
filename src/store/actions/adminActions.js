import actionTypes from "./actionTypes";
import {
  getAllCode,
  createNewUser,
  getAllUsers,
  deleteUser,
  getTopDoctor,
  getAllDoctor,
  postDoctor,
  getDetailDoctorById,
  saveBulkScheduleDoctor,
  getScheduleByDate,
} from "../../services/userService";
export const getGender = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCode("gender");
      if (res) {
        dispatch(getGenderSucess(res.data));
      } else {
        dispatch(getGenderFail());
      }
    } catch (e) {
      dispatch(getGenderFail());
    }
  };
};

export const getGenderSucess = (genders) => ({
  type: actionTypes.GET_GENDER_SUCCESS,
  genders: genders,
});

export const getGenderFail = () => ({
  type: actionTypes.GET_GENDER_FAIL,
  genders: [],
});

export const getPositions = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCode("position");
      if (res) {
        dispatch(getPositionsSucess(res.data));
      } else {
        dispatch(getPositionsFail());
      }
    } catch (e) {
      dispatch(getPositionsFail());
    }
  };
};

export const getPositionsSucess = (positions) => ({
  type: actionTypes.GET_POSITION_SUCCESS,
  positions: positions,
});

export const getPositionsFail = () => ({
  type: actionTypes.GET_POSITION_FAIL,
  positions: [],
});

export const getRoles = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCode("role");
      if (res) {
        dispatch(getRolesSucess(res.data));
      } else {
        dispatch(getRolesFail());
      }
    } catch (e) {
      dispatch(getRolesFail());
    }
  };
};

export const getRolesSucess = (roles) => ({
  type: actionTypes.GET_ROLE_SUCCESS,
  roles: roles,
});

export const getRolesFail = () => ({
  type: actionTypes.GET_ROLE_FAIL,
  roles: [],
});

export const createNewUserRedux = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUser(data);
      if (res) {
        dispatch(saveUserSuccess());
        dispatch(fetchAllUsers());
      } else {
        dispatch(saveUserFail());
      }
    } catch (e) {
      dispatch(saveUserFail());
    }
  };
};

export const saveUserSuccess = () => ({
  type: actionTypes.SAVE_USER_SUCCESS,
});

export const saveUserFail = () => ({
  type: actionTypes.SAVE_USER_FAIL,
});

export const fetchAllUsers = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers("ALL");
      if (res && res.user) {
        dispatch(fetchAllUsersSuccess(res.user));
      } else {
        dispatch(fetchAllUsersFail());
      }
    } catch (e) {
      dispatch(fetchAllUsersFail());
    }
  };
};

export const fetchAllUsersSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCCESS,
  users: data,
});

export const fetchAllUsersFail = () => ({
  type: actionTypes.FETCH_ALL_USERS_FAIL,
});

export const deleteUserRedux = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUser(userId);
      if (res) {
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUsers());
      } else {
        dispatch(deleteUserFail());
      }
    } catch (e) {
      dispatch(deleteUserFail());
    }
  };
};

export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});

export const deleteUserFail = () => ({
  type: actionTypes.DELETE_USER_FAIL,
});

export const getTopDoctorAction = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getTopDoctor("8");
      if (res && res.doctors) {
        dispatch(fetchTopDoctorSuccess(res.doctors));
      } else {
        dispatch(fetchTopDoctorFail());
      }
    } catch (e) {
      dispatch(fetchTopDoctorFail());
    }
  };
};

export const fetchTopDoctorSuccess = (data) => ({
  type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
  topDoctors: data,
});

export const fetchTopDoctorFail = () => ({
  type: actionTypes.FETCH_TOP_DOCTOR_FAIL,
});

export const getAllDoctorAction = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllDoctor();
      if (res && res.doctors && res.doctors.data) {
        dispatch(fetchAllDoctorSuccess(res.doctors.data));
      } else {
        dispatch(fetchAllDoctorFail());
      }
    } catch (e) {
      dispatch(fetchAllDoctorFail());
    }
  };
};

export const fetchAllDoctorSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
  allDoctors: data,
});

export const fetchAllDoctorFail = () => ({
  type: actionTypes.FETCH_ALL_DOCTOR_FAIL,
});

export const postDoctorAction = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await postDoctor(data);
      if (res) {
        dispatch(postDoctorSuccess());
      } else {
        dispatch(postDoctorFail());
      }
    } catch (e) {
      dispatch(postDoctorFail());
    }
  };
};

export const postDoctorSuccess = () => ({
  type: actionTypes.POST_DOCTOR_SUCCESS,
});

export const postDoctorFail = () => ({
  type: actionTypes.POST_DOCTOR_FAIL,
});

export const getDEtailDoctorById = (id) => {
  return async (dispatch, getState) => {
    try {
      let res = await getDetailDoctorById(id);
      if (res) {
        dispatch(getDetailDocSuccess(res));
      } else {
        dispatch(getDetailDocFail());
      }
    } catch (e) {
      dispatch(getDetailDocFail());
    }
  };
};

export const getDetailDocSuccess = (detail) => ({
  type: actionTypes.GET_DETAIL_DOCTOR_SUCCESS,
  detail: detail,
});

export const getDetailDocFail = () => ({
  type: actionTypes.GET_DETAIL_DOCTOR_FAIL,
});

export const getAllCodeTime = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCode("time");
      if (res) {
        dispatch(getAllCodeTimeSuccess(res.data));
      } else {
        dispatch(getAllCodeTimeFail());
      }
    } catch (e) {
      dispatch(getAllCodeTimeFail());
    }
  };
};

export const getAllCodeTimeSuccess = (data) => ({
  type: actionTypes.GET_ALLCODE_HOUR_SUCCESS,
  data: data,
});

export const getAllCodeTimeFail = () => ({
  type: actionTypes.GET_ALLCODE_HOUR_FAIl,
});

export const postBulkSchedule = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await saveBulkScheduleDoctor(data);
      if (res) {
        dispatch(postBulkScheduleSuccess());
      } else {
        dispatch(postBulkScheduleFail());
      }
    } catch (e) {
      dispatch(postBulkScheduleFail());
    }
  };
};

export const postBulkScheduleSuccess = () => ({
  type: actionTypes.POST_BULK_SCHEDULE_SUCCESS,
});

export const postBulkScheduleFail = () => ({
  type: actionTypes.POST_BULK_SCHEDULE_FAIL,
});

export const getScheduleByDoctorId = (doctorId, date) => {
  return async (dispatch, getState) => {
    try {
      let res = await getScheduleByDate(doctorId, date);
      if (res && res.response && res.response.data) {
        dispatch(getScheduleByDoctorIdSuccess(res.response.data));
      } else {
        dispatch(getScheduleByDoctorIdFail());
      }
    } catch (e) {
      dispatch(getScheduleByDoctorIdFail());
    }
  };
};

export const getScheduleByDoctorIdSuccess = (data) => ({
  type: actionTypes.GET_SCHEDULE_BY_TIME_SUCCESS,
  data: data,
});

export const getScheduleByDoctorIdFail = () => ({
  type: actionTypes.GET_SCHEDULE_BY_TIME_FAIL,
});

export const getRequireDoctorInfo = () => {
  return async (dispatch, getState) => {
    try {
      let resPrice = await getAllCode("PRICE");
      let resPayment = await getAllCode("PAYMENT");
      let resProvince = await getAllCode("PROVINCE");
      if (resPrice && resPayment && resProvince) {
        let data = {
          resPrice: resPrice,
          resPayment: resPayment,
          resProvince: resProvince,
        };
        dispatch(getRequireDoctorInfoSuccess(data));
      } else {
        dispatch(getRequireDoctorInfoFail());
      }
    } catch (e) {
      dispatch(getRequireDoctorInfoFail());
    }
  };
};

export const getRequireDoctorInfoSuccess = (data) => ({
  type: actionTypes.GET_REQUIRE_DOCTOR_INFO_SUCCESS,
  data: data,
});

export const getRequireDoctorInfoFail = () => ({
  type: actionTypes.GET_REQUIRE_DOCTOR_INFO_FAIL,
});
