import "./admin-withdrawals.css";
import { TiExportOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import Loading from "../../../component/splash/loading/Loading";
import NoResult from "../../../component/splash/no-result/NoResult";
import { useGetWithdrawals } from "../../../redux/actions/withdrawalActions";
import { useNavigate } from "react-router-dom";

function AdminWithdrawals() {
  const getWithdrawals = useGetWithdrawals();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [withdrawals, setWithdrawals] = useState([]);
  const navigate = useNavigate();
  const [selectedWithdrrawals, setSelectedWithdrrawals] = useState([]);

  const handleSelectUser = (id) => {
    setSelectedWithdrrawals((prevSelectedWithdrrawals) =>
      prevSelectedWithdrrawals.includes(id)
        ? prevSelectedWithdrrawals.filter((userId) => userId !== id)
        : [...prevSelectedWithdrrawals, id]
    );
  };

  const handleSelectAllWithdrawals = () => {
    if (selectedWithdrrawals.length === withdrawals.length) {
      setSelectedWithdrrawals([]);
    } else {
      setSelectedWithdrrawals(withdrawals.map((withdrawal) => withdrawal.id));
    }
  };

  const handleBulkAction = () => {
    alert(
      `Performing bulk action on withdrawals: ${selectedWithdrrawals.join(
        ", "
      )}`
    );
  };

  const handleGetWithdrawals = async () => {
    try {
      setLoading(true);
      const response = await getWithdrawals();
      setWithdrawals(response.payload.results);
      console.log("get withdrawals", response);
    } catch (err) {
      console.error("Error fetching withdrawals:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetWithdrawals();
  }, []);

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
          disabled={selectedWithdrrawals.length === 0}
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
                checked={selectedWithdrrawals.length === withdrawals.length}
                onChange={handleSelectAllWithdrawals}
              />
            </div>
            <div className="admin-table-cell">S/N</div>
            <div className="admin-table-cell">Username</div>
            <div className="admin-table-cell">Email Address</div>
            <div className="admin-table-cell">Amount</div>
            <div className="admin-table-cell">Date</div>
            <div className="admin-table-cell">Status</div>
            {/* <div className="admin-table-cell">Action</div> */}
          </div>
          {loading ? (
            <Loading />
          ) : withdrawals.length == 0 ? (
            <NoResult />
          ) : (
            <div className="admin-table-body">
              {withdrawals.map((withdrawal) => (
                <div key={withdrawal.id} className="admin-table-row">
                  <div className="admin-table-cell">
                    <input
                      type="checkbox"
                      checked={selectedWithdrrawals.includes(withdrawal.id)}
                      onChange={() => handleSelectUser(withdrawal.id)}
                    />
                  </div>
                  <div className="admin-table-cell">{withdrawal.id}</div>
                  <div className="admin-table-cell">{withdrawal.userlName}</div>
                  <div className="admin-table-cell">{withdrawal.email}</div>
                  <div className="admin-table-cell">{withdrawal.amount}</div>
                  <div className="admin-table-cell">{withdrawal.date}</div>
                  <div className="admin-table-cell">{withdrawal.status}</div>
                  {/* <div className="admin-table-cell">{withdrawal.action}</div> */}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
export default AdminWithdrawals;
