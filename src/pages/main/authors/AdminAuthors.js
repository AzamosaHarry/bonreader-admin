import { BiPlus } from "react-icons/bi";
import "./admin-authors.css";
import { FiFilter } from "react-icons/fi";
import { TiExportOutline } from "react-icons/ti";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DATA = [
  {
    id: 1,
    name: "James Bachelor",
    userId: "23749854",
    email: "jbache@gmail.com",
    totalNovels: "12",
    status: "active",
    action: "...",
  },
  {
    id: 1,
    name: "Flora Jay",
    userId: "23749854",
    email: "floraflora@gmail.com",
    totalNovels: "1",
    status: "inactive",
    action: "...",
  },

  // Add more user records as needed
];

function AdminAuthors() {
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
                checked={selectedUsers.length === DATA.length}
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
          <div className="admin-table-body">
            {DATA.map((user) => (
              <div
                key={user.id}
                className="admin-table-row"
                onClick={() => navigate("/admin/authors/1")}
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
                <div className="admin-table-cell">{user.email}</div>
                <div className="admin-table-cell">{user.totalNovels}</div>
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
export default AdminAuthors;
