import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  adminInfo: null,
  genders: [],
  role: [],
  position: [],
  users: [],
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
      state.genders = action.genders;
      return {
        ...state,
      };
    case actionTypes.GET_GENDER_FAIL:
      return {
        state,
      };
    case actionTypes.GET_POSITION:
      return {
        ...state,
      };
    case actionTypes.GET_POSITION_SUCCESS:
      state.position = action.positions;
      return {
        ...state,
      };
    case actionTypes.GET_POSITION_FAIL:
      return {
        state,
      };
    case actionTypes.GET_ROLE:
      return {
        ...state,
      };
    case actionTypes.GET_ROLE_SUCCESS:
      state.role = action.roles;
      return {
        ...state,
      };
    case actionTypes.GET_ROLE_FAIL:
      return {
        state,
      };
    case actionTypes.FETCH_ALL_USERS_SUCCESS:
      state.users = action.users;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_USERS_FAIL:
      state.users = [];
      return {
        state,
      };
    default:
      return state;
  }
};

export default appReducer;
