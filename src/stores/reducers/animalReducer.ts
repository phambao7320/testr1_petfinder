import { REQUEST, SUCCESS, FAILURE } from "../type";
import { GET_ALL_ANIMALS, GET_FILTER_ANIMALS } from "../../config/constant";

type animalState = {
  pagination: any;
  animals: any[];
  isLoading: boolean;
  error: any;
};

const initialState = {
  pagination: {},
  animals: [],
  isLoading: false,
  error: null,
} as animalState;

const reducer = (state = initialState, action: any) => {
  switch (action?.type) {
    case REQUEST(GET_ALL_ANIMALS): {
      return {
        ...state,
        isLoading: true,
      };
    }

    case SUCCESS(GET_ALL_ANIMALS): {
      const { animals, pagination } = action?.payload;
      return {
        ...state,
        isLoading: false,
        pagination,
        animals,
      };
    }

    case FAILURE(GET_ALL_ANIMALS): {
      return {
        ...state,
        isLoading: false,
        error: "LOI",
      };
    }

    case REQUEST(GET_FILTER_ANIMALS): {
      return {
        ...state,
        isLoading: true,
      };
    }

    case SUCCESS(GET_FILTER_ANIMALS): {
      return {
        ...state,
        isLogin: false,
        isLoading: false,
      };
    }

    case FAILURE(GET_FILTER_ANIMALS): {
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
