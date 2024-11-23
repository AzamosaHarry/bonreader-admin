import "./Login.css";
import logo from "../../../assets/icons/logo.png";
import google__icon from "../../../assets/icons/google.png";
import facebook__icon from "../../../assets/icons/facebook.png";
import ClipLoader from "react-spinners/ClipLoader";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useLogin } from "../../../redux/actions/authActions";
import toastManager from "../../../component/toast/ToasterManager";
import { useFetchUserMe } from "../../../redux/actions/userActions";
import { useDispatch } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const login = useLogin();
  const fetchUser = useFetchUserMe();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const auth = useAuth();
  const dispatch = useDispatch();

  const handleFetchUser = async () => {
    try {
      setLoading(true);
      const response = await fetchUser();

      if (response?.payload) {
        setErrorMessage("");
        dispatch({ type: "UPDATE_USER", payload: response.payload });
        return;
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      setErrorMessage(error.response.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email, password);

      if (response.status === 200 || response.status === "success") {
        setErrorMessage("");
        toastManager.addToast({
          message: "Successful login",
          type: "success",
        });

        handleFetchUser();
        navigate("/dashboard");
        return;
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      setErrorMessage(error.response.message);
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="" />
        <h1>You are welcome</h1>
        <div className="login__container__social__signin">
          <button>
            <img src={google__icon} alt="" />
            Sign in with Google
          </button>
          <button>
            <img src={facebook__icon} alt="" />
            Sign in with Facebook
          </button>
        </div>

        <form className="login__container__form" onSubmit={handleLogin}>
          <input
            type="email"
            important
            placeholder="Enter your email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {errorMessage && (
            <h3 className="login__error__message">{errorMessage}</h3>
          )}
          <button type="submit" disabled={auth.loading}>
            {auth.loading ? <ClipLoader color="#fff" size={20} /> : "Sign in"}
          </button>
          <p>
            Forgot password?
            <span onClick={() => navigate("/forget-password")}>Reset Here</span>
          </p>
        </form>
        {/* <p>
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign up</span>
        </p> */}
      </div>
    </div>
  );
}

export default Login;
