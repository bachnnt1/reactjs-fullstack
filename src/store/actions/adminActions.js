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
