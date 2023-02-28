import axios from "axios";
import { BASE_API_URL } from "../config/constant";
import JSONBig from "json-bigint";
import {
  STORAGE,
  getLocalStorage,
  setLocalStorage,
  clearAllLocalStorage,
  removeLocalStorage,
  isEmpty,
  assign,
} from "../utils";

const singletonEnforcer = Symbol();
const BASE_URL = `${BASE_API_URL}`;
class AxiosClient {
  axiosClient: any;
  static axiosClientInstance: AxiosClient;

  constructor(enforcer: any) {
    if (enforcer !== singletonEnforcer) {
      throw new Error("Cannot initialize Axios client single instance");
    }

    this.axiosClient = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    this.getExistTokenOnLocalStorage();

    this.axiosClient.defaults.transformResponse = (data: any) =>
      JSONBig.parse(data);

    this.axiosClient.interceptors.request.use(
      (configure: any) => {
        const token = getLocalStorage(STORAGE.USER_TOKEN);
        if (token) {
          configure.headers.Authorization = `Bearer ${token}`;
        }
        return configure;
      },
      (error: any) => Promise.reject(error)
    );

    this.axiosClient.interceptors.response.use(
      (response: any) => {
        const { status, data } = response;
        return {
          status,
          data,
        };
      },
      async (error: any) => {
        if (error.response) {
          const { status, config = {}, data } = error.response;
          switch (status) {
            case 401:
              const url = window.location.href;
              removeLocalStorage(STORAGE.USER_TOKEN);
              if (!url.includes("/login")) {
                window.location.reload();
              }
              break;
            case 404:
              break;
            case 403:
              break;
            default:
              break;
          }
          return Promise.reject(data);
        } else {
          throw error;
        }
      }
    );
  }

  static get instance() {
    if (!this.axiosClientInstance) {
      this.axiosClientInstance = new AxiosClient(singletonEnforcer);
    }

    return this.axiosClientInstance;
  }

  async getExistTokenOnLocalStorage() {
    const userToken: any = await getLocalStorage(STORAGE.USER_TOKEN);
    if (userToken) {
      this.setHeader(userToken);
    }
  }

  setHeader = async (userToken = null) => {
    this.axiosClient.defaults.headers.common.Authorization = `Bearer ${userToken}`;
  };

  get = async (resource: any, slug = "", config: any = {}) => {
    let { headers } = config;
    if (!headers) {
      headers = this.axiosClient.defaults.headers;
    }
    slug += "";
    const requestURL = isEmpty(slug) ? `${resource}` : `${resource}/${slug}`;
    return this.axiosClient.get(requestURL, {
      data: null,
      ...assign(config, { headers }),
    });
  };

  post = async (resource: any, data: any, config = {}) =>
    this.axiosClient.post(
      `${resource}`,
      data,
      assign(config, this.axiosClient.defaults.headers)
    );
}

export default AxiosClient.instance;
