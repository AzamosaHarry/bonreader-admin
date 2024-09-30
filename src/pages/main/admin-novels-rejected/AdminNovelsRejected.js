import { BiPlus } from "react-icons/bi";
import "./admin-novels-rejected.css";
import { FiFilter } from "react-icons/fi";
import { TiExportOutline } from "react-icons/ti";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DATA = [
  {
    id: 1,
    title: "Almoist perfect partners",
    author: "Andy Barner",
    category: "Fantasy",
    chapters: "125",
    views: "1255",
    status: "approved",
    action: "...",
  },
  {
    id: 2,
    title: "Hidden interest",
    author: "Shally popy",
    category: "Fantasy",
    chapters: "125",
    views: "1255",
    status: "approved",
    action: "...",
  },

  // Add more user records as needed
];

function AdminNovelsRejected() {
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
        <h1>Rejected Novels</h1>
        <span className="ad__novel__sc__one__span">
          <button className="ad__novel__sc__one__span__button">
            Filter <FiFilter />
          </button>
          <button className="ad__novel__sc__one__span__button alt">
            <BiPlus /> Add novel
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
            <div className="admin-table-cell">Title</div>
            <div className="admin-table-cell">Author</div>
            <div className="admin-table-cell">Category</div>
            <div className="admin-table-cell">Chapters</div>
            <div className="admin-table-cell">Views</div>
            <div className="admin-table-cell">Status</div>
            <div className="admin-table-cell">Action</div>
          </div>
          <div className="admin-table-body">
            {DATA.map((user) => (
              <div
                key={user.id}
                className="admin-table-row"
                onClick={() => navigate("1")}
              >
                <div className="admin-table-cell">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleSelectUser(user.id)}
                  />
                </div>
                <div className="admin-table-cell">{user.id}</div>
                <div className="admin-table-cell">{user.title}</div>
                <div className="admin-table-cell">{user.author}</div>
                <div className="admin-table-cell">{user.category}</div>
                <div className="admin-table-cell">{user.chapters}</div>
                <div className="admin-table-cell">{user.views}</div>
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
export default AdminNovelsRejected;
