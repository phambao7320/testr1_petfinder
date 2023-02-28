import { REQUEST, SUCCESS, FAILURE } from "../type";
import { GET_ALL_ANIMALS, SET_FILTER_ANIMALS } from "./../../config/constant";
import { getAllAnimals } from "../../apis";

export function getAllAnimalAction(data: any) {
  return async (dispatch: any) => {
    let result: any = {};
    try {
      dispatch({ type: REQUEST(GET_ALL_ANIMALS) });
      result = await getAllAnimals(data);
      if (result.status === 200) {
        dispatch({ type: SUCCESS(GET_ALL_ANIMALS), payload: result.data });
      } else {
        dispatch({ type: FAILURE(GET_ALL_ANIMALS), error: result });
      }
    } catch (error) {
      dispatch({ type: FAILURE(GET_ALL_ANIMALS), error: result });
    }
  };
}

export function setFilterAnimalAction() {
  return async (dispatch: any) => {
    let result: any = {};
    try {
      dispatch({ type: SUCCESS(SET_FILTER_ANIMALS), payload: result });
    } catch (error) {
      dispatch({ type: FAILURE(SET_FILTER_ANIMALS), error: result });
    }
    return result;
  };
}
