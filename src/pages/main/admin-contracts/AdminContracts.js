import { BiPlus } from "react-icons/bi";
import "./admin-contracts.css";
import { FiFilter } from "react-icons/fi";
import { TiExportOutline } from "react-icons/ti";
import { useState } from "react";

const DATA = [
  {
    id: 1,
    title: "Almost Perfect Partners",
    author: "Andy Banner",
    category: "Fantasy",
    chapters: "1125",
    action: "...",
  },
  {
    id: 2,
    title: "Hidden Interest",
    author: "Shally Poppy",
    category: "Romance",
    chapters: "100",
    action: "...",
  },
  {
    id: 3,
    title: "Hidden Interest",
    author: "Shally Poppy",
    category: "Romance",
    chapters: "112",
    action: "...",
  },

  // Add more user records as needed
];

function AdminContracts() {
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
        <h1>New Contracts</h1>
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
                <div className="admin-table-cell">{user.title}</div>
                <div className="admin-table-cell">{user.author}</div>
                <div className="admin-table-cell">{user.category}</div>
                <div className="admin-table-cell">{user.chapters}</div>
                <div className="admin-table-cell">{user.action}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default AdminContracts;
