import { BiPlus } from "react-icons/bi";
import "./admin-coins.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../../component/splash/loading/Loading";
import NoResult from "../../../component/splash/no-result/NoResult";
import { useGetCoins } from "../../../redux/actions/coinActions";
import Modal from "../../../component/modal/Modal";
import { MdDelete } from "react-icons/md";

function AdminCoins() {
  const getCoins = useGetCoins();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [coins, setCoins] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();
  const [selectedCoins, setSelectedCoins] = useState([]);

  const [formData, setFormData] = useState({
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

  const handleSelectCoin = (id) => {
    setSelectedCoins((prevSelectedCoins) =>
      prevSelectedCoins.includes(id)
        ? prevSelectedCoins.filter((coinId) => coinId !== id)
        : [...prevSelectedCoins, id]
    );
  };

  const handleSelectAllCoins = () => {
    if (selectedCoins.length === coins.length) {
      setSelectedCoins([]);
    } else {
      setSelectedCoins(coins.map((coin) => coin.id));
    }
  };

  const handleBulkAction = () => {
    alert(`Performing bulk action on coins: ${selectedCoins.join(", ")}`);
  };

  const handleGetCoins = async () => {
    try {
      setLoading(true);
      const response = await getCoins();
      setCoins(response.payload.results);
      console.log("get Coins", response);
    } catch (err) {
      console.error("Error fetching coins:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCoin = async (id) => {
    // try {
    //   setLoading(true);
    //   const response = await deleteCoin(id);
    //   if (response.meta.requestStatus == "fulfilled") {
    //     toastManager.addToast({
    //       message: "Coin deleted successfully",
    //       type: "success",
    //     });
    //     triggerManualUpdate();
    //     return;
    //   } else {
    //     toastManager.addToast({
    //       message: "Failed to delete Coin",
    //       type: "error",
    //     });
    //   }
    // } catch (err) {
    //   console.error("Error deleting:", err);
    //   toastManager.addToast({
    //     message: err,
    //     type: "error",
    //   });
    // } finally {
    //   setLoading(false);
    //   closeModal();
    // }
  };

  useEffect(() => {
    handleGetCoins();
  }, []);

  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>Manage coins</h1>
        <span className="ad__novel__sc__one__span">
          <button
            className="ad__novel__sc__one__span__button alt"
            onClick={() => navigate("new")}
          >
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
                checked={selectedCoins.length === coins.length}
                onChange={handleSelectAllCoins}
              />
            </div>
            <div className="admin-table-cell">S/N</div>
            <div className="admin-table-cell">Total Coins</div>
            <div className="admin-table-cell">Price</div>
            <div className="admin-table-cell">Bonus</div>
            <div className="admin-table-cell">Currency</div>
            <div className="admin-table-cell">Action</div>
          </div>
          {loading ? (
            <Loading />
          ) : coins.length == 0 ? (
            <NoResult />
          ) : (
            <div className="admin-table-body">
              {coins.map((coin) => (
                <div key={coin.id} className="admin-table-row">
                  <div className="admin-table-cell">
                    <input
                      type="checkbox"
                      checked={selectedCoins.includes(coin.id)}
                      onChange={() => handleSelectCoin(coin.id)}
                    />
                  </div>
                  <div className="admin-table-cell">{coin.id}</div>
                  <div className="admin-table-cell">{coin.numCoins}</div>
                  <div className="admin-table-cell">{coin.price}</div>
                  <div className="admin-table-cell">{coin.bonus}</div>
                  <div className="admin-table-cell">{coin.currency}</div>
                  <div className="admin-table-cell">
                    <MdDelete
                      onClick={() => {
                        setDeleteId(coin.id);
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
          <h1>Add New Coin</h1>
          <form className="admin__modal__form">
            <input
              name="coin"
              id="coin"
              type="text"
              placeholder="Enter coin"
              onChange={handleChange}
            />
          </form>
          <button>Add New Coin</button>
        </div>
      </Modal>

      <Modal isOpen={isOpen.delete} onClose={closeModal}>
        <div className="admin__modal">
          <h1>Are you sure you want to delete?</h1>

          <button onClick={() => handleDeleteCoin(deleteId)}>
            Delete permanently
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default AdminCoins;
