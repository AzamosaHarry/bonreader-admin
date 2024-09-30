import { useState } from "react";
import { MdEmail } from "react-icons/md";
import "./admin-authors-single.css";

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

function AdminAuthorsSingle() {
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
    <div className="aas">
      <section className="ad__novel__sc__one">
        <h1>Author</h1>
        <span className="ad__novel__sc__one__span">
          {/* <button
            className="ad__novel__sc__one__span__button alt"
            onClick={() => navigate("create")}
          >
            <BiPlus /> Add new
          </button> */}
        </span>
      </section>
      <section className="admin__profile__section__one">
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
          </div>
        </div>
      </section>
      <section className="aas__section__one">
        <h1>Novels</h1>
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
              <div className="admin-table-cell">Chapters</div>
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
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default AdminAuthorsSingle;
