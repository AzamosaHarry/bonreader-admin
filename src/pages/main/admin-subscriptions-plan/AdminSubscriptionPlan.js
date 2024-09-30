import { useState } from "react";
import "./admin-subscription-plan.css";

function AdminSubscriptionsPlan() {
  const [formData, setFormData] = useState({
    plan: "",
    description: "",
    validity: "",
    price: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>Add new subscription plan</h1>
        <span className="ad__novel__sc__one__span">
          {/* <button className="ad__novel__sc__one__span__button alt">
            <BiPlus /> Add new
          </button> */}
        </span>
      </section>
      <div className="ana__section__one__form__wrap">
        <form className="ana__section__one__form">
          <span style={{ width: "100%" }}>
            <label htmlFor="plan">Plan *</label>
            <input
              type="text"
              id="plan"
              name="plan"
              required
              onChange={handleFormChange}
            />
          </span>
          <span style={{ width: "100%" }}>
            <label htmlFor="description">Description*</label>
            {/* <input
              type="text"
              id="lastName"
              name="lastName"
              required
              onChange={handleFormChange}
            /> */}
            <textarea
              id="description"
              name="description"
              required
              onChange={handleFormChange}
              style={{
                height: "200px",
                borderRadius: "10px",
                border: "1px solid #f2994a",
              }}
            ></textarea>
          </span>
          <span>
            <label htmlFor="validity">Validity *</label>
            <input
              type="validity"
              id="validity"
              name="validity"
              required
              onChange={handleFormChange}
            />
          </span>
          <span>
            <label htmlFor="price">Price *</label>
            <input
              type="number"
              id="price"
              name="price"
              required
              onChange={handleFormChange}
            />
          </span>
        </form>
        <button className="ana__section__one__form__submit">Publish</button>
      </div>
    </div>
  );
}

export default AdminSubscriptionsPlan;
