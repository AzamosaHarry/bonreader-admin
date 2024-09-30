import "./Signup.css";
import logo from "../../assets/icons/logo.png";
import google__icon from "../../assets/icons/google.png";
import facebook__icon from "../../assets/icons/facebook.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useAuth, useSignUp } from "../../../redux/actions/authActions";

function Signup() {
  const navigate = useNavigate();
  const signUp = useSignUp();
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    gender: "Male",
    re_password: "",
  });

  //Redux
  const auth = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signUp(formData);
      if (response.status === 200 || response.status === "success") {
        // console.log("signup", response);
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
    <div className="signup">
      <div className="signup__container">
        <img src={logo} alt="" />
        <h1>Signup</h1>
        <div className="signup__container__social__signin">
          <button>
            <img src={google__icon} alt="" />
            Sign in with Google
          </button>
          <button>
            <img src={facebook__icon} alt="" />
            Sign in with Facebook
          </button>
        </div>

        <form className="signup__container__form" onSubmit={handleSubmit}>
          <input
            name="first_name"
            type="text"
            important
            placeholder="Enter First Name"
            onChange={(e) => handleChange(e)}
          />
          <input
            name="last_name"
            type="text"
            important
            placeholder="Enter Last Name"
            onChange={(e) => handleChange(e)}
          />
          <input
            name="email"
            type="email"
            important
            placeholder="Enter your email address"
            onChange={(e) => handleChange(e)}
          />
          <input
            name="password"
            type="password"
            important
            placeholder="Enter your password"
            onChange={(e) => handleChange(e)}
          />
          <input
            name="re_password"
            type="password"
            important
            placeholder="Confirm password"
            onChange={(e) => handleChange(e)}
          />
          {errorMessage && (
            <h3 className="login__error__message">{errorMessage}</h3>
          )}
          <button type="submit" disabled={auth.loading}>
            {auth.loading ? <ClipLoader color="#fff" size={20} /> : "Sign up"}
          </button>
        </form>
        <p>
          Have an account?{" "}
          <span
            onClick={() => {
              navigate("/admin");
            }}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
