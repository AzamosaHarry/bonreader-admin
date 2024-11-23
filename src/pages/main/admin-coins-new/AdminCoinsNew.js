import { ClipLoader } from "react-spinners";
import "./admin-coins-new.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateCoinOptions } from "../../../redux/actions/coinActions";
import toastManager from "../../../component/toast/ToasterManager";

function AdminCoinsNew() {
  const navigate = useNavigate();
  const createCoinOptions = useCreateCoinOptions();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    numberOfCoins: "",
    price: "",
    bonus: "",
    currency: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateOption = async (e) => {
    if (!formData.numberOfCoins || !formData.price || !formData.bonus) {
      setErrorMessage("Fields marked as important cannot be empty");
      return;
    }
    try {
      setLoading(true);
      const response = await createCoinOptions(formData);

      if (response?.payload && !response.error) {
        setErrorMessage("");
        toastManager.addToast({
          message: "Coin option created successfully",
          type: "success",
        });
        navigate("/coins");
        return;
      } else {
        setErrorMessage(response.message);
        toastManager.addToast({
          message: "failed to create coin option",
          type: "error",
        });
      }
    } catch (error) {
      setErrorMessage(error.response.message);
      toastManager.addToast({
        message: "failed to create coin option",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>Add new coins</h1>
        <span className="ad__novel__sc__one__span"></span>
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
            <select
              id="currency"
              name="currency"
              required
              onChange={handleFormChange}
              value={formData.currency}
            >
              <option value={null}>--</option>
              <option value="NGN">NGN</option>
              <option value="USD">USD</option>
            </select>
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
          disabled={loading}
          onClick={handleCreateOption}
        >
          {loading ? <ClipLoader size={20} /> : `Create`}
        </button>
      </div>
    </div>
  );
}

export default AdminCoinsNew;
