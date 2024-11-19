import "./admin-users.css";
import { TiExportOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchUsers } from "../../../redux/actions/userActions";
import Loading from "../../../component/splash/loading/Loading";
import NoResult from "../../../component/splash/no-result/NoResult";

function AdminUsers() {
  const fetchUsers = useFetchUsers();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState([]);
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
    if (selectedUsers?.length === users?.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users?.map((user) => user.id));
    }
  };

  const handleBulkAction = () => {
    alert(`Performing bulk action on users: ${selectedUsers.join(", ")}`);
  };

  const handleFetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetchUsers();
      setUsers(response.payload.results);
      console.log("all users", response);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);

  return (
    <div className="ad__novel">
      <section className="ad__novel__sc__one">
        <h1>All Users</h1>
      </section>
      <section className="ad__novel__sc__two">
        <button className="ad__novel__sc__two__button">
          <TiExportOutline /> Export
        </button>
        <button
          onClick={handleBulkAction}
          disabled={selectedUsers?.length === 0}
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
                checked={selectedUsers?.length === users?.length}
                onChange={handleSelectAllUsers}
              />
            </div>
            <div className="admin-table-cell">S/N</div>
            <div className="admin-table-cell">Name</div>
            <div className="admin-table-cell">Pen Name</div>
            <div className="admin-table-cell">Email Address</div>
            <div className="admin-table-cell">Subscribed</div>
            <div className="admin-table-cell">Sub Validity</div>
            <div className="admin-table-cell">Status</div>
            {/* <div className="admin-table-cell">Action</div> */}
          </div>
          {loading ? (
            <Loading />
          ) : users.length == 0 ? (
            <NoResult />
          ) : (
            <div className="admin-table-body">
              {users?.map((user) => (
                <div
                  key={user.id}
                  className="admin-table-row"
                  onClick={() => navigate("1")}
                >
                  <div className="admin-table-cell">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                    />
                  </div>
                  <div className="admin-table-cell">{user.id}</div>
                  <div className="admin-table-cell">{`${user.first_name} ${user.last_name}`}</div>
                  <div className="admin-table-cell">{user.pen_name}</div>
                  <div className="admin-table-cell">{user.email}</div>
                  <div className="admin-table-cell">
                    {user.subscription_class}
                  </div>
                  <div className="admin-table-cell">
                    {user.subscription_end_date}
                  </div>
                  <div className="admin-table-cell">
                    {user.is_active ? `active` : `inactive`}
                  </div>
                  {/* <div className="admin-table-cell">{user.action}</div> */}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
export default AdminUsers;
