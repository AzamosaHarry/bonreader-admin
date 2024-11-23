import { BiPlus } from "react-icons/bi";
import "./admin-profile.css";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { useFetchUserMe } from "../../../redux/actions/userActions";
import { useEffect, useState } from "react";

function AdminProfile() {
  const navigate = useNavigate();
  const fetchUser = useFetchUserMe();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState(null);

  const handleFetchUser = async () => {
    try {
      setLoading(true);
      const response = await fetchUser();

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
    <div className="admin__profile ad__novel">
      <section className="ad__novel__sc__one">
        <h1>My Profile</h1>
        <span className="ad__novel__sc__one__span">
          {/* <button
            className="ad__novel__sc__one__span__button alt"
            onClick={() => navigate("create")}
          >
            <BiPlus /> Add new
          </button> */}
        </span>
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
              <h3>Admin</h3>
            </span>
            <h3>{`ID: ${user?.id}`}</h3>
            <h3>
              <MdEmail /> {user?.email}
            </h3>
          </div>
        </div>
      </section>
      <section className="admin__profile__section__two">
        <button onClick={() => navigate("edit")}>Edit Info</button>
      </section>
    </div>
  );
}

export default AdminProfile;
