import "./successful-reset.css";
import logo from "../../assets/icons/thumbs_up.png";
import { useNavigate } from "react-router-dom";

function SuccesfulReset() {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login__container">
        <img
          src={logo}
          alt="succesful"
          style={{
            objectFit: "contain",
            height: "50px",
          }}
        />
        <h1
          style={{
            margin: "0",
          }}
        >
          Password Reset Succesful!
        </h1>

        <form className="login__container__form">
          <button type="submit" onClick={() => navigate("/signin")}>
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SuccesfulReset;
