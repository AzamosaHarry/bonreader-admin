import { BiMenu } from "react-icons/bi";
import "./admin-header.css";
import image1 from "../../../assets/icons/logo.png";
import { useEffect, useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { FaCircleUser } from "react-icons/fa6";

function AdminHeader({ handleNav }) {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const location = useLocation();

  const setNav = () => {
    setActive(!active);
    handleNav(active);
  };

  useEffect(() => {
    setActive(false);
    if (window.innerWidth < 768) {
      handleNav(true);
    }
  }, [location]);

  return (
    <div className="ad__header">
      <section className="ad__sc__one">
        <img src={image1} alt="logo" />
        {active === true ? (
          <MdOutlineClose className="ad__menu" onClick={setNav} />
        ) : (
          <BiMenu className="ad__menu" onClick={setNav} />
        )}
      </section>
      <section className="ad__header__sc__two">
        <div className="ad__header__sc__two__search">
          <input name="search" type="text" placeholder="Search e.g. card" />
        </div>
        <div
          className="ad__header__sc__two__profile"
          onClick={() => navigate("/profile")}
        >
          {user.photo_url ? (
            <img src={user.photo_url} alt="logo" />
          ) : (
            <FaCircleUser style={{ fontSize: "30px", color: "#ccc" }} />
          )}
          <p>{`${user.first_name} ${user.last_name}`}</p>
        </div>
        <div>
          <IoNotificationsOutline className="ad__header__sc__two__notification__icon" />
        </div>
      </section>
    </div>
  );
}

export default AdminHeader;
