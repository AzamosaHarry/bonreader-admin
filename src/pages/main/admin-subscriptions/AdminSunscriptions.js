import { BiPlus } from "react-icons/bi";
import "./admin-subscriptions.css";
import { FiFilter } from "react-icons/fi";
import { TiExportOutline } from "react-icons/ti";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  // Add more user records as needed
];

function AdminSubscriptions() {
  const navigate = useNavigate();
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
                checked={selectedUsers.length === DATA.length}
                onChange={handleSelectAllUsers}
              />
            </div>
            <div className="admin-table-cell">S/N</div>
            <div className="admin-table-cell">Plan</div>
            <div className="admin-table-cell">Price</div>
            <div className="admin-table-cell">Duration</div>
            <div className="admin-table-cell">Status</div>
            <div className="admin-table-cell">Action</div>
          </div>
          <div className="admin-table-body">
            {DATA.map((user) => (
              <div key={user.id} className="admin-table-row">
                <div className="admin-table-cell">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleSelectUser(user.id)}
                  />
                </div>
                <div className="admin-table-cell">{user.id}</div>
                <div className="admin-table-cell">{user.plan}</div>
                <div className="admin-table-cell">{user.price}</div>
                <div className="admin-table-cell">{user.duration}</div>
                <div className="admin-table-cell">{user.status}</div>
                <div className="admin-table-cell">{user.action}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default AdminSubscriptions;
