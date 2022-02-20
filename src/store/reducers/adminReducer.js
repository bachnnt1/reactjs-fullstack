import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  adminInfo: null,
  genders: [],
  role: [],
  position: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        adminInfo: action.adminInfo,
      };
    case actionTypes.ADMIN_LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        adminInfo: null,
      };
    case actionTypes.PROCESS_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        adminInfo: null,
      };
    case actionTypes.GET_GENDER:
      return {
        ...state,
      };
    case actionTypes.GET_GENDER_SUCCESS:
      let copyState = { ...state };
      copyState.genders = action.genders;
      return {
        ...copyState,
      };
    case actionTypes.GET_GENDER_FAIL:
      return {
        state,
      };
    default:
      return state;
  }
};

export default appReducer;
