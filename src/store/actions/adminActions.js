import actionTypes from "./actionTypes";
import {
  getAllCode,
  createNewUser,
  getAllUsers,
  deleteUser,
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
