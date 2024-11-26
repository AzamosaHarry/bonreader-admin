import { BiPlus } from "react-icons/bi";
import "./admin-editorial.css";
import { useEffect, useState } from "react";
import Modal from "../../../component/modal/Modal";
import Loading from "../../../component/splash/loading/Loading";
import NoResult from "../../../component/splash/no-result/NoResult";
import { useNavigate } from "react-router-dom";
import { useGetEp } from "../../../redux/actions/epActions";
import { MdDelete } from "react-icons/md";
import { ClipLoader } from "react-spinners";

function AdminEditorial() {
  const getEp = useGetEp();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [ep, setEp] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ep: "",
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
    if (selectedUsers.length === ep.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(ep.map((user) => user.id));
    }
  };

  const handleBulkAction = () => {
    alert(`Performing bulk action on users: ${selectedUsers.join(", ")}`);
  };

  const handleGetEp = async () => {
    try {
      setLoading(true);
      const response = await getEp();
      setEp(response.payload.results);
      console.log("get Ep", response);
    } catch (err) {
      console.error("Error fetching Ep:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEp = async (id) => {
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
    handleGetEp();
  }, []);

  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>Editorial picks</h1>
        <span className="ad__novel__sc__one__span">
          <button
            className="ad__novel__sc__one__span__button alt"
            onClick={() => handleModalClick("new")}
          >
            <BiPlus /> Add new pick
          </button>
        </span>
      </section>
      <section className="ad__novel__sc__three">
        <div className="admin-table">
          <div className="admin-table-header">
            <div className="admin-table-cell">
              <input
                type="checkbox"
                checked={selectedUsers.length === ep.length}
                onChange={handleSelectAllUsers}
              />
            </div>

            <div className="admin-table-cell">S/N</div>
            <div className="admin-table-cell">Title</div>
            <div className="admin-table-cell">Author</div>
            <div className="admin-table-cell">Category</div>
            <div className="admin-table-cell">Chapters</div>
            <div className="admin-table-cell">Action</div>
          </div>
          {loading ? (
            <Loading />
          ) : ep.length == 0 ? (
            <NoResult />
          ) : (
            <div className="admin-table-body">
              {ep.map((ep) => (
                <div key={ep.id} className="admin-table-row">
                  <div className="admin-table-cell">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(ep.id)}
                      onChange={() => handleSelectUser(ep.id)}
                    />
                  </div>
                  <div className="admin-table-cell">{ep.id}</div>
                  <div className="admin-table-cell">{ep.title}</div>
                  <div className="admin-table-cell">{ep.author?.name}</div>
                  <div className="admin-table-cell">{ep.genres[0]}</div>
                  <div className="admin-table-cell">{ep.num_chapters}</div>
                  <div className="admin-table-cell">
                    <MdDelete
                      onClick={() => {
                        setDeleteId(ep.id);
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
          <h1>New pick</h1>
          <p>Search for novel to add to the editorial pick</p>
          <form className="admin__modal__form">
            <input
              name="ep"
              id="ep"
              type="text"
              placeholder="Enter novel"
              onChange={handleChange}
            />
          </form>
          <button>New pick</button>
        </div>
      </Modal>

      <Modal isOpen={isOpen.delete} onClose={closeModal}>
        <div className="admin__modal">
          <h1>Are you sure you want to delete?</h1>

          <button onClick={() => handleDeleteEp(deleteId)}>
            {loading ? <ClipLoader size={20} /> : `Delete permanently`}
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default AdminEditorial;
