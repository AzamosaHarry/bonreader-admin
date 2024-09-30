import { useNavigate } from "react-router-dom";
import "./reset-password.css";
import logo from "../../assets/icons/logo.png";
import { useState } from "react";
import { useAuth } from "../../../redux/actions/authActions";
import ClipLoader from "react-spinners/ClipLoader";

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const auth = useAuth();
  const resetPassword = () => {};

  const handleReset = async (e) => {
    e.preventDefault();
    navigate("/successful-reset");

    if (!password || !rePassword) {
      setErrorMessage("Fill in all fields");
      return;
    } else if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    } else if (password !== rePassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await resetPassword({
        password: password,
      });
      if (response.status === 200 || response.status === "success") {
        setErrorMessage("");
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
        <h1>Enter New Password</h1>
        <h4 className="otp__form__text">
          Enter a new password different from previously used passwords
        </h4>

        <form className="login__container__form" onSubmit={handleReset}>
          <input
            type="password"
            important
            placeholder="Enter password"
            onClick={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            important
            placeholder="Confirm password"
            onClick={(e) => {
              setRePassword(e.target.value);
            }}
          />

          {errorMessage && (
            <h3 className="login__error__message">{errorMessage}</h3>
          )}
          <button type="submit" disabled={auth.loading}>
            {auth.loading ? (
              <ClipLoader color="#fff" size={20} />
            ) : (
              "Reset Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
