import { toast } from "react-toastify";
import { call } from "redux-saga/effects";
import { saveToken } from "../../utils/auth";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthReigister,
} from "./auth-requests";

export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthReigister, payload);
    if (response.status === 201) {
      toast.success("Create new account successfully");
    }
  } catch (error) {
    console.log("err", error);
  }
  yield 1;
}

function* handleAuthlogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      handleAuthFetchMe({ payload: response.data.accessToken });
    }
    yield 1;
  } catch (error) {}
}

function* handleAuthFetchMe({ payload }) {
  console.log("payload", payload);
  try {
    const response = yield call(requestAuthFetchMe, payload);
    console.log("response", response);
  } catch (err) {}
}
export { handleAuthlogin, handleAuthFetchMe };
