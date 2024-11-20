import { BiPlus } from "react-icons/bi";
import "./admin-review.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetReviews } from "../../../redux/actions/reviewActions";
import NoResult from "../../../component/splash/no-result/NoResult";
import Loading from "../../../component/splash/loading/Loading";
import Modal from "../../../component/modal/Modal";
import { MdDelete } from "react-icons/md";

function AdminReview() {
  const getReviews = useGetReviews();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [reviews, setReviews] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: "",
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
    console.log(formData);
  };

  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSelectUser = (id) => {
    setSelectedUsers((prevSelectedUsers) =>
      prevSelectedUsers.includes(id)
        ? prevSelectedUsers.filter((userId) => userId !== id)
        : [...prevSelectedUsers, id]
    );
  };

  const handleSelectAllUsers = () => {
    if (selectedUsers.length === reviews.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(reviews.map((user) => user.id));
    }
  };

  const handleBulkAction = () => {
    alert(`Performing bulk action on users: ${selectedUsers.join(", ")}`);
  };

  const handleGetReviews = async () => {
    try {
      setLoading(true);
      const response = await getReviews();
      setReviews(response.payload.results);
      console.log("get Reviews", response);
    } catch (err) {
      console.error("Error fetching Reviews:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteReview = async (id) => {
    // try {
    //   setLoading(true);
    //   const response = await deleteReview(id);
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
    handleGetReviews();
  }, []);

  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>New Chapters</h1>
        <span className="ad__novel__sc__one__span">
          <button className="ad__novel__sc__one__span__button alt">
            <BiPlus /> Add new
          </button>
        </span>
      </section>
      <section className="ad__novel__sc__three">
        <div className="admin-table">
          <div className="admin-table-header">
            <div className="admin-table-cell">
              <input
                type="checkbox"
                checked={selectedUsers.length === reviews.length}
                onChange={handleSelectAllUsers}
              />
            </div>
            <div className="admin-table-cell">S/N</div>
            <div className="admin-table-cell">Title</div>
            <div className="admin-table-cell">Chapter</div>
            <div className="admin-table-cell">Date Created</div>
            <div className="admin-table-cell">Action</div>
          </div>
          {loading ? (
            <Loading />
          ) : reviews.length == 0 ? (
            <NoResult />
          ) : (
            <div className="admin-table-body">
              {reviews.map((review) => (
                <div key={review.id} className="admin-table-row">
                  <div className="admin-table-cell">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(review.id)}
                      onChange={() => handleSelectUser(review.id)}
                    />
                  </div>

                  <div className="admin-table-cell">{review.id}</div>
                  <div className="admin-table-cell">{review.title}</div>
                  <div className="admin-table-cell">{review.chapter}</div>
                  <div className="admin-table-cell">{review.dateCreated}</div>
                  <div className="admin-table-cell">
                    {" "}
                    <MdDelete
                      onClick={() => {
                        setDeleteId(review.id);
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
          <h1>Add New Review</h1>
          <form className="admin__modal__form">
            <input
              name="role"
              id="role"
              type="text"
              placeholder="Enter role"
              onChange={handleChange}
            />
          </form>
          <button>Add New Role</button>
        </div>
      </Modal>

      <Modal isOpen={isOpen.delete} onClose={closeModal}>
        <div className="admin__modal">
          <h1>Are you sure you want to delete?</h1>

          <button onClick={() => handleDeleteReview(deleteId)}>
            Delete permanently
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default AdminReview;
