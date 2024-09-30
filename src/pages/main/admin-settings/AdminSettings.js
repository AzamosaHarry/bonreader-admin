import { BiPlus } from "react-icons/bi";
import "./admin-settings.css";
import { useState } from "react";

function AdminSettings() {
  const handleChange = () => {
    //do something
  };

  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>Settings</h1>
      </section>
      <section className="ad__settings__sc__one">
        <div>Change password</div>
        <div>
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
        </div>
        <div>Logout </div>
      </section>
    </div>
  );
}
export default AdminSettings;
