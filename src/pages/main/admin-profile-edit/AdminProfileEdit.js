import { BiPlus } from "react-icons/bi";
import "./admin-profile-edit.css";
import { useState } from "react";

function AdminEditProfile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
              <label htmlFor="phone">Phone *</label>
              <input
                type="phone"
                id="phone"
                name="phone"
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
          </form>
          <button className="ana__section__one__form__submit">
            Update Profile
          </button>
        </div>
      </section>
    </div>
  );
}

export default AdminEditProfile;
