import { useForm, FormProvider } from "react-hook-form";
import { useAppDispatch } from "../../hooks/hookRedux";
import { logoutAction } from "../../stores/actions/authAction";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import FormSearch from "../Form/FormSearch";
import { FaSearch } from "react-icons/fa";

const Headers = () => {
  const dispatch = useAppDispatch();

  const form = useForm();

  const handleClick = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="grid wide">
        <div className="header__inner">
          <div className="header__logo">
            <Link to="/" className="header__logo-link">
              <img src={logo} alt="logo" className="header__logo-img" />
            </Link>
          </div>
          <div className="header__search">
            <FormProvider {...form}>
              <form>
                <FormSearch
                  type="text"
                  placeholder="Nhap vao"
                  name="searchAnimal"
                  className="header__search-input"
                />
                <button className="header__search-btn">
                  <FaSearch className="header__search-btn-icon" />
                </button>
              </form>
            </FormProvider>
          </div>
          <div className="header__logout">
            <Link to="/login" className="header__logout-btn">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
