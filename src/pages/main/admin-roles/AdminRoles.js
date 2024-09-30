import { BiPlus } from "react-icons/bi";
import "./admin-roles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../../component/modal/Modal";
import "../../../component//modal-children-style/modal-admin.css";

const DATA = [
  {
    id: 1,
    name: "Super Admin",
    action: "...",
  },
  {
    id: 2,
    name: "Admin",
    action: "...",
  },
  {
    id: 3,
    name: "Sub Admin",
    action: "...",
  },

  // Add more user records as needed
];

function AdminRoles() {
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
    option === "new"
      ? setIsOpen((prev) => ({ ...prev, new: true }))
      : closeModal();
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
    if (selectedUsers.length === DATA.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(DATA.map((user) => user.id));
    }
  };

  const handleBulkAction = () => {
    alert(`Performing bulk action on users: ${selectedUsers.join(", ")}`);
  };

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
                checked={selectedUsers.length === DATA.length}
                onChange={handleSelectAllUsers}
              />
            </div>
            <div className="admin-table-cell">S/N</div>
            <div className="admin-table-cell">Name</div>
            <div className="admin-table-cell">Action</div>
          </div>
          <div className="admin-table-body">
            {DATA.map((user) => (
              <div
                key={user.id}
                className="admin-table-row"
                onClick={() =>
                  navigate("/admin/admin-roles", { state: { type: user.name } })
                }
              >
                <div className="admin-table-cell">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleSelectUser(user.id)}
                  />
                </div>
                <div className="admin-table-cell">{user.id}</div>
                <div className="admin-table-cell">{user.name}</div>
                <div className="admin-table-cell">{user.action}</div>
              </div>
            ))}
          </div>
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
    </div>
  );
}
export default AdminRoles;
