import "./admin-coins-new.css";
import { useState } from "react";

function AdminCoinsNew() {
  const [formData, setFormData] = useState({
    numberOfCoins: "",
    price: "",
    bonus: "",
    currency: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>Add new coins</h1>
        <span className="ad__novel__sc__one__span">
          {/* <button className="ad__novel__sc__one__span__button alt">
            <BiPlus /> Add new
          </button> */}
        </span>
      </section>
      <div className="ana__section__one__form__wrap">
        <form className="ana__section__one__form">
          <span style={{ width: "100%" }}>
            <label htmlFor="numberOfCoins">Number of coins *</label>
            <input
              type="text"
              id="numberOfCoins"
              name="numberOfCoins"
              required
              onChange={handleFormChange}
            />
          </span>
          <span>
            <label htmlFor="price">Price*</label>
            <input
              type="text"
              id="price"
              name="price"
              required
              onChange={handleFormChange}
            />
          </span>
          <span>
            <label htmlFor="bonus">Bonus *</label>
            <input
              type="text"
              id="bonus"
              name="bonus"
              required
              onChange={handleFormChange}
            />
          </span>
          <span>
            <label htmlFor="currency">Currency *</label>
            <input
              type="number"
              id="currency"
              name="currency"
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

export default AdminCoinsNew;
