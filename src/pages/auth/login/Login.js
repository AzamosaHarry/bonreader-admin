import "./Login.css";
import logo from "../../../assets/icons/logo.png";
import google__icon from "../../../assets/icons/google.png";
import facebook__icon from "../../../assets/icons/facebook.png";
import ClipLoader from "react-spinners/ClipLoader";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useLogin } from "../../../redux/actions/authActions";

function Login() {
  const navigate = useNavigate();
  const login = useLogin();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const auth = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login({
        email: email,
        password: password,
      });

      if (response.status === 200 || response.status === "success") {
        setErrorMessage("");
        navigate("/admin/dashboard");
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
            onClick={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter your password"
            onClick={(e) => {
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
