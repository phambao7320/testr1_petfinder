import AxiosClient from "./api";
import END_POINT from "./constants";

function login(data: any) {
  const send = {
    grant_type: "client_credentials",
    client_id: "v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKuQ",
    client_secret: "91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H",
  };
  return AxiosClient.post(END_POINT.LOGIN, send).then((res) => res);
}

function logout() {
  // return AxiosClient.post(END_POINT.LOGIN, {}).then((res) => res);
}

export { login, logout };
