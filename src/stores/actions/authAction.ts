import { REQUEST, SUCCESS, FAILURE } from "../type";
import { LOGIN, LOGOUT } from "./../../config/constant";
import { login, logout } from "../../apis";
import { removeLocalStorage, setLocalStorage, STORAGE } from "../../utils";

export function loginAction(data: any) {
  return async (dispatch: any) => {
    let result: any = {};
    try {
      dispatch({ type: REQUEST(LOGIN) });
      result = await login(data);
      if (result) {
        console.log(result);
        dispatch({ type: SUCCESS(LOGIN), payload: result });
        setLocalStorage(STORAGE.USER_TOKEN, result.data.access_token);
      } else {
        dispatch({ type: FAILURE(LOGIN), error: result });
      }
    } catch (error) {
      dispatch({ type: FAILURE(LOGIN), error: result });
    }
    return result;
  };
}

export function logoutAction() {
  return async (dispatch: any) => {
    let result: any = {};
    try {
      dispatch({ type: SUCCESS(LOGOUT), payload: result });
      removeLocalStorage(STORAGE.USER_TOKEN);
    } catch (error) {
      dispatch({ type: FAILURE(LOGOUT), error: result });
    }
    return result;
  };
}
