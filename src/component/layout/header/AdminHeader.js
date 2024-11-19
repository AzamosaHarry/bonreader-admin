import { BiMenu } from "react-icons/bi";
import "./admin-header.css";
import image1 from "../../../assets/icons/logo.png";
import image2 from "../../../assets/profile-image.jpg";
import { useEffect, useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

function AdminHeader({ handleNav }) {
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
          <img alt="profile" src={image2} />
          <p>Ramon Ridwan</p>
        </div>
        <div>
          <IoNotificationsOutline className="ad__header__sc__two__notification__icon" />
        </div>
      </section>
    </div>
  );
}

export default AdminHeader;
