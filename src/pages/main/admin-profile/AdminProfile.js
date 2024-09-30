import { BiPlus } from "react-icons/bi";
import "./admin-profile.css";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function AdminProfile() {
  const navigate = useNavigate();

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
          <div className="admin__profile__section__one__end__img"></div>
          <div className="admin__profile__section__one__end__text">
            <span>
              <h1>James Bachelor</h1>
              <h3>Admin</h3>
            </span>
            <h3>ID: 23661346</h3>
            <h3>
              <MdEmail /> jbach@gmail.com
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
