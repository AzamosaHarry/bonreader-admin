import { BiPlus } from "react-icons/bi";
import "./admin-review.css";
import { useState } from "react";

const DATA = [
  {
    id: 1,
    title: "The Grimmer",
    chapter: "123: low but not low",
    dateCreated: "12/03/2024",
    action: "...",
  },
  {
    id: 2,
    title: "The Grimmer",
    chapter: "1: Underlying Fact",
    dateCreated: "02/09/2022",
    action: "...",
  },

  // Add more user records as needed
];

function AdminReview() {
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
                checked={selectedUsers.length === DATA.length}
                onChange={handleSelectAllUsers}
              />
            </div>
            <div className="admin-table-cell">S/N</div>
            <div className="admin-table-cell">Title</div>
            <div className="admin-table-cell">Chapter</div>
            <div className="admin-table-cell">Date Created</div>
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
                <div className="admin-table-cell">{user.chapter}</div>
                <div className="admin-table-cell">{user.dateCreated}</div>
                <div className="admin-table-cell">{user.action}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default AdminReview;
