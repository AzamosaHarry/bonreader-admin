import "./admin-new-admin.css";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import toastManager from "../../../component/toast/ToasterManager";
import { useNavigate } from "react-router-dom";
import { useCreateAdmin } from "../../../redux/actions/userActions";

function AdminNewAdmin() {
  const navigate = useNavigate();
  const createAdmin = useCreateAdmin();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

  const handleCreateAdmin = async (e) => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.penName ||
      !formData.email
    ) {
      setErrorMessage("Fields marked as important cannot be empty");
      return;
    }
    try {
      setLoading(true);
      const response = await createAdmin(formData);

      if (response?.payload && !response.error) {
        setErrorMessage("");
        toastManager.addToast({
          message: "Admin created successfully",
          type: "success",
        });
        navigate("/admins");
        return;
      } else {
        setErrorMessage(response.message);
        setErrorMessage("User with this email or pen name already exists");
      }
    } catch (error) {
      setErrorMessage(error.response.message);
      toastManager.addToast({
        message: "failed to create admin",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-new-admin ad__novel">
      <section className="ad__novel__sc__one">
        <h1>Manage Admins</h1>
      </section>
      <section className="ana__section__one">
        <h1>Admin Details</h1>
        <div className="ana__section__one__form__wrap">
          <form className="ana__section__one__form">
            <span>
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                onChange={handleFormChange}
              />
            </span>
            <span>
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                onChange={handleFormChange}
              />
            </span>
            <span>
              <label htmlFor="penName">Pen Name *</label>
              <input
                type="text"
                id="penName"
                name="penName"
                required
                onChange={handleFormChange}
              />
            </span>
            <span>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleFormChange}
              />
            </span>

            {errorMessage && (
              <p
                style={{
                  color: "red",
                }}
              >
                {errorMessage}
              </p>
            )}
          </form>
          <button
            className="ana__section__one__form__submit"
            onClick={handleCreateAdmin}
          >
            {loading ? <ClipLoader size={20} /> : `Add admin`}
          </button>
        </div>
      </section>
    </div>
  );
}

export default AdminNewAdmin;
