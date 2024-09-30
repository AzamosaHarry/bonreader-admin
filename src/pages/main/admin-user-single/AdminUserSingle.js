import { MdEmail } from "react-icons/md";
import "./admin-user-single.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiCoin } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";

const DATA = [
  {
    id: 1,
    tag: "08-09-22",
    categories: "11:20",
    action: "Added 'Hangman' to wishlist.",
  },
  {
    id: 2,
    tag: "08-09-22",
    categories: "11:20",
    action: "Added 'Hangman' to wishlist.",
  },
  {
    id: 3,
    tag: "08-09-22",
    categories: "11:20",
    action: "Added 'Hangman' to wishlist.",
  },
  {
    id: 4,
    tag: "08-09-22",
    categories: "11:20",
    action: "Added 'Hangman' to wishlist.",
  },
  {
    id: 5,
    tag: "08-09-22",
    categories: "11:20",
    action: "Added 'Hangman' to wishlist.",
  },
  {
    id: 6,
    tag: "08-09-22",
    categories: "11:20",
    action: "Added 'Hangman' to wishlist.",
  },
  {
    id: 7,
    tag: "08-09-22",
    categories: "11:20",
    action: "Added 'Hangman' to wishlist.",
  },
  {
    id: 8,
    tag: "08-09-22",
    categories: "11:20",
    action: "Added 'Hangman' to wishlist.",
  },

  // Add more user records as needed
];

function AdminUserSingle() {
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
      <section
        className="admin__profile__section__one"
        style={{ marginTop: "20p", marginBottom: "30px" }}
      >
        <div className="admin__profile__section__one__start"></div>
        <div className="admin__profile__section__one__end">
          <div className="admin__profile__section__one__end__img"></div>
          <div className="admin__profile__section__one__end__text">
            <span>
              <h1>James Bachelor</h1>
              <h3>Admin</h3>
            </span>
            <h3>ID: 23661346</h3>
            <h3>
              <MdEmail /> jbach@gmail.com
            </h3>
            <h3>
              <BsCoin style={{}} /> Coins
            </h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button>Deactivate user</button>
              <button style={{ background: "#669933" }}>Gift coin</button>
            </div>
          </div>
        </div>
      </section>
      <section className="ad__novel__sc__three">
        <div className="admin-table">
          <div
            className="admin-table-header"
            style={{
              background: "#f2994a",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <div className="admin-table-cell">Date</div>
            <div className="admin-table-cell">Time</div>
            <div className="admin-table-cell">Activity</div>
          </div>
          <div className="admin-table-body">
            {DATA.map((user) => (
              <div key={user.id} className="admin-table-row">
                <div className="admin-table-cell">{user.tag}</div>
                <div className="admin-table-cell">{user.categories}</div>
                <div className="admin-table-cell">{user.action}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminUserSingle;
