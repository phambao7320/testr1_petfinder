import * as yup from "yup";

const scheme = () =>
  yup.object().shape({
    apikey: yup.string().trim().required("Not empty apikey"),
    secret: yup.string().trim().required("Not empty secret"),
  });

export default scheme;
