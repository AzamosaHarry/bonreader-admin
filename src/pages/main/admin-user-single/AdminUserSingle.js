import { MdEmail } from "react-icons/md";
import "./admin-user-single.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiCoin } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
import { useFetchUser } from "../../../redux/actions/userActions";
import { FaCircleUser } from "react-icons/fa6";

const DATA = [
  {
    id: 1,
    tag: "08-09-22",
    categories: "11:20",
    action: "Added 'Hangman' to wishlist.",
  },
  {
    id: 2,
    tag: "08-09-22",
    categories: "11:20",
    action: "Added 'Hangman' to wishlist.",
  },
  {
    id: 3,
    tag: "08-09-22",
    categories: "11:20",
    action: "Added 'Hangman' to wishlist.",
  },
  {
    id: 4,
    tag: "08-09-22",
    categories: "11:20",
    action: "Added 'Hangman' to wishlist.",
  },
  {
    id: 5,
    tag: "08-09-22",
    categories: "11:20",
    action: "Added 'Hangman' to wishlist.",
  },
  {
    id: 6,
    tag: "08-09-22",
    categories: "11:20",
    action: "Added 'Hangman' to wishlist.",
  },
  {
    id: 7,
    tag: "08-09-22",
    categories: "11:20",
    action: "Added 'Hangman' to wishlist.",
  },
  {
    id: 8,
    tag: "08-09-22",
    categories: "11:20",
    action: "Added 'Hangman' to wishlist.",
  },

  // Add more user records as needed
];

function AdminUserSingle() {
  const navigate = useNavigate();
  const fetchUser = useFetchUser();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState(null);
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

  const handleFetchUser = async () => {
    try {
      setLoading(true);
      const response = await fetchUser(id);

      if (response?.payload) {
        setErrorMessage("");
        setUser(response.payload);
        return;
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      setErrorMessage(error.response.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchUser();
  }, []);

  return (
    <div className="ad__novel">
      <section
        className="admin__profile__section__one"
        style={{ marginTop: "20p", marginBottom: "30px" }}
      >
        <div className="admin__profile__section__one__start"></div>
        <div className="admin__profile__section__one__end">
          <div className="admin__profile__section__one__end__img">
            {user?.photo_url ? (
              <img src={user.photo_url} />
            ) : (
              <FaCircleUser style={{ fontSize: "150px", color: "#ccc" }} />
            )}
          </div>
          <div className="admin__profile__section__one__end__text">
            <span>
              <h1>{`${user?.first_name} ${user?.last_name}`}</h1>
              <h3>Author</h3>
            </span>
            <h3>{`ID: ${user?.id}`}</h3>
            <h3>
              <MdEmail /> {user?.email}
            </h3>
            <h3>
              <BsCoin style={{}} /> Coins
            </h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button>Deactivate user</button>
              <button style={{ background: "#669933" }}>Gift coin</button>
            </div>
          </div>
        </div>
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
            <div className="admin-table-cell">Date</div>
            <div className="admin-table-cell">Time</div>
            <div className="admin-table-cell">Activity</div>
          </div>
          <div className="admin-table-body">
            {DATA.map((user) => (
              <div key={user.id} className="admin-table-row">
                <div className="admin-table-cell">{user.tag}</div>
                <div className="admin-table-cell">{user.categories}</div>
                <div className="admin-table-cell">{user.action}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminUserSingle;
