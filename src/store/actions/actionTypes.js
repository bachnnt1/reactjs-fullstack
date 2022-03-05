const actionTypes = Object.freeze({
  //app
  APP_START_UP_COMPLETE: "APP_START_UP_COMPLETE",
  SET_CONTENT_OF_CONFIRM_MODAL: "SET_CONTENT_OF_CONFIRM_MODAL",
  CHANGE_LANGUAGE: "CHANGE_LANGUAGE",

  //user
  ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
  PROCESS_LOGOUT: "PROCESS_LOGOUT",
  GET_GENDER: "GET_GENDER",
  GET_GENDER_SUCCESS: "GET_GENDER_SUCCESS",
  GET_GENDER_FAIL: "GET_GENDER_FAIL",
  GET_POSITION: "GET_POSITION",
  GET_POSITION_SUCCESS: "GET_POSITION_SUCCESS",
  GET_POSITION_FAIL: "GET_POSITION_FAIL",
  GET_ROLE: "GET_ROLE",
  GET_ROLE_SUCCESS: "GET_ROLE_SUCCESS",
  GET_ROLE_FAIL: "GET_ROLE_FAIL",
  SAVE_USER_SUCCESS: "SAVE_USER_SUCCESS",
  SAVE_USER_FAIL: "SAVE_USER_FAIL",
  FETCH_ALL_USERS_SUCCESS: "FETCH_ALL_USERS_SUCCESS",
  FETCH_ALL_USERS_FAIL: "FETCH_ALL_USERS_FAIL",
  DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
  DELETE_USER_FAIL: "DELETE_USER_FAIL",
  FETCH_TOP_DOCTOR_SUCCESS: "FETCH_TOP_DOCTOR_SUCCESS",
  FETCH_TOP_DOCTOR_FAIL: "FETCH_TOP_DOCTOR_FAIL",
  FETCH_ALL_DOCTOR_SUCCESS: "FETCH_ALL_DOCTOR_SUCCESS",
  FETCH_ALL_DOCTOR_FAIL: "FETCH_ALL_DOCTOR_FAIL",
  POST_DOCTOR_SUCCESS: "POST_DOCTOR_SUCCESS",
  POST_DOCTOR_FAIL: "POST_DOCTOR_FAIL",
  GET_DETAIL_DOCTOR_SUCCESS: "GET_DETAIL_DOCTOR_SUCCESS",
  GET_DETAIL_DOCTOR_FAIL: "GET_DETAIL_DOCTOR_FAIL",

  GET_ALLCODE_HOUR_SUCCESS: "GET_ALLCODE_HOUR_SUCCESS",
  GET_ALLCODE_HOUR_FAIl: "GET_ALLCODE_HOUR_FAIL",

  POST_BULK_SCHEDULE_SUCCESS: "POST_BULK_SCHEDULE_SUCCESS",
  POST_BULK_SCHEDULE_FAIL: "POST_BULK_SCHEDULE_FAIL",

  GET_SCHEDULE_BY_TIME_SUCCESS: "GET_SCHEDULE_BY_TIME_SUCCESS",
  GET_SCHEDULE_BY_TIME_FAIL: "GET_SCHEDULE_BY_TIME_FAIL",

  GET_REQUIRE_DOCTOR_INFO_SUCCESS: "GET_REQUIRE_DOCTOR_INFO_SUCCESS",
  GET_REQUIRE_DOCTOR_INFO_FAIL: "GET_REQUIRE_DOCTOR_INFO_FAIL",

  GET_PROFILE_SUCCESS: "GET_PROFILE_SUCCESS",
  GET_PROFILE_FAIL: "GET_PROFILE_FAIL",

  POST_APPOINTMENT_SUCCESS: "POST_APPOINTMENT_SUCCESS",
  POST_APPOINTMENT_FAIL: "POST_APPOINTMENT_FAIL",

  VERIFY_EMAIL_SUCCESS: "VERIFY_EMAIL_SUCCESS",
  VERIFY_EMAIL_FAIL: "VERIFY_EMAIL_FAIL",

  CREATE_SPECIALTY_SUCCESS: "CREATE_SPECIALTY_SUCCESS",
  CREATE_SPECIALTY_FAIL: "CREATE_SPECIALTY_FAIL",

  CREATE_CLINIC_SUCCESS: "CREATE_CLINIC_SUCCESS",
  CREATE_CLINIC_FAIL: "CREATE_CLINIC_FAIL",

  FETCH_ALL_CLINIC_SUCCESS: "FETCH_ALL_CLINIC_SUCCESS",
  FETCH_ALL_CLINIC_FAIL: "FETCH_ALL_CLINIC_FAIL",

  FETCH_ALL_SPECIALTY_SUCCESS: "FETCH_ALL_SPECIALTY_SUCCESS",
  FETCH_ALL_SPECIALTY_FAIL: "FETCH_ALL_SPECIALTY_FAIL",

  FETCH_SPECIALTY__ID_SUCCESS: "FETCH_SPECIALTY__ID_SUCCESS",
  FETCH_SPECIALTY__ID_FAIL: "FETCH_SPECIALTY__ID_FAIL",

  FETCH_CLICNIC_ID_SUCCESS: "FETCH_CLICNIC_ID_SUCCESS",
  FETCH_CLICNIC_ID_FAIL: "FETCH_CLICNIC_ID_FAIL",
});

export default actionTypes;
