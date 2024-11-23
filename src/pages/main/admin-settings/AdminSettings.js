import { BiPlus } from "react-icons/bi";
import "./admin-settings.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../../redux/actions/authActions";
import toastManager from "../../../component/toast/ToasterManager";

function AdminSettings() {
  const navigate = useNavigate();
  const logout = useLogout();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = () => {
    //do something
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await logout();
      if (response.status === true || response.status === "success") {
        setErrorMessage("");

        toastManager.addToast({
          message: "Logout successful",
          type: "success",
        });
        navigate("/");
        return;
      } else {
        setErrorMessage(response.message);
        toastManager.addToast({
          // message: "Logout unsuccessful",
          // type: "error",
          message: "Logout successful",
          type: "success",
        });
      }
    } catch (error) {
      setErrorMessage(error.response.message);
    } finally {
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>Settings</h1>
      </section>
      <section className="ad__settings__sc__one">
        <div>Change password</div>
        {/* <div>
          Enable two factor authentication
          <div className="toggle__container">
            <input
              type="checkbox"
              id="check"
              className="toggle"
              onChange={handleChange}
            />
            <label htmlFor="check" className="toggle__label">
              <span className="toggle__label__text"></span>
            </label>
          </div>
        </div> */}
        <div onClick={handleLogout}>Logout </div>
      </section>
    </div>
  );
}
export default AdminSettings;
