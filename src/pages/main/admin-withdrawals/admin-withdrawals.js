import { BiPlus } from "react-icons/bi";
import "./admin-withdrawals.css";
import { FiFilter } from "react-icons/fi";
import { TiExportOutline } from "react-icons/ti";
import { useState } from "react";

const DATA = [
  {
    id: 1,
    userName: "angelifeda",
    email: "angel@gmail.com",
    amount: "1000",
    date: "10/12/2024",
    status: "approved",
    action: "...",
  },
  {
    id: 2,
    userName: "Bigboy",
    email: "jbache@gmail.com",
    amount: "1000",
    date: "10/12/2024",
    status: "approved",
    action: "...",
  },

  // Add more user records as needed
];

function AdminWithdrawals() {
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
        <h1>Withdrawals</h1>
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
            <div className="admin-table-cell">Username</div>
            <div className="admin-table-cell">Email Address</div>
            <div className="admin-table-cell">Amount</div>
            <div className="admin-table-cell">Date</div>
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
                <div className="admin-table-cell">{user.userName}</div>
                <div className="admin-table-cell">{user.email}</div>
                <div className="admin-table-cell">{user.amount}</div>
                <div className="admin-table-cell">{user.date}</div>
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
export default AdminWithdrawals;
