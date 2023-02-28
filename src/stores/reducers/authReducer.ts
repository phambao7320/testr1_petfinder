import { REQUEST, SUCCESS, FAILURE } from "../type";
import { LOGIN, LOGOUT } from "../../config/constant";

type authState = {
  isLogin: boolean;
  isLoading: boolean;
  error: any;
};

const initialState = {
  isLogin: false,
  isLoading: false,
  error: null,
} as authState;

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REQUEST(LOGIN): {
      return {
        ...state,
        isLoading: true,
      };
    }

    case SUCCESS(LOGIN): {
      return {
        ...state,
        isLogin: true,
        isLoading: false,
      };
    }

    case FAILURE(LOGIN): {
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        error: "LOI",
      };
    }

    case REQUEST(LOGOUT): {
      return {
        ...state,
        isLoading: true,
      };
    }

    case SUCCESS(LOGOUT): {
      return {
        ...state,
        isLogin: false,
        isLoading: false,
      };
    }

    case FAILURE(LOGOUT): {
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        error: "LOI",
      };
    }

    default:
      return state;
  }
};

export default reducer;
