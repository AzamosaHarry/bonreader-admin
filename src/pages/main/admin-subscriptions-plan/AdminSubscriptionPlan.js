import { useState } from "react";
import "./admin-subscription-plan.css";
import { useCreateSubscriptionPlan } from "../../../redux/actions/subscriptionActions";
import { ClipLoader } from "react-spinners";
import toastManager from "../../../component/toast/ToasterManager";
import { useNavigate } from "react-router-dom";

function AdminSubscriptionsPlan() {
  const navigate = useNavigate();
  const createSubscriptiionPlan = useCreateSubscriptionPlan();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    duration: "",
    amount: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleCreatePlan = async (e) => {
    if (
      !formData.name ||
      !formData.description ||
      !formData.duration ||
      !formData.amount
    ) {
      setErrorMessage("Fields cannot be empty");
      return;
    }
    try {
      setLoading(true);
      const response = await createSubscriptiionPlan(formData);

      if (response?.payload) {
        setErrorMessage("");
        toastManager.addToast({
          message: "Subscription plan created successfully",
          type: "success",
        });
        navigate("/subscriptions");
        return;
      } else {
        setErrorMessage(response.message);
        toastManager.addToast({
          message: "failed to create subscription plan",
          type: "error",
        });
      }
    } catch (error) {
      setErrorMessage(error.response.message);
      toastManager.addToast({
        message: "failed to create subscription plan",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>Add new subscription plan</h1>
        <span className="ad__novel__sc__one__span"></span>
      </section>
      <div className="ana__section__one__form__wrap">
        <form className="ana__section__one__form">
          <span style={{ width: "100%" }}>
            <label htmlFor="name">Plan name*</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={handleFormChange}
            />
          </span>
          <span style={{ width: "100%" }}>
            <label htmlFor="description">Description*</label>
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
            <label htmlFor="duration">Duration *</label>
            <input
              id="duration"
              name="duration"
              required
              onChange={handleFormChange}
            />
          </span>
          <span>
            <label htmlFor="amount">Amount *</label>
            <input
              type="number"
              id="amount"
              name="amount"
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
          disabled={loading}
          onClick={handleCreatePlan}
        >
          {loading ? <ClipLoader size={20} /> : `Create`}
        </button>
      </div>
    </div>
  );
}

export default AdminSubscriptionsPlan;
