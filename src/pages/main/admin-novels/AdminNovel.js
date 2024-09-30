import { BiPlus } from "react-icons/bi";
import "./admin-novels.css";
import { FiFilter } from "react-icons/fi";
import { TiExportOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Modal from "../../../component/modal/Modal";
import {
  useDeleteNovel,
  useGetNovels,
} from "../../../redux/actions/bookActions";
import Loading from "../../../component/splash/loading/Loading";
import toastManager from "../../../component/toast/ToasterManager";

function AdminNovel() {
  const getNovels = useGetNovels();
  const deleteNovel = useDeleteNovel();
  const navigate = useNavigate();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isActionDropdown, setIsActionDropdown] = useState("");
  const [currentActionId, setCurrentActionId] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [novels, setNovels] = useState([]);

  const [manualUpdate, setManualUpdate] = useState(false);
  const [formData, setFormData] = useState({
    tag: "",
    category: "",
  });

  const [isOpen, setIsOpen] = useState({
    assign: false,
    reject: false,
  });

  const closeModal = () => {
    setIsOpen({
      assign: false,
      reject: false,
    });
  };

  const handleModalClick = (option) => {
    option === "assign"
      ? setIsOpen((prev) => ({ ...prev, assign: true }))
      : setIsOpen((prev) => ({ ...prev, reject: true }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const toggleActionDropdown = (id) => {
    if (id === currentActionId) {
      setIsActionDropdown("");
      setCurrentActionId("");
      return;
    }
    setIsActionDropdown(id);
    setCurrentActionId(id);
  };

  const handleMenuClick = (e) => {
    e.stopPropagation(); // Prevent the click from closing the dropdown
  };

  const handleSelectUser = (id) => {
    setSelectedUsers((prevSelectedUsers) =>
      prevSelectedUsers.includes(id)
        ? prevSelectedUsers.filter((userId) => userId !== id)
        : [...prevSelectedUsers, id]
    );
  };

  const handleSelectAllUsers = () => {
    if (selectedUsers.length === novels.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(novels.map((user) => user.id));
    }
  };

  const handleBulkAction = () => {
    alert(`Performing bulk action on users: ${selectedUsers.join(", ")}`);
  };

  const handleApprove = () => {
    console.log("appprove");
  };

  const handleDeleteNovel = async (id) => {
    try {
      setLoading(true);
      const response = await deleteNovel(id);
      if (response.meta.requestStatus == "fulfilled") {
        toastManager.addToast({
          message: "Genre deleted successfully",
          type: "success",
        });
        triggerManualUpdate();

        return;
      } else {
        toastManager.addToast({
          message: "Failed to delete tag",
          type: "error",
        });
      }
    } catch (err) {
      console.error("Error deleting:", err);
      toastManager.addToast({
        message: err,
        type: "error",
      });
    } finally {
      setLoading(false);
      closeModal();
    }
  };

  const handleGetNovels = async () => {
    try {
      setLoading(true);
      const response = await getNovels();

      if (response.payload && response.meta.requestStatus == "fulfilled") {
        setNovels(response.payload.results);
        return;
      } else {
        toastManager.addToast({
          message: "Failed to retrieve tags",
          type: "error",
        });
      }
    } catch (err) {
      console.error("Error fetching tags:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!manualUpdate) {
      handleGetNovels();
    }
  }, [manualUpdate]);

  const triggerManualUpdate = () => {
    setManualUpdate(true);
    handleGetNovels();
    setManualUpdate(false);
  };

  console.log("novels response", novels);

  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>All Novels</h1>
        <span className="ad__novel__sc__one__span">
          {/* <button className="ad__novel__sc__one__span__button">
            Filter <FiFilter />
          </button>
          <button className="ad__novel__sc__one__span__button alt">
            <BiPlus /> Add novel
          </button> */}
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
                checked={selectedUsers.length === novels.length}
                onChange={handleSelectAllUsers}
              />
            </div>
            <div className="admin-table-cell">ID</div>
            <div className="admin-table-cell">Title</div>
            <div className="admin-table-cell">Author</div>
            <div className="admin-table-cell">Category</div>
            <div className="admin-table-cell">Chapters</div>
            <div className="admin-table-cell">Views</div>
            <div className="admin-table-cell">Status</div>
            <div className="admin-table-cell">Action</div>
          </div>

          {loading ? (
            <Loading />
          ) : (
            <div className="admin-table-body">
              {novels.map((novel) => (
                <div key={novel.id} className="admin-table-row">
                  <div className="admin-table-cell">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(novel.id)}
                      onChange={() => handleSelectUser(novel.id)}
                    />
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate("1")}
                  >
                    {novel.id}
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate("1")}
                  >
                    {novel.title}
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate("1")}
                  >
                    {novel.author.name}
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate("1")}
                  >
                    {novel.category}
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate("1")}
                  >
                    {novel.chapter}
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate("1")}
                  >
                    {novel.num_views}
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate("1")}
                  >
                    {novel.completed}
                  </div>

                  <div
                    className="admin-table-cell"
                    onClick={() => toggleActionDropdown(novel.id)}
                  >
                    {novel.action}
                    {isActionDropdown === novel.id && (
                      <div
                        className="admin-action-menu"
                        onClick={handleMenuClick}
                      >
                        <ul>
                          <li onClick={handleApprove}>Approve</li>
                          <li
                            onClick={() => {
                              handleModalClick("assign");
                              toggleActionDropdown(novel?.id);
                            }}
                          >
                            Assign to editor <FaArrowRight />
                          </li>
                          <li>
                            Reject <FaArrowRight />{" "}
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Modal isOpen={isOpen.assign} onClose={closeModal}>
        <div className="admin__modal">
          <h1>Assign Editor</h1>
          <form className="admin__modal__form">
            <input
              name="editor"
              id="editor"
              type="text"
              placeholder="Pick Editor"
              onChange={handleChange}
            />
          </form>
          <button>Add Pick</button>
        </div>
      </Modal>

      <Modal isOpen={isOpen.delete} onClose={closeModal}>
        <div className="admin__modal">
          <h1>Are you sure you want to delete?</h1>
          <p>This action is not reversible</p>
          <button onClick={() => handleDeleteNovel(deleteId)}>
            Delete permanently
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default AdminNovel;
