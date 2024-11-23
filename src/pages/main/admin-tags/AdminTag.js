import { BiPlus } from "react-icons/bi";
import "./admin-tags.css";
import { useEffect, useState } from "react";
import {
  useCreateTag,
  useCreateTagCategories,
  useDeleteTag,
  useGetTagCategories,
  useGetTags,
} from "../../../redux/actions/tagsActions";
import toastManager from "../../../component/toast/ToasterManager";
import Loading from "../../../component/splash/loading/Loading";
import Modal from "../../../component/modal/Modal";
import { MdDelete } from "react-icons/md";
import { ClipLoader } from "react-spinners";

function AdminTags() {
  const createTagCategories = useCreateTagCategories();
  const createTag = useCreateTag();
  const deleteTag = useDeleteTag();
  const getTags = useGetTags();
  const getTagCategories = useGetTagCategories();
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagCategories, setTagCategories] = useState([]);
  const [manualUpdate, setManualUpdate] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [formData, setFormData] = useState({
    tag: "",
    category: "",
  });
  const [isOpen, setIsOpen] = useState({
    new: false,
    newCategory: false,
    delete: false,
  });
  const closeModal = () => {
    setIsOpen({
      new: false,
      newCategory: false,
      delete: false,
    });
  };
  const handleModalClick = (option) => {
    if (option === "new") {
      setIsOpen((prev) => ({ ...prev, new: true }));
    } else if (option === "newCategory") {
      setIsOpen((prev) => ({ ...prev, newCategory: true }));
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
    if (selectedUsers.length === tags.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(tags?.map((tag) => tag.id));
    }
  };

  const handleBulkAction = () => {
    alert(`Performing bulk action on users: ${selectedUsers.join(", ")}`);
  };

  const handleGetTags = async () => {
    try {
      setLoading(true);
      const response = await getTags();
      if (response.payload && response.meta.requestStatus == "fulfilled") {
        setTags(response.payload.results);
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

  const handleGetTagCategories = async () => {
    try {
      setLoading(true);
      const response = await getTagCategories();
      if (response.payload) {
        setTagCategories(response.payload.results);
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

  const handleCreateTag = async () => {
    try {
      setLoading(true);
      const response = await createTag({
        name: formData.tag,
        category: formData.category,
      });
      if (response.status == "failed") {
        toastManager.addToast({
          message: response.message,
          type: "error",
        });
        return;
      }
      if (response.payload && response.meta.requestStatus == "fulfilled") {
        toastManager.addToast({
          message: "Tag created successfully",
          type: "success",
        });
        setFormData({
          tag: "",
          category: "",
        });
        triggerManualUpdate();
        closeModal();
        return;
      } else {
        toastManager.addToast({
          message: "Failed to create tags",
          type: "error",
        });
      }
    } catch (err) {
      console.error("Error fetching tags:", err);
      toastManager.addToast({
        message: err,
        type: "error",
      });
    } finally {
      setLoading(false);
      closeModal();
    }
  };

  const handleCreateCategory = async () => {
    try {
      setLoading(true);
      const response = await createTagCategories({
        name: formData.category,
      });
      if (response.payload && response.meta.requestStatus == "fulfilled") {
        toastManager.addToast({
          message: "Tag category created successfully",
          type: "success",
        });
        setFormData({
          tag: "",
          category: "",
        });
        triggerManualUpdate();
        closeModal();
        return;
      } else {
        toastManager.addToast({
          message: "Failed to create tag category",
          type: "error",
        });
      }
    } catch (err) {
      console.error("Errorcreating tag category:", err);
      toastManager.addToast({
        message: err,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTag = async (id) => {
    try {
      setLoading(true);
      const response = await deleteTag(id);
      console.log("delete response", response);
      if (response.meta.requestStatus == "fulfilled") {
        toastManager.addToast({
          message: "Tag deleted successfully",
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
      handleGetTags();
      handleGetTagCategories();
    }
  }, [manualUpdate]);

  const triggerManualUpdate = () => {
    setManualUpdate(true);
    handleGetTags();
    handleGetTagCategories();
    setManualUpdate(false);
  };

  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>Tags</h1>
        <span className="ad__novel__sc__one__span">
          <button
            className="ad__novel__sc__one__span__button alt"
            onClick={() => handleModalClick("new")}
          >
            <BiPlus /> Add tag
          </button>
          <button
            className="ad__novel__sc__one__span__button alt"
            onClick={() => handleModalClick("newCategory")}
          >
            <BiPlus /> Add category
          </button>
        </span>
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
            <div className="admin-table-cell">Tag</div>
            <div className="admin-table-cell">Categories</div>
            <div className="admin-table-cell">Action</div>
          </div>
          {loading ? (
            <Loading />
          ) : (
            <div className="admin-table-body">
              {tags?.map((tag) => (
                <div key={tag.id} className="admin-table-row">
                  <div className="admin-table-cell">{tag.name}</div>
                  <div className="admin-table-cell">{tag.category}</div>
                  <div className="admin-table-cell">
                    <MdDelete
                      onClick={() => {
                        setDeleteId(tag.id);
                        handleModalClick("delete");
                      }}
                      style={{
                        cursor: "pointer",
                        fontSize: "14px",
                        padding: "0",
                        transform: "scale(1.5)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Modal isOpen={isOpen.new} onClose={closeModal}>
        <div className="admin__modal">
          <h1>Create new tag</h1>
          <form className="admin__modal__form">
            <input
              name="tag"
              id="tag"
              type="text"
              placeholder="Enter tag"
              onChange={handleChange}
            />
            <select
              required
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value={null}>--</option>
              {tagCategories?.map((category, id) => (
                <option key={id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </form>
          <button onClick={handleCreateTag}>Add Tag</button>
        </div>
      </Modal>

      <Modal isOpen={isOpen.newCategory} onClose={closeModal}>
        <div className="admin__modal">
          <h1>Create new category</h1>
          <form className="admin__modal__form">
            <input
              name="category"
              id="category"
              type="text"
              placeholder="Enter catgory"
              onChange={handleChange}
            />
          </form>
          <button onClick={handleCreateCategory}>Add Category</button>
        </div>
      </Modal>

      <Modal isOpen={isOpen.delete} onClose={closeModal}>
        <div className="admin__modal">
          <h1>Are you sure you want to delete?</h1>

          <button onClick={() => handleDeleteTag(deleteId)}>
            {loading ? <ClipLoader size={20} /> : `Delete permanently`}
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default AdminTags;
