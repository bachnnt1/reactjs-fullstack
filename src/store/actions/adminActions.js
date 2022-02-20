import actionTypes from "./actionTypes";
import { getAllCode } from "../../services/userService";
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
