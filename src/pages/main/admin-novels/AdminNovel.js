import "./admin-novels.css";
import { TiExportOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Modal from "../../../component/modal/Modal";
import {
  useAssignEditor,
  useDeleteNovel,
  useGetNovels,
} from "../../../redux/actions/bookActions";
import Loading from "../../../component/splash/loading/Loading";
import toastManager from "../../../component/toast/ToasterManager";
import NoResult from "../../../component/splash/no-result/NoResult";
import { ClipLoader } from "react-spinners";
import { useFetchAdmins } from "../../../redux/actions/userActions";

function AdminNovel() {
  const fetchAdmins = useFetchAdmins();
  const getNovels = useGetNovels();
  const deleteNovel = useDeleteNovel();
  const assignEditor = useAssignEditor();
  const navigate = useNavigate();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isActionDropdown, setIsActionDropdown] = useState("");
  const [currentActionId, setCurrentActionId] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [novels, setNovels] = useState([]);
  const [editors, setEditors] = useState([]);
  const [novelId, setNovelId] = useState(null);
  const [editorId, setEditorId] = useState(null);
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
    if (option === "assign") {
      setIsOpen((prev) => ({ ...prev, assign: true }));
    } else if (option === "reject") {
      setIsOpen((prev) => ({ ...prev, reject: true }));
    } else {
      closeModal();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleEditorChange = (e) => {
    const { value } = e.target;
    setEditorId(value);
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

  const handleFetchAdmins = async () => {
    try {
      setLoading(true);
      const response = await fetchAdmins();
      setEditors(response.payload.results);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchAdmins();
  }, []);

  const handleAssignEditor = async () => {
    if (!editorId) {
      setErrorMessage("Please select an editor");
      return;
    }

    try {
      setLoading(true);
      const response = await assignEditor({
        novelId: novelId,
        editorId: editorId,
      });

      if (response.payload && response.meta.requestStatus == "fulfilled") {
        toastManager.addToast({
          message: "Novel assigned to editor",
          type: "success",
        });
        return;
      } else {
        toastManager.addToast({
          message: "Failed to assign editor",
          type: "error",
        });
      }
    } catch (err) {
      console.error("Error fetching novels:", err);
    } finally {
      setLoading(false);
      closeModal();
    }
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
      console.log("novels response", response);

      if (response.payload && response.meta.requestStatus == "fulfilled") {
        setNovels(response.payload.results);
        return;
      } else {
        toastManager.addToast({
          message: "Failed to retrieve novels",
          type: "error",
        });
      }
    } catch (err) {
      console.error("Error fetching novels:", err);
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

  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>All Novels</h1>
        <span className="ad__novel__sc__one__span"></span>
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
          ) : novels.length == 0 ? (
            <NoResult />
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
                    onClick={() => navigate(`${novel.id}`)}
                  >
                    {novel.id}
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate(`${novel.id}`)}
                  >
                    {novel.title}
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate(`${novel.id}`)}
                  >
                    {novel.author.name}
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate(`${novel.id}`)}
                  >
                    {novel.genres[0]}
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate(`${novel.id}`)}
                  >
                    {novel.num_chapters}
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate(`${novel.id}`)}
                  >
                    {novel.num_views}
                  </div>
                  <div
                    className="admin-table-cell"
                    onClick={() => navigate(`${novel.id}`)}
                  >
                    {novel.completed ? `completed` : `Incomplete`}
                  </div>

                  <div className="admin-table-cell">
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <h3
                        onClick={() => toggleActionDropdown(novel.id)}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        ...
                      </h3>
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
                                setNovelId(novel.id);
                                toggleActionDropdown(novel?.id);
                              }}
                            >
                              Assign to editor <FaArrowRight />
                            </li>
                            <li
                              onClick={() => {
                                handleModalClick("reject");
                                toggleActionDropdown(novel?.id);
                              }}
                            >
                              Reject <FaArrowRight />{" "}
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Modal isOpen={isOpen.assign} onClose={closeModal}>
        <div className="admin__modal" style={{ width: "300px" }}>
          <h1>Assign Editor</h1>
          {errorMessage && (
            <p
              style={{
                color: "red",
              }}
            >
              {errorMessage}
            </p>
          )}
          <form
            className="admin__modal__form"
            style={{
              maxHeight: "500px",
              overflowY: "auto",
            }}
          >
            {editors.map((editor, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid gray",
                  padding: "10px",
                  width: "100%",
                  borderRadius: "25px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <input
                  type="radio"
                  name="editor"
                  value={editor.id}
                  onChange={handleEditorChange}
                />
                {`${editor.first_name} ${editor.first_name}`}
              </div>
            ))}
          </form>
          <button onClick={handleAssignEditor}>
            {loading ? <ClipLoader size={20} /> : `Assign editor`}
          </button>
        </div>
      </Modal>

      <Modal isOpen={isOpen.reject} onClose={closeModal}>
        <div className="admin__modal" style={{ width: "300px" }}>
          <h1>Reason for rejection</h1>
          <form className="admin__modal__form">
            <textarea
              name="rejection"
              id="rejection"
              type="text"
              onChange={handleChange}
            ></textarea>
          </form>
          <button>{loading ? <ClipLoader size={20} /> : `Submit`}</button>
        </div>
      </Modal>

      <Modal isOpen={isOpen.delete} onClose={closeModal}>
        <div className="admin__modal">
          <h1>Are you sure you want to delete?</h1>

          <button onClick={() => handleDeleteNovel(deleteId)}>
            {loading ? <ClipLoader size={20} /> : `Delete permanently`}
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default AdminNovel;
