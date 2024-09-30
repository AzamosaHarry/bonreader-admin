import { BiPlus } from "react-icons/bi";
import "./admin-editorial.css";
import { useState } from "react";
import Modal from "../../../component/modal/Modal";

const DATA = [
  {
    id: 1,
    title: "Almost Perfect Parners",
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
    chapters: "100",
    action: "...",
  },

  // Add more user records as needed
];

function AdminEditorial() {
  const [formData, setFormData] = useState({
    genre: "",
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
        <h1>Editorial picks</h1>
        <span className="ad__novel__sc__one__span">
          <button
            className="ad__novel__sc__one__span__button alt"
            onClick={() => handleModalClick("new")}
          >
            <BiPlus /> Add new pick
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

      <Modal isOpen={isOpen.new} onClose={closeModal}>
        <div className="admin__modal">
          <h1>New pick</h1>
          <p>Search for novel to add to the editorial pick</p>
          <form className="admin__modal__form">
            <input
              name="genre"
              id="genre"
              type="text"
              placeholder="Enter genre"
              onChange={handleChange}
            />
          </form>
          <button>New pick</button>
        </div>
      </Modal>
    </div>
  );
}
export default AdminEditorial;
