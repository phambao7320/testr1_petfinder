import { useForm, FormProvider } from "react-hook-form";
import FormInput from "../../components/Form/FormInput";
import { loginAction } from "../../stores/actions/authAction";
import { useAppDispatch } from "../../hooks/hookRedux";
import { FaUser, FaLock } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import scheme from "../../models/Auth/login";
import { ErrorMessage } from "@hookform/error-message";

interface LoginForm {
  apikey: string;
  secret: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const form = useForm<LoginForm>({
    resolver: yupResolver(scheme()),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;
  const onSubmit = (data: any) => {
    dispatch(loginAction(data));
  };

  return (
    <div className="container-login">
      <div className="modal-login">
        <FormProvider {...form}>
          <form className="modal-center" onSubmit={handleSubmit(onSubmit)}>
            <span className="title_form">Login</span>
            <div className="wrap-form">
              <label htmlFor="first_name">Apikey</label>
              <div className="form-d-f-2 ">
                <FaUser className="icon_input" />
                <FormInput
                  className="input100"
                  type="text"
                  name="apikey"
                  placeholder="Enter your apikey"
                  id="apikey"
                />
                <ErrorMessage
                  errors={errors.apikey}
                  name="apikey"
                  render={({ message }) => <p>{message}</p>}
                />
                <span className="focus-border"></span>
              </div>
            </div>
            <div className="wrap-form">
              <label htmlFor="first_name">Secret</label>
              <div className="form-d-f-2 ">
                <FaLock className="icon_input" />
                <FormInput
                  className="input100"
                  type="password"
                  name="secret"
                  placeholder="*********"
                  id="secret"
                />
                <ErrorMessage
                  errors={errors.secret}
                  name="secret"
                  render={({ message }) => <p>{message}</p>}
                />
                <span className="focus-border"></span>
              </div>
            </div>
            <div className="button_form">
              <div className="button_border">
                <div className="button_border-radient"></div>
                <button className="button_login" type="submit">
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Login;
