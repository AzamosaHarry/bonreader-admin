import { BiPlus } from "react-icons/bi";
import "./admin-roles.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../../component/modal/Modal";
import "../../../component//modal-children-style/modal-admin.css";
import { useGetRoles } from "../../../redux/actions/rolePermissionAction";
import Loading from "../../../component/splash/loading/Loading";
import NoResult from "../../../component/splash/no-result/NoResult";
import { MdDelete } from "react-icons/md";
import { ClipLoader } from "react-spinners";

function AdminRoles() {
  const getRoles = useGetRoles();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [roles, setRoles] = useState([]);
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
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleSelectUser = (id) => {
    setSelectedRoles((prevSelectedRoles) =>
      prevSelectedRoles.includes(id)
        ? prevSelectedRoles.filter((userId) => userId !== id)
        : [...prevSelectedRoles, id]
    );
  };

  const handleSelectAllUsers = () => {
    if (selectedRoles.length === roles.length) {
      setSelectedRoles([]);
    } else {
      setSelectedRoles(roles.map((user) => user.id));
    }
  };

  const handleBulkAction = () => {
    alert(`Performing bulk action on users: ${selectedRoles.join(", ")}`);
  };

  const handleGetRoles = async () => {
    try {
      setLoading(true);
      const response = await getRoles();
      setRoles(response.payload.results);
    } catch (err) {
      console.error("Error fetching roles:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRole = async (id) => {
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
    handleGetRoles();
  }, []);

  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>Manage Roles</h1>
        <span className="ad__novel__sc__one__span">
          <button
            className="ad__novel__sc__one__span__button alt"
            onClick={() => handleModalClick("new")}
          >
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
                checked={selectedRoles.length === roles.length}
                onChange={handleSelectAllUsers}
              />
            </div>
            <div className="admin-table-cell">S/N</div>
            <div className="admin-table-cell">Name</div>
            <div className="admin-table-cell">Action</div>
          </div>
          {loading ? (
            <Loading />
          ) : roles.length == 0 ? (
            <NoResult />
          ) : (
            <div className="admin-table-body">
              {roles.map((role) => (
                <div key={role.id} className="admin-table-row">
                  <div
                    className="admin-table-cell"
                    onClick={() =>
                      navigate(`/roles/${role.id}`, {
                        state: { type: role.name },
                      })
                    }
                  >
                    <input
                      type="checkbox"
                      checked={selectedRoles.includes(role.id)}
                      onChange={() => handleSelectUser(role.id)}
                    />
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() =>
                      navigate(`/roles/${role.id}`, {
                        state: { type: role.name },
                      })
                    }
                  >
                    {role.id}
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() =>
                      navigate(`/roles/${role.id}`, {
                        state: { type: role.name },
                      })
                    }
                  >
                    {role.name}
                  </div>
                  <div className="admin-table-cell">
                    <MdDelete
                      onClick={() => {
                        setDeleteId(role.id);
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
          <h1>Add New Role</h1>
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

          <button onClick={() => handleDeleteRole(deleteId)}>
            {loading ? <ClipLoader size={20} /> : `Delete permanently`}
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default AdminRoles;
