import AxiosClient from "./api";
import END_POINT from "./constants";
import { parseItem } from "../utils";

function getAllAnimals(data: any) {
  console.log(data);
  return AxiosClient.get(`${END_POINT.ANIMAL}${data}`).then((res) => res);
}

function getFilterAnimals(data: any) {
  return AxiosClient.get(END_POINT.ANIMAL, data).then((res) => res);
}

function getAllTypeAnimals() {
  return AxiosClient.get(END_POINT.TYPES).then((res) => res);
}

export { getAllAnimals, getFilterAnimals, getAllTypeAnimals };
