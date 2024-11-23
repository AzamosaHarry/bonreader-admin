import { BiPlus } from "react-icons/bi";
import "./admin-profile-edit.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useFetchUserMe,
  useUpdateUserMe,
} from "../../../redux/actions/userActions";
import toastManager from "../../../component/toast/ToasterManager";
import Loading from "../../../component/splash/loading/Loading";
import NoResult from "../../../component/splash/no-result/NoResult";
import { useDispatch } from "react-redux";

function AdminEditProfile() {
  const navigate = useNavigate();
  const fetchUser = useFetchUserMe();
  const updateUserMe = useUpdateUserMe();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    penName: "",
    email: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const response = await updateUserMe(formData);

      if (response?.payload) {
        setErrorMessage("");
        toastManager.addToast({
          message: "Profile updated succesfully",
          type: "success",
        });
        dispatch({ type: "UPDATE_USER", payload: response.payload });
        navigate("/profile");
        return;
      } else {
        setErrorMessage(response.message);
        toastManager.addToast({
          message: "Failed to update user profile",
          type: "error",
        });
      }
    } catch (error) {
      setErrorMessage(error.response.message);
      toastManager.addToast({
        message: "Failed to update user profile",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFetchUser = async () => {
    try {
      setLoading(true);
      const response = await fetchUser();

      if (response?.payload) {
        setErrorMessage("");
        setUser(response.payload);
        setFormData({
          firstName: response.payload.first_name,
          lastName: response.payload.last_name,
          penName: response.payload.pen_name,
          email: response.payload.email,
        });
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

  useEffect(() => {
    handleFetchUser();
  }, []);

  return (
    <div className="admin-new-admin ad__novel">
      <section className="ad__novel__sc__one">
        <h1>Edit Profile</h1>
        <span className="ad__novel__sc__one__span">
          {/* <button className="ad__novel__sc__one__span__button alt">
            <BiPlus /> Add new
          </button> */}
        </span>
      </section>
      <section className="ana__section__one">
        <h1>Profile Info</h1>
        {loading ? (
          <Loading />
        ) : !user ? (
          <p>Error</p>
        ) : (
          <div className="ana__section__one__form__wrap">
            <form className="ana__section__one__form">
              <span>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  required
                  onChange={handleFormChange}
                />
              </span>
              <span>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  required
                  onChange={handleFormChange}
                />
              </span>
              <span>
                <label htmlFor="penName">Pen name </label>
                <input
                  type="penName"
                  id="penName"
                  name="penName"
                  value={formData.penName}
                  required
                  onChange={handleFormChange}
                />
              </span>
              <span>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  disabled={true}
                  value={formData.email}
                  required
                  onChange={handleFormChange}
                />
              </span>
            </form>
            <button
              className="ana__section__one__form__submit"
              onClick={handleUpdate}
            >
              Update Profile
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default AdminEditProfile;
