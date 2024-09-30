import { useNavigate } from "react-router-dom";
import "./forget-password.css";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import logo from "../../assets/icons/logo.png";
import { useAuth } from "../../../redux/actions/authActions";

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const auth = useAuth();

  const verifyEmail = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/otp");

    if (!email) {
      setErrorMessage("Please enter your email address");
      return;
    }

    try {
      const response = await verifyEmail({
        email: email,
      });
      if (response.status === 200 || response.status === "success") {
        setErrorMessage("");
        navigate("/otp");
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
        <h1>Reset Password</h1>
        <h4 className="otp__form__text">
          Please enter the email address attached to your account
        </h4>

        <form className="login__container__form" onSubmit={handleSubmit}>
          <input
            type="email"
            important
            placeholder="Enter email"
            onClick={(e) => {
              setEmail(e.target.value);
            }}
          />

          {errorMessage && (
            <h3 className="login__error__message">{errorMessage}</h3>
          )}
          <button type="submit" disabled={auth.loading}>
            {auth.loading ? <ClipLoader color="#fff" size={20} /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
