import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import "./admin-authors-single.css";
import { useParams } from "react-router-dom";
import { useFetchUser } from "../../../redux/actions/userActions";
import NoResult from "../../../component/splash/no-result/NoResult";
import Loading from "../../../component/splash/loading/Loading";
import { FaCircleUser } from "react-icons/fa6";
import { useGetAuthorNovels } from "../../../redux/actions/bookActions";

function AdminAuthorsSingle() {
  const fetchUser = useFetchUser();
  const getAuthorNovels = useGetAuthorNovels();
  const { id } = useParams();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState(null);
  const [novels, setNovels] = useState([]);

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

  const handleGetAuthorNovels = async () => {
    try {
      setLoading(true);
      const response = await getAuthorNovels(id);
      console.log("author novels", response);

      if (response?.payload) {
        setErrorMessage("");
        setNovels(response?.payload?.results);
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
    handleGetAuthorNovels();
  }, []);

  return (
    <div className="aas">
      <section className="ad__novel__sc__one">
        <h1>Author</h1>
        <span className="ad__novel__sc__one__span"></span>
      </section>
      <section className="admin__profile__section__one">
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
          </div>
        </div>
      </section>
      <section className="aas__section__one">
        <h1>Novels</h1>
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
              <div className="admin-table-cell">S/N</div>
              <div className="admin-table-cell">Name</div>
              <div className="admin-table-cell">Chapters</div>
            </div>
            {loading ? (
              <Loading />
            ) : novels?.length == 0 ? (
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

                    <div className="admin-table-cell">{novel.id}</div>
                    <div className="admin-table-cell">{novel.title}</div>
                    <div className="admin-table-cell">{novel.num_chapters}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </section>
    </div>
  );
}

export default AdminAuthorsSingle;
