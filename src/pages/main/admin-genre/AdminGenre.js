import { BiPlus } from "react-icons/bi";
import "./admin-genre.css";
import { FiFilter } from "react-icons/fi";
import { TiExportOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import Modal from "../../../component/modal/Modal";
import toastManager from "../../../component/toast/ToasterManager";
import {
  useCreateGenres,
  useDeleteGenres,
  useGetGenres,
} from "../../../redux/actions/genresActions";
import Loading from "../../../component/splash/loading/Loading";

function AdminGenre() {
  const getGenres = useGetGenres();
  const createGenres = useCreateGenres();
  const deleteGenres = useDeleteGenres();
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [manualUpdate, setManualUpdate] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [formData, setFormData] = useState({
    genre: "",
  });
  const [isOpen, setIsOpen] = useState({
    new: false,
    delete: false,
  });
  const closeModal = () => {
    setIsOpen({
      new: false,
      delete: false,
    });
  };
  const handleModalClick = (option) => {
    if (option === "new") {
      setIsOpen((prev) => ({ ...prev, new: true }));
    } else if (option === "delete") {
      setIsOpen((prev) => ({ ...prev, delete: true }));
    } else {
      closeModal();
    }
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
    if (selectedUsers.length === genres.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(genres.map((user) => user.id));
    }
  };

  const handleBulkAction = () => {
    alert(`Performing bulk action on users: ${selectedUsers.join(", ")}`);
  };

  const handleGetGenres = async () => {
    try {
      setLoading(true);
      const response = await getGenres();
      if (response.payload && response.meta.requestStatus == "fulfilled") {
        setGenres(response.payload.results);
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
  const handleAddGenre = async () => {
    try {
      setLoading(true);
      const response = await createGenres({ name: formData.genre });

      if (response.payload && response.meta.requestStatus == "fulfilled") {
        closeModal();
        toastManager.addToast({
          message: "Genre added successfully",
          type: "success",
        });
        triggerManualUpdate();
        return;
      } else {
        toastManager.addToast({
          message: "Failed to add genres",
          type: "error",
        });
      }
    } catch (error) {
      toastManager.addToast({
        message: error,
        type: "error",
      });
    } finally {
      setLoading(false);
      closeModal();
    }
  };

  const handleDeleteGenres = async (id) => {
    try {
      setLoading(true);
      const response = await deleteGenres(id);
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

  useEffect(() => {
    if (!manualUpdate) {
      handleGetGenres();
    }
  }, [manualUpdate]);

  const triggerManualUpdate = () => {
    setManualUpdate(true);
    handleGetGenres();
    setManualUpdate(false);
  };

  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>All Genre</h1>
        <span className="ad__novel__sc__one__span">
          <button
            className="ad__novel__sc__one__span__button alt"
            onClick={() => handleModalClick("new")}
          >
            <BiPlus /> Add new genre
          </button>
        </span>
      </section>
      <section className="ad__novel__sc__three">
        <div className="admin-table">
          <div className="admin-table-header">
            <div className="admin-table-cell">
              <input
                type="checkbox"
                checked={selectedUsers.length === genres.length}
                onChange={handleSelectAllUsers}
              />
            </div>
            <div className="admin-table-cell">S/N</div>
            <div className="admin-table-cell">Genre</div>
            {/* <div className="admin-table-cell">No of Novels</div> */}
            <div className="admin-table-cell">Date Created</div>
            <div className="admin-table-cell">Action</div>
          </div>
          {loading ? (
            <Loading />
          ) : (
            <div className="admin-table-body">
              {genres.map((genre) => (
                <div key={genre.id} className="admin-table-row">
                  <div className="admin-table-cell">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(genre.id)}
                      onChange={() => handleSelectUser(genre.id)}
                    />
                  </div>
                  <div className="admin-table-cell">{genre.id}</div>
                  <div className="admin-table-cell">{genre.name}</div>
                  {/* <div className="admin-table-cell">{genre.totalNovels}</div> */}
                  <div className="admin-table-cell">{genre.createdAt}</div>
                  <div className="admin-table-cell">
                    <button
                      onClick={() => {
                        setDeleteId(genre.id);
                        handleModalClick("delete");
                      }}
                      style={{
                        backgroundColor: "#e74c3c22",
                        color: "#e74c3c",
                        border: "none",
                        padding: "10px 15px",
                      }}
                    >
                      Delete genre
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Modal isOpen={isOpen.new} onClose={closeModal}>
        <div className="admin__modal">
          <h1>Add New Genre</h1>
          <form className="admin__modal__form">
            <input
              name="genre"
              id="genre"
              type="text"
              placeholder="Enter genre"
              onChange={handleChange}
            />
          </form>
          <button onClick={handleAddGenre}>Add New Genre</button>
        </div>
      </Modal>

      <Modal isOpen={isOpen.delete} onClose={closeModal}>
        <div className="admin__modal">
          <h1>Are you sure you want to delete?</h1>
          <p>This action is not reversible</p>
          <button onClick={() => handleDeleteGenres(deleteId)}>
            Delete permanently
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default AdminGenre;
