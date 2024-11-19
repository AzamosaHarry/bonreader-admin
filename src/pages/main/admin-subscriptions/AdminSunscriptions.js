import { BiPlus } from "react-icons/bi";
import "./admin-subscriptions.css";
import { FiFilter } from "react-icons/fi";
import { TiExportOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../../component/modal/Modal";
import Loading from "../../../component/splash/loading/Loading";
import NoResult from "../../../component/splash/no-result/NoResult";
import { useGetSubscriptionPlans } from "../../../redux/actions/subscriptionActions";
import { MdDelete } from "react-icons/md";

const DATA = [
  {
    id: 1,
    plan: "Weekly",
    price: "1000",
    duration: "7 days",
    status: "active",
    action: "...",
  },
  {
    id: 2,
    plan: "Monthly",
    price: "3000",
    duration: "30 days",
    status: "inactive",
    action: "...",
  },
  {
    id: 3,
    plan: "Half Annually",
    price: "14000",
    duration: "180 days",
    status: "active",
    action: "...",
  },
  {
    id: 4,
    plan: "Annually",
    price: "22000",
    duration: "360 days",
    status: "active",
    action: "...",
  },

  // Add more subscriptionPlan records as needed
];

function AdminSubscriptions() {
  const getSubscriptionPlans = useGetSubscriptionPlans();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    subscriptionPlan: "",
  });
  const [isOpen, setIsOpen] = useState({
    new: false,
  });
  const closeModal = () => {
    setIsOpen({
      new: false,
    });
  };
  const handleModalClick = (option) => {
    if (option === "new") {
      setIsOpen((prev) => ({ ...prev, new: true }));
    } else if (option === "delete") {
      setIsOpen((prev) => ({ ...prev, delete: true }));
    } else {
      closeModal();
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [selectedSubscriptionPlans, setSelectedSubscriptionPlans] = useState(
    []
  );

  const handleSelectSubscriptionPlan = (id) => {
    setSelectedSubscriptionPlans((prevSelectedSubscriptionPlans) =>
      prevSelectedSubscriptionPlans.includes(id)
        ? prevSelectedSubscriptionPlans.filter(
            (subscriptionPlanId) => subscriptionPlanId !== id
          )
        : [...prevSelectedSubscriptionPlans, id]
    );
  };

  const handleSelectAllSubscriptionPlans = () => {
    if (selectedSubscriptionPlans.length === subscriptionPlans.length) {
      setSelectedSubscriptionPlans([]);
    } else {
      setSelectedSubscriptionPlans(
        subscriptionPlans.map((subscriptionPlan) => subscriptionPlan.id)
      );
    }
  };

  const handleBulkAction = () => {
    alert(
      `Performing bulk action on subscriptionPlans: ${selectedSubscriptionPlans.join(
        ", "
      )}`
    );
  };

  const handleGetSubscriptionPlans = async () => {
    try {
      setLoading(true);
      const response = await getSubscriptionPlans();
      setSubscriptionPlans(response.payload.results);
      console.log("get subscription plans", response);
    } catch (err) {
      console.error("Error fetching subscription plans:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSubcriptionPlan = async (id) => {
    // try {
    //   setLoading(true);
    //   const response = await deleteRole(id);
    //   if (response.meta.requestStatus == "fulfilled") {
    //     toastManager.addToast({
    //       message: "Role deleted successfully",
    //       type: "success",
    //     });
    //     triggerManualUpdate();
    //     return;
    //   } else {
    //     toastManager.addToast({
    //       message: "Failed to delete role",
    //       type: "error",
    //     });
    //   }
    // } catch (err) {
    //   console.error("Error deleting:", err);
    //   toastManager.addToast({
    //     message: err,
    //     type: "error",
    //   });
    // } finally {
    //   setLoading(false);
    //   closeModal();
    // }
  };

  useEffect(() => {
    handleGetSubscriptionPlans();
  }, []);

  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>All Subscriptions Plans</h1>
        <span className="ad__novel__sc__one__span">
          {/* <button className="ad__novel__sc__one__span__button">
            Filter <FiFilter />
          </button> */}
          <button
            className="ad__novel__sc__one__span__button alt"
            onClick={() => navigate("plan")}
          >
            <BiPlus /> Add new
          </button>
        </span>
      </section>
      <section className="ad__novel__sc__two">
        <button className="ad__novel__sc__two__button">
          <TiExportOutline /> Export
        </button>
        <button
          onClick={handleBulkAction}
          disabled={selectedSubscriptionPlans.length === 0}
        >
          Bulk action
        </button>
      </section>
      <section className="ad__novel__sc__three">
        <div className="admin-table">
          <div className="admin-table-header">
            <div className="admin-table-cell">
              <input
                type="checkbox"
                checked={
                  selectedSubscriptionPlans.length === subscriptionPlans.length
                }
                onChange={handleSelectAllSubscriptionPlans}
              />
            </div>
            <div className="admin-table-cell">S/N</div>
            <div className="admin-table-cell">Plan</div>
            <div className="admin-table-cell">Price</div>
            <div className="admin-table-cell">Description</div>
            <div className="admin-table-cell">Currency</div>
            <div className="admin-table-cell">Action</div>
          </div>
          {loading ? (
            <Loading />
          ) : subscriptionPlans.length == 0 ? (
            <NoResult />
          ) : (
            <div className="admin-table-body">
              {subscriptionPlans.map((subscriptionPlan) => (
                <div key={subscriptionPlan.id} className="admin-table-row">
                  <div className="admin-table-cell">
                    <input
                      type="checkbox"
                      checked={selectedSubscriptionPlans.includes(
                        subscriptionPlan.id
                      )}
                      onChange={() =>
                        handleSelectSubscriptionPlan(subscriptionPlan.id)
                      }
                    />
                  </div>
                  <div className="admin-table-cell">{subscriptionPlan.id}</div>
                  <div className="admin-table-cell">
                    {subscriptionPlan.name}
                  </div>
                  <div className="admin-table-cell">
                    {subscriptionPlan.amount}
                  </div>
                  <div className="admin-table-cell">
                    {subscriptionPlan.description}
                  </div>
                  <div className="admin-table-cell">
                    {subscriptionPlan.currency}
                  </div>
                  <div className="admin-table-cell">
                    <MdDelete
                      onClick={() => {
                        setDeleteId(subscriptionPlan.id);
                        handleModalClick("delete");
                      }}
                      style={{
                        cursor: "pointer",
                        fontSize: "14px",
                        padding: "0",
                        transform: "scale(1.5)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Modal isOpen={isOpen.new} onClose={closeModal}>
        <div className="admin__modal">
          <h1>Add New Subscription Plan</h1>
          <form className="admin__modal__form">
            <input
              name="subscriptionPlan"
              id="subscriptionPlan"
              type="text"
              placeholder="Enter subscriptionPlan"
              onChange={handleChange}
            />
          </form>
          <button>Add New Plan</button>
        </div>
      </Modal>

      <Modal isOpen={isOpen.delete} onClose={closeModal}>
        <div className="admin__modal">
          <h1>Are you sure you want to delete?</h1>
          <p>This action is not reversible</p>
          <button onClick={() => handleDeleteSubcriptionPlan(deleteId)}>
            Delete permanently
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default AdminSubscriptions;
