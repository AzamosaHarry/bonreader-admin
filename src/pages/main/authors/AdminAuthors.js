import "./admin-authors.css";
import { TiExportOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../../component/splash/loading/Loading";
import NoResult from "../../../component/splash/no-result/NoResult";
import { useGetAuthors } from "../../../redux/actions/userActions";
import { MdDelete } from "react-icons/md";
import Modal from "../../../component/modal/Modal";
import { ClipLoader } from "react-spinners";

function AdminAuthors() {
  const getAuthors = useGetAuthors();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [authors, setAuthors] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();
  const [selectedUsers, setSelectedUsers] = useState([]);

  const [isOpen, setIsOpen] = useState({
    delete: false,
  });
  const closeModal = () => {
    setIsOpen({
      delete: false,
    });
  };
  const handleModalClick = (option) => {
    if (option === "delete") {
      setIsOpen((prev) => ({ ...prev, delete: true }));
    } else {
      closeModal();
    }
  };

  const handleSelectUser = (id) => {
    setSelectedUsers((prevSelectedUsers) =>
      prevSelectedUsers.includes(id)
        ? prevSelectedUsers.filter((userId) => userId !== id)
        : [...prevSelectedUsers, id]
    );
  };

  const handleSelectAllUsers = () => {
    if (selectedUsers.length === authors.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(authors.map((user) => user.id));
    }
  };

  const handleBulkAction = () => {
    alert(`Performing bulk action on users: ${selectedUsers.join(", ")}`);
  };

  const handleDeleteAuthor = async (id) => {
    // try {
    //   setLoading(true);
    //   const response = await deleteAuthor(id);
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

  const handleGetAuthors = async () => {
    try {
      setLoading(true);
      const response = await getAuthors();
      setAuthors(response.payload.results);
      console.log("get authors", response);
    } catch (err) {
      console.error("Error fetching roles:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetAuthors();
  }, []);

  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>All Authors</h1>
      </section>
      <section className="ad__novel__sc__two">
        <button className="ad__novel__sc__two__button">
          <TiExportOutline /> Export
        </button>
        <button
          onClick={handleBulkAction}
          disabled={selectedUsers.length === 0}
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
                checked={selectedUsers.length === authors.length}
                onChange={handleSelectAllUsers}
              />
            </div>
            <div className="admin-table-cell">S/N</div>
            <div className="admin-table-cell">Name</div>
            <div className="admin-table-cell">Email Address</div>
            <div className="admin-table-cell">No of Novels</div>
            <div className="admin-table-cell">Status</div>
            <div className="admin-table-cell">Action</div>
          </div>
          {loading ? (
            <Loading />
          ) : authors?.length == 0 ? (
            <NoResult />
          ) : (
            <div className="admin-table-body">
              {authors.map((user) => (
                <div key={user.id} className="admin-table-row">
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate(`/authors/${user.id}`)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                    />
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate(`/authors/${user.id}`)}
                  >
                    {user.id}
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate(`/authors/${user.id}`)}
                  >{`${user.first_name} ${user.last_name}`}</div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate(`/authors/${user.id}`)}
                  >
                    {user.email}
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate(`/authors/${user.id}`)}
                  >
                    {user.num_novels}
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate(`/authors/${user.id}`)}
                  >
                    {user.is_active ? `active` : `inactive`}
                  </div>
                  <div className="admin-table-cell">
                    <MdDelete
                      onClick={() => {
                        setDeleteId(user.id);
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

      <Modal isOpen={isOpen.delete} onClose={closeModal}>
        <div className="admin__modal">
          <h1>Are you sure you want to delete?</h1>

          <button onClick={() => handleDeleteAuthor(deleteId)}>
            {loading ? <ClipLoader size={20} /> : `Delete permanently`}
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default AdminAuthors;
