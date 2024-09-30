import { useNavigate } from "react-router-dom";
import { useAuth, useVerifyEmail } from "../../../redux/actions/authActions";
import "./otp.css";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import logo from "../../assets/icons/logo.png";

function OTP() {
  const verifyOtp = useVerifyEmail();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [otp, setOtp] = useState("");
  const auth = useAuth();

  const handleResend = () => {
    console.log("resend");
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    navigate("/reset-password");

    try {
      const response = await verifyOtp({
        otp: otp,
      });
      if (response.status === 200 || response.status === "success") {
        setErrorMessage("");
        navigate("/rest-password");
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
        <h1>Enter OTP</h1>
        <h4 className="otp__form__text">
          A code has been sent to your mail, check and input code below to
          continue
        </h4>

        <form className="login__container__form" onSubmit={handleVerify}>
          <input
            type="text"
            important
            placeholder="Enter otp"
            onClick={(e) => {
              setOtp(e.target.value);
            }}
          />

          {errorMessage && (
            <h3 className="login__error__message">{errorMessage}</h3>
          )}
          <button type="submit" disabled={auth.loading}>
            {auth.loading ? (
              <ClipLoader color="#fff" size={20} />
            ) : (
              "Verify and Proceed"
            )}
          </button>
          <p>
            Didn't get a code? <span onClick={handleResend}>Resend</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default OTP;
