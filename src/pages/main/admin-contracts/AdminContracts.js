import "./admin-contracts.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../../component/splash/loading/Loading";
import { useGetContracts } from "../../../redux/actions/contractAction";
import Modal from "../../../component/modal/Modal";
import NoResult from "../../../component/splash/no-result/NoResult";
import { ClipLoader } from "react-spinners";

function AdminContracts() {
  const getContracts = useGetContracts();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [contracts, setContracts] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();
  const [selectedContracts, setSelectedContracts] = useState([]);

  const [isOpen, setIsOpen] = useState({
    delete: false,
  });
  const closeModal = () => {
    setIsOpen({
      delete: false,
    });
  };
  const handleModalClick = (option) => {
    if (option === "delete") {
      setIsOpen((prev) => ({ ...prev, delete: true }));
    } else {
      closeModal();
    }
  };

  const handleSelectContract = (id) => {
    setSelectedContracts((prevSelectedContracts) =>
      prevSelectedContracts.includes(id)
        ? prevSelectedContracts.filter((contractId) => contractId !== id)
        : [...prevSelectedContracts, id]
    );
  };

  const handleSelectAllContracts = () => {
    if (selectedContracts.length === contracts.length) {
      setSelectedContracts([]);
    } else {
      setSelectedContracts(contracts.map((contract) => contract.id));
    }
  };

  const handleBulkAction = () => {
    alert(
      `Performing bulk action on contracts: ${selectedContracts.join(", ")}`
    );
  };

  const handleGetContracts = async () => {
    try {
      setLoading(true);
      const response = await getContracts();
      setContracts(response.payload.results);
      console.log("get contracts", response);
    } catch (err) {
      console.error("Error fetching Contracts:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteContract = async (id) => {
    // try {
    //   setLoading(true);
    //   const response = await deleteContract(id);
    //   if (response.meta.requestStatus == "fulfilled") {
    //     toastManager.addToast({
    //       message: "Contract deleted successfully",
    //       type: "success",
    //     });
    //     triggerManualUpdate();
    //     return;
    //   } else {
    //     toastManager.addToast({
    //       message: "Failed to delete Contract",
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
    handleGetContracts();
  }, []);

  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>New Contracts</h1>
      </section>
      <section className="ad__novel__sc__three">
        <div className="admin-table">
          <div className="admin-table-header">
            <div className="admin-table-cell">
              <input
                type="checkbox"
                checked={selectedContracts.length === contracts.length}
                onChange={handleSelectAllContracts}
              />
            </div>
            <div className="admin-table-cell">S/N</div>
            <div className="admin-table-cell">Title</div>
            <div className="admin-table-cell">Author</div>
            <div className="admin-table-cell">Category</div>
            <div className="admin-table-cell">Planned Length</div>
            <div className="admin-table-cell">Action</div>
          </div>
          {loading ? (
            <Loading />
          ) : contracts.length == 0 ? (
            <NoResult />
          ) : (
            <div className="admin-table-body">
              {contracts.map((contract) => (
                <div key={contract.id} className="admin-table-row">
                  <div className="admin-table-cell">
                    <input
                      type="checkbox"
                      checked={selectedContracts.includes(contract.id)}
                      onChange={() => handleSelectContract(contract.id)}
                    />
                  </div>
                  <div className="admin-table-cell">{contract.id}</div>
                  <div className="admin-table-cell">{contract.novel}</div>
                  <div className="admin-table-cell">{contract.full_name}</div>
                  <div className="admin-table-cell">
                    {contract.contract_type}
                  </div>
                  <div className="admin-table-cell">
                    {contract.planned_length}
                  </div>
                  <div className="admin-table-cell">{contract.action}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Modal isOpen={isOpen.delete} onClose={closeModal}>
        <div className="admin__modal">
          <h1>Are you sure you want to delete?</h1>

          <button onClick={() => handleDeleteContract(deleteId)}>
            {loading ? <ClipLoader size={20} /> : `Delete permanently`}
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default AdminContracts;
