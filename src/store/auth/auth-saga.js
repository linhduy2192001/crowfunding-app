import { takeLatest } from "redux-saga/effects";
import handleAuthRegister, { handleAuthlogin } from "./auth-handler";
import { authFetchMe, authLogin, authRegister } from "./auth-slice";

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthlogin);
}
